---
title: "Linux 7.2 Can Significantly Lower Container Exit/Unmount Latency"
description: "A patch series merged for the Linux 7.2 kernel addresses a race condition that can occur when a container is exiting yielding \"VFS: Busy inodes after unmount\" messages and a possible user-after-free condition. But the patch series also goes further and delivers a very nice optimization to lower the "
pubDate: 2026-06-16
category: "Sys-Réseau"
source: "Phoronix"
link: "https://www.phoronix.com/news/Linux-72-Container-Exit-Latency"
---

A patch series merged for the Linux 7.2 kernel addresses a race condition that can occur when a container is exiting yielding "VFS: Busy inodes after unmount" messages and a possible user-after-free condition. But the patch series also goes further and delivers a very nice optimization to lower the 
