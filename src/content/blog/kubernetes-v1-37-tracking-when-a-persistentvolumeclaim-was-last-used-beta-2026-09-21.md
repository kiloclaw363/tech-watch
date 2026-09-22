---
title: "Kubernetes v1.37: Tracking When a PersistentVolumeClaim Was Last Used (Beta)"
description: "Kubernetes v1.37 promotes the PersistentVolumeClaimUnusedSinceTime feature gate to Beta (enabled by default). With this feature, the PersistentVolumeClaim (PVC) protection controller adds an Unused condition to each PVC, telling you whether any running pod currently references it — no custom tooling"
pubDate: 2026-09-21
category: "Kubernetes"
source: "Kubernetes Blog"
link: "https://kubernetes.io/blog/2026/09/21/kubernetes-v1-37-pvc-last-used-time/"
---

Kubernetes v1.37 promotes the PersistentVolumeClaimUnusedSinceTime feature gate to Beta (enabled by default). With this feature, the PersistentVolumeClaim (PVC) protection controller adds an Unused condition to each PVC, telling you whether any running pod currently references it — no custom tooling
