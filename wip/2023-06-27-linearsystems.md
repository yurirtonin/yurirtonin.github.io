---
title: Solving linear systems
author: Yuri R. Tonin
author_title: Physics Engineer
author_url: https://github.com/yurirt94
author_image_url: /img/me.jpg
tags: [linear system]
description: description
image: /img/hunte.png
hide_table_of_contents: false
---


Linear systems are ubiquitous in science and engineering. And the methods for solving them are plenty to the point that it becomes a bit overwhelming when you are starting to dig into the topic. Here, I intend on give you an overview of the different methods so you can build a mental map of it, since the internet has way more to say about the details than I ever could in a simple blog post, rs. 

So let's start... 

First, let's recall what a linear system is. Given a matrix $A$ a known vector $b$ and another unknown vector $x$, the linear system is defined by:

$$
Ax = b
$$

The goal here is to solve for the values of $x$.

The methods for solving such system can be divided into two main families: *direct* and *iterative* methods:

- Direct methods
  - Gaussian elimination
  - LU factorization
  - QR factorization
  - Cholesky decomposition
  - Singular Value Decomposition (SVD)

- Iterative methods
  - Jacobi iteration
  - Gauss-Seidel method
  - Successive over relaxation
  - Krylov subspace methods:
    - Conjugate gradient
    - IDR(s) (Induced dimension reduction)
    - GMRES (generalized minimum residual)
    - BiCGSTAB (biconjugate gradient stabilized)
    - QMR (quasi minimal residual)
    - TFQMR (transpose-free QMR)
    - MINRES (minimal residual method).

More details about each of them will come in the near future. 

Stay tuned! ;) 

<!--truncate-->

<SEO
  uri='blog/name'
  image='img/template.jpg'
  type='article'
/>



