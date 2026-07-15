---
title: "Building a Custom Metrics Exporter for Kubernetes"
description: "Kubernetes ships with built-in awareness of CPU and memory, but most real-world scaling decisions depend on signals that live entirely outside that narrow window: how many messages are waiting in a queue, how long the last batch job took, how many active WebSocket connections a pod is holding. When "
pubDate: 2026-07-14
category: "Kubernetes"
source: "Kubernetes Blog"
link: "https://kubernetes.io/blog/2026/07/14/custom-metrics-exporter-kubernetes/"
---

Kubernetes ships with built-in awareness of CPU and memory, but most real-world scaling decisions depend on signals that live entirely outside that narrow window: how many messages are waiting in a queue, how long the last batch job took, how many active WebSocket connections a pod is holding. When 
