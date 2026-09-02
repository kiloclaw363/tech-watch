---
title: "Kubernetes v1.37: etcd RangeStream Cuts Memory Use on Large List Reads"
description: "I am excited to announce that etcd RangeStream is graduating to beta in Kubernetes v1.37. Paired with etcd v3.7, it reduces the memory the API server and etcd need to read a large collection, and makes peak usage more predictable. The cost of large readsThe API server serves most list and watch requ"
pubDate: 2026-09-01
category: "Kubernetes"
source: "Kubernetes Blog"
link: "https://kubernetes.io/blog/2026/09/01/kubernetes-v1-37-etcd-range-stream/"
---

I am excited to announce that etcd RangeStream is graduating to beta in Kubernetes v1.37. Paired with etcd v3.7, it reduces the memory the API server and etcd need to read a large collection, and makes peak usage more predictable. The cost of large readsThe API server serves most list and watch requ
