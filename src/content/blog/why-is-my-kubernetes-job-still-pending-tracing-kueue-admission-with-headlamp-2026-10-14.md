---
title: "Why Is My Kubernetes Job Still Pending? Tracing Kueue Admission with Headlamp"
description: "You submit a Kubernetes Job and wait for its Pods to appear. A minute passes. Then another. The Job is still suspended, there are no application logs, and there may not even be a Pod to inspect. In a cluster managed by Kueue, this can be completely normal. Kueue may still be deciding whether the Job"
pubDate: 2026-10-14
category: "Kubernetes"
source: "Kubernetes Blog"
link: "https://kubernetes.io/blog/2026/10/14/tracing-kueue-admission-with-headlamp/"
---

You submit a Kubernetes Job and wait for its Pods to appear. A minute passes. Then another. The Job is still suspended, there are no application logs, and there may not even be a Pod to inspect. In a cluster managed by Kueue, this can be completely normal. Kueue may still be deciding whether the Job
