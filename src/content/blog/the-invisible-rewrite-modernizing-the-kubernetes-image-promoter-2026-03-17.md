---
title: "The Invisible Rewrite: Modernizing the Kubernetes Image Promoter"
description: "Every container image you pull from registry.k8s.io got there through kpromo, the Kubernetes image promoter. It copies images from staging registries to production, signs them with cosign, replicates signatures across more than 20 regional mirrors, and generates SLSA provenance attestations. If this"
pubDate: 2026-03-17
category: "Kubernetes"
source: "Kubernetes Blog"
link: "https://kubernetes.io/blog/2026/03/17/image-promoter-rewrite/"
---

Every container image you pull from registry.k8s.io got there through kpromo, the Kubernetes image promoter. It copies images from staging registries to production, signs them with cosign, replicates signatures across more than 20 regional mirrors, and generates SLSA provenance attestations. If this
