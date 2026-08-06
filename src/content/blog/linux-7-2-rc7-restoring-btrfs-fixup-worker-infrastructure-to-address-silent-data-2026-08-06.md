---
title: "Linux 7.2-rc7 Restoring Btrfs Fixup Worker Infrastructure To Address Silent Data Loss"
description: "Back during the Linux 7.2 merge window the Btrfs file-system dropped its COW fixup mechanism, which was used to detect dirty pages without an ordered extent. This code was removed as it was believed the kernel's memory management layer had solved the underlying conditions but in reality it ended up "
pubDate: 2026-08-06
category: "Sys-Réseau"
source: "Phoronix"
link: "https://www.phoronix.com/news/Btrfs-Restores-Fixup-Worker"
---

Back during the Linux 7.2 merge window the Btrfs file-system dropped its COW fixup mechanism, which was used to detect dirty pages without an ordered extent. This code was removed as it was believed the kernel's memory management layer had solved the underlying conditions but in reality it ended up 
