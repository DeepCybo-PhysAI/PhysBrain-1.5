<div align="center">
# PhysBrain 1.5

### From General VLMs to Physical Foundation Model

**Unified embodied understanding, action generation, and future-state prediction.**

[**🌐 Project Website**](https://deepcybo-physai.github.io/PhysBrain-1.5/) · [**📄 Technical Report**](./tech_report.pdf) · [**🤗 Model Weights**](https://huggingface.co/collections/DeepCybo/physbrain-15) · [**🚀 Live Demo**](https://huggingface.co/spaces/hugging-apps/physbrain1-5-8b-demo) · [**🛠️ Evaluation Toolkit**](https://github.com/DeepCybo-PhysAI/PhysBrainEvalKit)

</div>

<img src="assets/logo.png" alt="DeepCybo · Zhongguancun Academy · Zhongguancun Institute of Artificial Intelligence" width="900" />

PhysBrain 1.5 is an embodied foundation model that understands observations, generates goal-directed actions, and predicts how the environment may evolve. Built on Qwen3-VL, it represents language responses, spatial outputs, end-effector trajectories, and future visual states as discrete tokens within one shared autoregressive backbone.

Visit the **[🌐 project website](https://deepcybo-physai.github.io/PhysBrain-1.5/)** for the full model overview, benchmark comparisons, and qualitative examples. The website supports English and Chinese.

## Highlights

- **One model, three capabilities.** Embodied understanding, action generation, and future-state prediction share a unified next-token prediction objective, without task-specific output heads.
- **A physical interaction loop.** Observations guide reasoning and action; actions change the world, and updated observations feed into the next round of interaction.
- **Strong embodied understanding.** In the technical report, PhysBrain 1.5-8B achieves **72.5 overall** across **28 benchmarks**, ranking first among the evaluated open-source models on **14** benchmarks and second on **10**.
- **Models in two sizes.** The **2B** and **8B** checkpoints are available on Hugging Face.

## Model Capabilities

| Capability | What the model does |
| --- | --- |
| **Embodied understanding** | Visual-spatial perception, 3D and multi-view reasoning, embodied planning, pointing and affordance grounding, and visual-trace reasoning. |
| **Action generation** | Predicts end-effector trajectory chunks using ActionPiece tokens and a unified action codebook shared across control configurations and robot setups. |
| **Future-state prediction** | Predicts possible future world states as spatially aligned RGB imagery, depth maps, and robot masks across diverse robot embodiments. |

Language, action, and visual tokens are learned together through a shared autoregressive model. Embodied pre-training supervision comes from human interaction videos; supervised fine-tuning combines human demonstrations, real-robot trajectories, and simulated experience.

![PhysBrain 1.5 architecture: language, action, and visual tokens in a shared autoregressive backbone](https://raw.githubusercontent.com/DeepCybo-PhysAI/PhysBrain-1.5/gh-pages/assets/model-architecture-v2.png)

## Evaluation

The technical report evaluates embodied understanding across five categories: foundational visual-spatial perception; spatial and multi-view understanding; embodied cognition, reasoning, and planning; spatial grounding, pointing, and affordance; and visual-trace and trajectory reasoning.

| Model | Overall score | Ranking treatment |
| --- | ---: | --- |
| **PhysBrain 1.5-8B** | **72.5** | Ranked among the evaluated open-source models |
| PhysBrain 1.5-2B | 66.6 | Reference only; excluded from ranking |

Scores use a 0–100 scale, with higher values indicating better performance. The overall score is the unweighted mean across the 28 benchmarks at the reported precision. Closed-source models are also shown for reference and excluded from the open-source ranking; first- and second-place results include ties.

![PhysBrain 1.5 overall leaderboard and selected benchmark comparisons](https://raw.githubusercontent.com/DeepCybo-PhysAI/PhysBrain-1.5/gh-pages/assets/leaderboard-v5_01.png)

See the [📊 interactive results table](https://deepcybo-physai.github.io/PhysBrain-1.5/#results) and [📄 technical report](./tech_report.pdf) for per-benchmark scores and evaluation details. The [🛠️ PhysBrainEvalKit repository](https://github.com/DeepCybo-PhysAI/PhysBrainEvalKit) provides the evaluation toolkit.

## Get Started

1. **Try the model:** open the [🚀 PhysBrain 1.5-8B live demo](https://huggingface.co/spaces/hugging-apps/physbrain1-5-8b-demo).
2. **Download a checkpoint:** choose a model below and follow its model-card instructions for inference and usage.
3. **Evaluate:** use [🛠️ PhysBrainEvalKit](https://github.com/DeepCybo-PhysAI/PhysBrainEvalKit) for benchmark evaluation.

| Checkpoint | Model card and weights |
| --- | --- |
| PhysBrain 1.5-8B | [🤗 DeepCybo/PhysBrain1.5-8B](https://huggingface.co/DeepCybo/PhysBrain1.5-8B) |
| PhysBrain 1.5-2B | [🤗 DeepCybo/PhysBrain1.5-2B](https://huggingface.co/DeepCybo/PhysBrain1.5-2B) |

This repository hosts the technical report and project documentation. Model checkpoints are hosted on Hugging Face, and evaluation tools are maintained in PhysBrainEvalKit.

## Citation

If you use PhysBrain 1.5 in your research, please cite our technical report:

```bibtex
@misc{physbrain1.5,
  title  = {PhysBrain 1.5 Technical Report},
  author = {{DeepCybo Team}},
  year   = {2026},
  url    = {https://github.com/DeepCybo-PhysAI/PhysBrain-1.5}
}
```

## Team

DeepCybo · Zhongguancun Academy · Zhongguancun Institute of Artificial Intelligence
