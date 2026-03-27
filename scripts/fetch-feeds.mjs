/**
 * fetch-feeds.mjs
 * 
 * Récupère les flux RSS configurés et génère des fichiers Markdown
 * dans src/content/blog/ pour Astro.
 * 
 * Usage : node scripts/fetch-feeds.mjs
 */

import { parseStringPromise } from 'xml2js';
import { writeFileSync, mkdirSync, existsSync, readdirSync, unlinkSync, statSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const BLOG_DIR = join(__dirname, '..', 'src', 'content', 'blog');

// ─── CONFIGURATION DES FLUX ──────────────────────────────────────────
const FEEDS = [
  // IA / Machine Learning
  { url: 'https://blog.google/technology/ai/rss/', category: 'IA', source: 'Google AI Blog' },
  { url: 'https://huggingface.co/blog/feed.xml', category: 'IA', source: 'Hugging Face' },

  // Cloud (souverain + enterprise)
  { url: 'https://blog.ovhcloud.com/feed/', category: 'Cloud', source: 'OVHcloud' },
  { url: 'https://www.redhat.com/en/rss/blog', category: 'Cloud', source: 'Red Hat Blog' },

  // Kubernetes
  { url: 'https://kubernetes.io/feed.xml', category: 'Kubernetes', source: 'Kubernetes Blog' },
  { url: 'https://www.cncf.io/blog/feed/', category: 'Kubernetes', source: 'CNCF' },

  // Containers
  { url: 'https://www.docker.com/blog/feed/', category: 'Containers', source: 'Docker Blog' },

  // Sécurité
  { url: 'https://www.bleepingcomputer.com/feed/', category: 'Sécurité', source: 'BleepingComputer' },

  // Sys / Réseau
  { url: 'https://feeds.arstechnica.com/arstechnica/technology-lab', category: 'Sys-Réseau', source: 'Ars Technica' },
  { url: 'https://www.phoronix.com/rss.php', category: 'Sys-Réseau', source: 'Phoronix' },
];

// ─── FETCH & PARSE ───────────────────────────────────────────────────
async function fetchFeed(feedUrl) {
  try {
    const res = await fetch(feedUrl, {
      headers: { 'User-Agent': 'TechWatchBot/1.0' },
      signal: AbortSignal.timeout(15000),
    });
    if (!res.ok) {
      console.warn(`⚠️  ${feedUrl} → HTTP ${res.status}`);
      return [];
    }
    const xml = await res.text();
    const result = await parseStringPromise(xml, { explicitArray: false });

    const items = result?.rss?.channel?.item || result?.feed?.entry || [];
    const itemList = Array.isArray(items) ? items : [items];

    return itemList.slice(0, 5).map(item => ({
      title: item.title?._ || item.title || 'Sans titre',
      link: item.link?._ || item.link?.href || item.link || '',
      description: stripHtml(item.description?._ || item.description || item.summary?._ || item.summary || ''),
      pubDate: new Date(item.pubDate || item.published || item.updated || Date.now()),
    }));
  } catch (err) {
    console.warn(`⚠️  Erreur ${feedUrl}: ${err.message}`);
    return [];
  }
}

function stripHtml(html) {
  return html.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim().slice(0, 300);
}

function slugify(text) {
  return text
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 80);
}

function toFrontmatter(data) {
  return `---
title: "${data.title.replace(/"/g, '\\"')}"
description: "${data.description.replace(/"/g, '\\"')}"
pubDate: ${data.pubDate.toISOString().split('T')[0]}
category: "${data.category}"
source: "${data.source}"
link: "${data.link}"
---

${data.description}
`;
}

// ─── MAIN ────────────────────────────────────────────────────────────
async function main() {
  mkdirSync(BLOG_DIR, { recursive: true });

  console.log(`📡 Récupération de ${FEEDS.length} flux...\n`);

  // ─── DÉDUPPLICATION : fichiers existants ───────────────────────────
  const existingSlugs = new Set(
    readdirSync(BLOG_DIR)
      .filter(f => f.endsWith('.md'))
      .map(f => f.replace(/\.md$/, ''))
  );

  // ─── NETTOYAGE : supprimer les articles > 30 jours ─────────────────
  const maxAge = 30 * 24 * 60 * 60 * 1000; // 30 jours en ms
  const now = Date.now();
  let cleaned = 0;

  for (const file of readdirSync(BLOG_DIR).filter(f => f.endsWith('.md'))) {
    const filepath = join(BLOG_DIR, file);
    const stat = statSync(filepath);
    if (now - stat.mtimeMs > maxAge) {
      unlinkSync(filepath);
      cleaned++;
    }
  }
  if (cleaned > 0) console.log(`🗑️  ${cleaned} articles supprimés (>30 jours)\n`);

  // ─── FETCH ─────────────────────────────────────────────────────────
  let total = 0;
  let newCount = 0;
  let skipped = 0;

  for (const feed of FEEDS) {
    const items = await fetchFeed(feed.url);
    console.log(`  ${feed.source}: ${items.length} articles`);

    for (const item of items) {
      const slug = `${slugify(item.title)}-${item.pubDate.toISOString().split('T')[0]}`;

      if (existingSlugs.has(slug)) {
        skipped++;
        continue;
      }

      const filepath = join(BLOG_DIR, `${slug}.md`);
      const content = toFrontmatter({ ...item, ...feed });

      writeFileSync(filepath, content, 'utf-8');
      total++;
      newCount++;
    }
  }

  // ─── TIMESTAMP ─────────────────────────────────────────────────────
  const fetchInfo = {
    lastFetch: new Date().toISOString(),
    articlesTotal: total,
    articlesNew: newCount,
    articlesSkipped: skipped,
    articlesCleaned: cleaned,
    sources: FEEDS.length,
  };
  writeFileSync(
    join(__dirname, '..', 'last-fetch.json'),
    JSON.stringify(fetchInfo, null, 2),
    'utf-8'
  );

  console.log(`\n✅ ${newCount} nouveaux articles (${skipped} déjà existants, ${cleaned} nettoyés)`);
  console.log(`📊 Total dans le dossier: ${readdirSync(BLOG_DIR).filter(f => f.endsWith('.md')).length} articles`);
}

main().catch(console.error);
