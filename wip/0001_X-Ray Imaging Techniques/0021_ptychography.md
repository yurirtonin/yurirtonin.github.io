---
title: Ptychography
---

import Figure from '../../src/components/figure';

Ptychography is a solution to the phase problem. 

Next question, please!

Just kidding! :)

Ptychography is not only a solution to the phase problem. It is a robust solution to it that has gained much traction in the past decades. It has been extensively used now to obtain amazing images of all kinds of samples with great resolution.

To newcomers, it can be a bit hard to understand all the intricacies of the technique and to situate yourself in the Ptycho-world (or at least it was to me when I first started to study it). Honestly, it was hard even to find a "explain it all" reference. Every paper I read lacked some aspect of the explanation, that lead me to three others so I could try understand it all.

Here, we aim to fill that gap by presenting a comprehensive summary of what Ptychography is, how it solves the phase problem and also detail different mathematical aspects of it. 

## Overlapping

Ptychography is a scanning technique which requires overlapping of the illuminated portion of the object at adjacent positions. 

## Magnitude or Fourier Space constraint

The magnitude constraint is the heart of all CDI phase retrieval algorithms. It is where the measured data comes into play. 

## Consistency or Real space constraint

``The variation $(\mathcal{P}(x) - x)$ caused by a projection $\mathcal{P}(x)$ to a set should be orthogonal to any vector $(y)$ that belongs to that set''. In other words

$$
    < (\mathcal{P}(x) - x), y >_w = \sum_d w_d (\mathcal{P}(x) - x)y^*_d = 0
$$
$\forall y \in Q$.

Factor $w_d$ assign different weights to different dimension of the vector space. In our case,

$$
\sum_d w_d (\mathcal{P}(O_r) - O_r)O_{r_0} = 0
$$
with $r_0$ a fixed position. Taking factors $\mathcal{P}_r(O_r)$ and $O_{r_0}$ out of the summation since they do not depend on $k$:

$$
     \mathcal{P}_C(O_r) = \frac{\sum_k w_k O_r}{\sum_k w_k}
$$

By choosing $w_k = |P_r|^2$, this gives
$$
     \mathcal{P_C}(O_r) = \frac{\sum_k p^*_r \psi_r}{\sum_k |p_r|^2}
$$
which is the form of the probe update function in RAAR. The analog holds for the object update function:

$$
    \mathcal{P_C}(p_r) = \frac{\sum_k O^*_r \psi_r}{\sum_k |O_r|^2}
$$

## Algorithms

Ptychograpy algorithms can be devided into three different categories:

- Ptychographic Iterative Engines (PIE algorithms)
- Projection based algorithms
- Maximum-Likelihood refinement

### PIE family

Given a set of $r = 0,1,2,..., N$ scans points, consider $\Pi_F$ as the projector associated to the Fourier constraint. That is, we use it to update the wavefront $\psi_r$ of a certain position with the measured intensity $I_r$

$$
    \psi'_{ir} = \Pi_F(\psi_{ir})
$$
Here, the index $i$ stands for an iteration counter that will be repeated after the algorithm has looped through all positions. 

$$
    \psi''_{ir} = \mathcal{U}_O(\Pi_F(\psi_{ir}))
$$
with $U$ the update function. For mPIE \cite{Maiden2017}, the object update function is

$$
O'_{ir} = O_{ir} + s_o \frac{P^*_{ir} (\psi'_{ir}-\psi_{ir})}{(1-r_o) |P_{ir}|^2 + r_o |P_{ir}|^2_{max} }
$$

$$
P'_{ir} = P_{ir} + s_p \frac{O^*_{ir} (\psi'_{ir}-\psi_{ir})}{(1-r_p) |O_{ir}|^2 + r_p |O_{ir}|^2_{max} }
$$

### Projection algorithms

Wavefront update

$$
    \psi'= [\beta(\mathcal{P}_f \mathcal{R}_r + I  ) + (1-2\beta)\mathcal{P}_r ] \psi
$$
where the reflector relates to the projector as $\mathcal{R}_r = 2\mathcal{P}_r - I$. Distributing terms

$$
    \psi'= \beta(\mathcal{P}_f \mathcal{R}_r \psi + \psi  ) + (1-2\beta)\mathcal{P}_r \psi
$$

### Upgrades to algoritms

#### Probe Decomposition

#### Position Correction

## References 

 - Andrew Maiden, Daniel Johnson, and Peng Li, "Further improvements to the ptychographical iterative engine," Optica 4, 736-745 (2017)
