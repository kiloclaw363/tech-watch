---
title: "SELinux Volume Label Changes goes GA (and likely implications in v1.37)"
description: "If you run Kubernetes on Linux with SELinux in enforcing mode, plan ahead: a future release (anticipated to be v1.37) is expected to turn the SELinuxMount feature gate on by default. This makes volume setup faster for most workloads, but it can break applications that still depend on the older recur"
pubDate: 2026-04-22
category: "Kubernetes"
source: "Kubernetes Blog"
link: "https://kubernetes.io/blog/2026/04/22/breaking-changes-in-selinux-volume-labeling/"
---

If you run Kubernetes on Linux with SELinux in enforcing mode, plan ahead: a future release (anticipated to be v1.37) is expected to turn the SELinuxMount feature gate on by default. This makes volume setup faster for most workloads, but it can break applications that still depend on the older recur
