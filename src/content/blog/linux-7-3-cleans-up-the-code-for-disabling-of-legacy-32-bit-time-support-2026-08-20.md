---
title: "Linux 7.3 Cleans Up The Code For Disabling Of Legacy 32-bit Time Support"
description: "The Linux kernel has supported the CONFIG_COMPAT_32BIT_TIME Kconfig build time option for optionally disabling of legacy 32-bit time system call support. This is intended to disable the code that uses a 32-bit integer for time that is thus not Year 2038 safe, but at the cost of breaking compatibilit"
pubDate: 2026-08-20
category: "Sys-Réseau"
source: "Phoronix"
link: "https://www.phoronix.com/news/Linux-7.3-vDSO-32-bit-Time"
---

The Linux kernel has supported the CONFIG_COMPAT_32BIT_TIME Kconfig build time option for optionally disabling of legacy 32-bit time system call support. This is intended to disable the code that uses a 32-bit integer for time that is thus not Year 2038 safe, but at the cost of breaking compatibilit
