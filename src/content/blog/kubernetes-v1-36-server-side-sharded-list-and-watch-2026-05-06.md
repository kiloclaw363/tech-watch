---
title: "Kubernetes v1.36: Server-Side Sharded List and Watch"
description: "As Kubernetes clusters grow to tens of thousands of nodes, controllers that watch high-cardinality resources like Pods face a scaling wall. Every replica of a horizontally scaled controller receives the full stream of events from the API server, paying the CPU, memory, and network cost to deserializ"
pubDate: 2026-05-06
category: "Kubernetes"
source: "Kubernetes Blog"
link: "https://kubernetes.io/blog/2026/05/06/kubernetes-v1-36-server-side-sharded-list-and-watch/"
---

As Kubernetes clusters grow to tens of thousands of nodes, controllers that watch high-cardinality resources like Pods face a scaling wall. Every replica of a horizontally scaled controller receives the full stream of events from the API server, paying the CPU, memory, and network cost to deserializ
