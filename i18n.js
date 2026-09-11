/* English copy also lives in index.html for visitors without JavaScript.
 * Only trusted, locally authored translations are rendered as HTML.
 * Keep model names, benchmark names, scores, and BibTeX in their original form.
 */
(() => {
  const translations = {
  "nav.overview": {
    "en": "Overview",
    "zh": "概览"
  },
  "nav.loop": {
    "en": "Physical Loop",
    "zh": "物理闭环"
  },
  "nav.results": {
    "en": "Results",
    "zh": "评测结果"
  },
  "nav.action": {
    "en": "Action",
    "zh": "动作生成"
  },
  "nav.future": {
    "en": "Future Prediction",
    "zh": "未来预测"
  },
  "nav.start": {
    "en": "Quick Start",
    "zh": "快速开始"
  },
  "nav.cite": {
    "en": "Citation",
    "zh": "引用"
  },
  "theme.label": {
    "en": "Themes",
    "zh": "主题"
  },
  "theme.title": {
    "en": "Make it yours",
    "zh": "选择你的配色"
  },
  "theme.description": {
    "en": "Choose a gradient for PhysBrain.",
    "zh": "为 PhysBrain 选择一组渐变主题。"
  },
  "theme.aurora": {
    "en": "Aurora",
    "zh": "极光"
  },
  "theme.ocean": {
    "en": "Ocean",
    "zh": "海洋"
  },
  "theme.sunset": {
    "en": "Sunset",
    "zh": "日落"
  },
  "theme.blossom": {
    "en": "Blossom",
    "zh": "花影"
  },
  "hero.tag": {
    "en": "Technical Report · 2026",
    "zh": "技术报告 · 2026"
  },
  "hero.subtitle": {
    "en": "From General VLMs to Physical Foundation Model",
    "zh": "从通用视觉语言模型到物理世界基础模型"
  },
  "link.weights": {
    "en": "🤗 Model Weights",
    "zh": "🤗 模型权重"
  },
  "link.paper": {
    "en": "Paper",
    "zh": "论文"
  },
  "link.demo": {
    "en": "▶ Live Demo",
    "zh": "▶ 在线体验"
  },
  "link.eval": {
    "en": "📐 EvalKit",
    "zh": "📐 评测工具"
  },
  "link.footer_demo": {
    "en": "Demo",
    "zh": "在线体验"
  },
  "stat.score": {
    "en": "Overall score · open-source SOTA",
    "zh": "综合得分 · 开源最优"
  },
  "stat.benchmarks": {
    "en": "Embodied benchmarks evaluated",
    "zh": "具身智能评测基准"
  },
  "stat.wins": {
    "en": "On 14 benchmarks among open-source",
    "zh": "14 项基准开源第一"
  },
  "stat.size": {
    "en": "Parameters · Qwen3-VL backbone",
    "zh": "参数规模 · Qwen3-VL 主干"
  },
  "overview.kicker": {
    "en": "One Model · Three Capabilities",
    "zh": "一个模型 · 三大能力"
  },
  "overview.title": {
    "en": "A Foundation Model for the Physical World",
    "zh": "面向物理世界的基础模型"
  },
  "cap.understanding": {
    "en": "Embodied Understanding",
    "zh": "具身理解"
  },
  "cap.action": {
    "en": "Action Generation",
    "zh": "动作生成"
  },
  "cap.future": {
    "en": "Future-State Prediction",
    "zh": "未来状态预测"
  },
  "cap.understanding_desc": {
    "en": "Visual-spatial perception, 3D & multi-view reasoning, embodied planning, pointing & affordance grounding, and visual-trace reasoning across 28 benchmarks.",
    "zh": "覆盖视觉空间感知、三维与多视角推理、具身规划、指向与可供性定位，以及视觉轨迹推理，并在 28 项基准上进行评测。"
  },
  "cap.action_desc": {
    "en": "ActionPiece tokens encode end-effector trajectories in a unified action codebook shared across control configurations and arm setups — one generalist checkpoint drives varied robotic platforms.",
    "zh": "ActionPiece 词元通过统一的动作码本编码末端执行器轨迹，在不同控制配置和机械臂设置之间共享，使一个通用模型适用于多种机器人平台。"
  },
  "cap.future_desc": {
    "en": "Predicts the world one step ahead as spatially aligned RGB images, depth maps, and robot masks — a multimodal world model inside the same vocabulary.",
    "zh": "以空间对齐的 RGB 图像、深度图和机器人掩码预测未来世界状态，在同一词表中构建多模态世界模型。"
  },
  "loop.kicker": {
    "en": "The Physical Loop",
    "zh": "物理闭环"
  },
  "loop.title": {
    "en": "Observe → Reason → Act → World Changes",
    "zh": "观察 → 推理 → 行动 → 世界变化"
  },
  "loop.observe": {
    "en": "Observe",
    "zh": "观察"
  },
  "loop.reason": {
    "en": "Reason & Ground",
    "zh": "推理与定位"
  },
  "loop.act": {
    "en": "Act",
    "zh": "行动"
  },
  "loop.world": {
    "en": "World Changes",
    "zh": "世界变化"
  },
  "loop.observe_desc": {
    "en": "Perceive 2D scenes and construct 3D spatial representations.",
    "zh": "感知二维场景，构建三维空间表征。"
  },
  "loop.reason_desc": {
    "en": "Plan strategies, localize targets, and ground affordances.",
    "zh": "规划策略、定位目标，并识别可交互区域。"
  },
  "loop.act_desc": {
    "en": "Generate goal-directed end-effector trajectories.",
    "zh": "生成面向任务目标的末端执行器轨迹。"
  },
  "loop.world_desc": {
    "en": "Predict state transitions; new observations close the loop.",
    "zh": "预测状态变化，新观测反馈形成闭环。"
  },
  "arch.kicker": {
    "en": "Architecture",
    "zh": "模型架构"
  },
  "arch.title": {
    "en": "Unified Tokens, Shared Backbone",
    "zh": "统一词元，共享主干"
  },
  "arch.caption": {
    "en": "PhysBrain 1.5 model architecture — language, action, and visual tokens in a single autoregressive stream.",
    "zh": "PhysBrain 1.5 模型架构：语言、动作与视觉词元统一在同一自回归序列中。"
  },
  "results.kicker": {
    "en": "Evaluation",
    "zh": "模型评测"
  },
  "results.title": {
    "en": "Open-Source State of the Art",
    "zh": "开源领先的评测表现"
  },
  "results.chip_score": {
    "en": "🏆 72.5 overall — #1 open-source",
    "zh": "🏆 综合得分 72.5 — 开源第一"
  },
  "results.chip_first": {
    "en": "<b>14×</b> first place",
    "zh": "<b>14 项</b> 第一"
  },
  "results.chip_second": {
    "en": "<b>10×</b> second place",
    "zh": "<b>10 项</b> 第二"
  },
  "results.chip_frontier": {
    "en": "Comparable to <b>proprietary frontier</b>",
    "zh": "媲美<b>前沿闭源模型</b>"
  },
  "results.leaderboard": {
    "en": "Leaderboard",
    "zh": "排行榜"
  },
  "results.caption": {
    "en": "Overall embodied-benchmark scores. All models are independently re-evaluated with one canonical metric per benchmark for direct comparability.",
    "zh": "具身智能基准综合得分。所有模型均经过独立复测，每项基准采用统一指标，确保结果可直接比较。"
  },
  "table.title": {
    "en": "Detailed benchmark results",
    "zh": "各项基准详细结果"
  },
  "table.help": {
    "en": "28 benchmarks · 13 models · Scores out of 100, higher is better. Scroll to compare all models.",
    "zh": "28 项基准 · 13 个模型 · 满分 100，越高越好。滚动表格可对比所有模型。"
  },
  "table.best": {
    "en": "Best open-source",
    "zh": "开源最佳"
  },
  "table.second": {
    "en": "Second-best open-source",
    "zh": "开源次佳"
  },
  "table.muted": {
    "en": "Muted text: reference only",
    "zh": "浅色文字：仅供参考"
  },
  "table.caption": {
    "en": "Results on embodied understanding across 28 benchmarks. Closed-source models and PhysBrain 1.5-2B are excluded from ranking.",
    "zh": "28 项具身理解基准评测结果。闭源模型与 PhysBrain 1.5-2B 不参与排名。"
  },
  "table.benchmark": {
    "en": "Benchmark",
    "zh": "评测基准"
  },
  "table.closed": {
    "en": "Closed source",
    "zh": "闭源模型"
  },
  "table.open": {
    "en": "Open source",
    "zh": "开源模型"
  },
  "table.overall": {
    "en": "Overall Average",
    "zh": "综合平均分"
  },
  "table.cat1": {
    "en": "01 · Foundational Visual-Spatial Perception",
    "zh": "01 · 基础视觉空间感知"
  },
  "table.cat2": {
    "en": "02 · Spatial and Multi-view Understanding",
    "zh": "02 · 空间与多视角理解"
  },
  "table.cat3": {
    "en": "03 · Embodied Cognition, Reasoning, and Planning",
    "zh": "03 · 具身认知、推理与规划"
  },
  "table.cat4": {
    "en": "04 · Spatial Grounding, Pointing, and Affordance",
    "zh": "04 · 空间定位、指向与可供性"
  },
  "table.cat5": {
    "en": "05 · Visual Trace and Trajectory Reasoning",
    "zh": "05 · 视觉轨迹与运动轨迹推理"
  },
  "table.note": {
    "en": "Closed-source models and PhysBrain 1.5-2B are shown for reference and excluded from ranking. Best and second-best results include ties. Overall Average is the unweighted mean across the 28 benchmarks at the reported precision.",
    "zh": "闭源模型与 PhysBrain 1.5-2B 仅供参考，不参与排名。最佳与次佳结果包含并列情况。综合平均分为 28 项基准得分的等权平均值，按报告精度呈现。"
  },
  "cat.perception": {
    "en": "Foundational Visual-Spatial Perception",
    "zh": "基础视觉空间感知"
  },
  "cat.spatial": {
    "en": "3D & Multi-View Understanding",
    "zh": "三维与多视角理解"
  },
  "cat.planning": {
    "en": "Embodied Cognition & Planning",
    "zh": "具身认知与规划"
  },
  "cat.grounding": {
    "en": "Grounding, Pointing & Affordance",
    "zh": "定位、指向与可供性"
  },
  "cat.trace": {
    "en": "Visual Trace & Trajectory Reasoning",
    "zh": "视觉轨迹与运动轨迹推理"
  },
  "cat.future": {
    "en": "Action & Future Prediction",
    "zh": "动作与未来状态预测"
  },
  "cat.perception_desc": {
    "en": "Object counting, spatial relationships, relative depth, metric size estimation.",
    "zh": "物体计数、空间关系、相对深度与实际尺寸估计。"
  },
  "cat.spatial_desc": {
    "en": "Metric distance estimation, room area, egocentric motion under viewpoint shifts.",
    "zh": "实际距离估计、房间面积估计，以及视角变化下的自我运动理解。"
  },
  "cat.planning_desc": {
    "en": "Past-action description, counterfactual prediction, goal decomposition, outcome estimation.",
    "zh": "历史动作描述、反事实预测、目标分解与结果估计。"
  },
  "cat.grounding_desc": {
    "en": "Point-level grounding, target localization, functional affordance identification.",
    "zh": "点级定位、目标定位与功能可供性识别。"
  },
  "cat.trace_desc": {
    "en": "Obstacle-free waypoints, object rearrangement, contact-rich manipulation traces.",
    "zh": "无障碍路径点、物体重排与复杂接触操作轨迹。"
  },
  "cat.future_desc": {
    "en": "End-effector trajectory chunks and RGB + depth + robot-mask future states.",
    "zh": "末端执行器轨迹片段，以及由 RGB、深度图和机器人掩码构成的未来状态。"
  },
  "results.cases": {
    "en": "Qualitative examples of embodied spatial intelligence and planning.",
    "zh": "具身空间智能与规划的定性示例。"
  },
  "action.kicker": {
    "en": "Action Prediction",
    "zh": "动作预测"
  },
  "action.title": {
    "en": "One Checkpoint,<br>Many Robots",
    "zh": "一个模型，<br>多种机器人"
  },
  "action.caption": {
    "en": "Qualitative results of action trajectory prediction.",
    "zh": "动作轨迹预测的定性结果。"
  },
  "future.title": {
    "en": "Anticipating How<br>the World Changes",
    "zh": "预见世界<br>如何变化"
  },
  "future.caption": {
    "en": "Future visual prediction across diverse robot embodiments.",
    "zh": "跨不同机器人形态的未来视觉预测。"
  },
  "start.title": {
    "en": "Standard Interface, Instant Integration",
    "zh": "标准接口，便捷集成"
  },
  "cite.title": {
    "en": "Cite PhysBrain 1.5",
    "zh": "引用 PhysBrain 1.5"
  },
  "cite.description": {
    "en": "If you use PhysBrain 1.5 in your research, please cite our technical report.",
    "zh": "如果您在研究中使用了 PhysBrain 1.5，欢迎引用我们的技术报告。"
  },
  "footer.description": {
    "en": "An embodied foundation model unifying understanding, action generation, and future-state prediction.",
    "zh": "统一具身理解、动作生成与未来状态预测的基础模型。"
  },
  "footer.copyright": {
    "en": "© 2026 DeepCybo Team · PhysBrain 1.5 Technical Report",
    "zh": "© 2026 DeepCybo 团队 · PhysBrain 1.5 技术报告"
  },
  "hero.description": {
    "en": "A unified embodied vision-language model that <b>understands</b> the observed world, <b>generates</b> goal-directed actions, and <b>predicts</b> how the environment will evolve — all as discrete tokens under a single shared autoregressive backbone.",
    "zh": "一个统一的具身视觉语言模型，能够<b>理解</b>观测到的世界、<b>生成</b>面向目标的动作，并<b>预测</b>环境如何演变。所有能力都以离散词元的形式，统一在同一个自回归主干中。"
  },
  "overview.description": {
    "en": "PhysBrain 1.5 mirrors the <b>closed physical loop</b> of agent–environment interaction: observations guide reasoning and action, actions alter the environment, and the updated state feeds back as the next observation. Language responses, structured spatial outputs, end-effector trajectories, and future world states are all formulated as discrete tokens and jointly learned under a unified next-token prediction objective — <b>no task-specific heads</b>.",
    "zh": "PhysBrain 1.5 对应智能体与环境交互的<b>物理闭环</b>：观测引导推理与行动，行动改变环境，更新后的状态再成为下一次观测。语言回答、结构化空间输出、末端执行器轨迹与未来世界状态均表示为离散词元，通过统一的下一词元预测目标联合学习，<b>无需任务专用输出头</b>。"
  },
  "loop.description": {
    "en": "Observations guide reasoning and action; actions change the world, and <b>updated observations feed back into the next round</b>. PhysBrain 1.5 learns understanding, action generation, and future-state prediction within <b>one shared autoregressive model</b>.",
    "zh": "观测引导推理与行动，行动改变世界，<b>更新后的观测再反馈到下一轮交互</b>。PhysBrain 1.5 在<b>同一个共享自回归模型</b>中学习具身理解、动作生成与未来状态预测。"
  },
  "loop.training": {
    "en": "<b>Learning from interaction.</b> Pre-training draws its embodied supervision entirely from human interaction videos — egocentric, synchronized ego–exocentric, and panoramic recordings structured into task-centered episodes. Supervised fine-tuning then combines human demonstrations, real-robot trajectories, and simulated experience.",
    "zh": "<b>从交互中学习。</b>预训练阶段的具身监督完全来自人类交互视频，包括第一视角、同步第一／第三视角及全景视频，并组织为围绕任务的片段。监督微调阶段进一步融合人类演示、真实机器人轨迹与仿真经验。"
  },
  "arch.description": {
    "en": "Built on pretrained Qwen3-VL and extended with dedicated action and visual-state tokens. Semantic, motion, and future-state supervision all update the same parameters through one next-token prediction objective.",
    "zh": "以预训练的 Qwen3-VL 为基础，扩展动作与视觉状态专用词元。语义、运动与未来状态监督通过同一个下一词元预测目标，共同更新共享模型参数。"
  },
  "results.description": {
    "en": "Across <b>28 embodied spatial-intelligence and planning benchmarks</b>, PhysBrain 1.5-8B achieves an overall score of <b>72.5</b> — ranking first among open-source models and performing on par with leading proprietary systems such as GPT-6-Astra (73.3) and Gemini 3.6 Flash (73.0). It ranks first on <b>14 benchmarks</b> and second on <b>10</b> among open-source models.",
    "zh": "在 <b>28 项具身空间智能与规划基准</b>上，PhysBrain 1.5-8B 取得 <b>72.5</b> 的综合得分，在开源模型中排名第一，与 GPT-6-Astra（73.3）及 Gemini 3.6 Flash（73.0）等领先闭源模型表现相当。其中，<b>14 项基准</b>位居开源第一，<b>10 项</b>位居开源第二。"
  },
  "action.description": {
    "en": "Given a task instruction, current observations, and optional recent action history, PhysBrain 1.5 predicts the next end-effector action chunk as a compact sequence of <b>ActionPiece tokens</b>. A unified action codebook and vocabulary are shared across diverse control configurations and arm setups, enabling a single generalist checkpoint to drive varied robotic platforms and manipulation settings.",
    "zh": "给定任务指令、当前观测与可选的历史动作，PhysBrain 1.5 以紧凑的 <b>ActionPiece 词元</b>序列预测下一段末端执行器动作轨迹。统一的动作码本与词表在不同控制配置和机械臂设置之间共享，使一个通用模型适用于多种机器人平台与操作场景。"
  },
  "future.description": {
    "en": "Given the current observation and a task instruction, PhysBrain 1.5 anticipates how actions may reshape the environment. It represents a possible future world state through spatially aligned <b>RGB imagery, depth maps, and robot masks</b> across diverse robot embodiments.",
    "zh": "给定当前观测和任务指令，PhysBrain 1.5 预测动作可能如何改变环境，并通过空间对齐的 <b>RGB 图像、深度图和机器人掩码</b>表示可能的未来世界状态，适用于不同机器人形态。"
  },
  "start.description": {
    "en": "PhysBrain 1.5 uses pretrained Qwen3-VL as its backbone with an extended vocabulary. Its standard model interface lets you reuse existing infrastructure for inference and post-training.",
    "zh": "PhysBrain 1.5 以预训练的 Qwen3-VL 为主干，并扩展词表。标准模型接口支持复用现有基础设施，便捷开展推理与后训练。"
  },
  "theme.choose": {
    "en": "Choose color theme",
    "zh": "选择配色主题"
  },
  "theme.palette": {
    "en": "Gradient palette",
    "zh": "渐变配色"
  },
  "table.legend": {
    "en": "Ranking legend",
    "zh": "排名图例"
  },
  "paper.download": {
    "en": "Download the paper",
    "zh": "下载论文"
  },
  "paper.confirm": {
    "en": "Download the PhysBrain 1.5 paper?",
    "zh": "是否下载 PhysBrain 1.5 论文？"
  },
  "table.best_tip": {
    "en": "Best open-source result",
    "zh": "开源最佳结果"
  },
  "table.second_tip": {
    "en": "Second-best open-source result",
    "zh": "开源次佳结果"
  },
  "table.size_unknown": {
    "en": "Model size not specified",
    "zh": "未注明模型规模"
  },
  "table.reference_tip": {
    "en": "Reference only; excluded from ranking",
    "zh": "仅供参考，不参与排名"
  },
  "setting.minimal": {
    "en": "Evaluation setting: Minimal thinking",
    "zh": "评测设置：最小思考强度"
  },
  "setting.low": {
    "en": "Evaluation setting: Low thinking",
    "zh": "评测设置：低思考强度"
  },
  "setting.adaptive": {
    "en": "Evaluation setting: Adaptive low thinking",
    "zh": "评测设置：自适应低思考强度"
  },
  "setting.thinking": {
    "en": "Evaluation setting: Thinking enabled",
    "zh": "评测设置：启用思考模式"
  },
  "alt.arch": {
    "en": "PhysBrain 1.5 model architecture",
    "zh": "PhysBrain 1.5 模型架构"
  },
  "alt.leaderboard": {
    "en": "PhysBrain 1.5 leaderboard across embodied benchmarks",
    "zh": "PhysBrain 1.5 具身智能基准排行榜"
  },
  "alt.cases": {
    "en": "Qualitative evaluation cases of embodied spatial intelligence and planning",
    "zh": "具身空间智能与规划的定性评测示例"
  },
  "alt.action": {
    "en": "Qualitative results of action trajectory prediction",
    "zh": "动作轨迹预测的定性结果"
  },
  "alt.future": {
    "en": "Future visual prediction across diverse robot embodiments",
    "zh": "跨不同机器人形态的未来视觉预测"
  },
  "alt.institutes": {
    "en": "Zhongguancun Academy and Zhongguancun Institute of Artificial Intelligence",
    "zh": "北京中关村学院与中关村人工智能研究院"
  },
  "meta.description": {
    "en": "PhysBrain 1.5: a unified embodied foundation model for understanding, action generation, and future-state prediction. Open-source SOTA on 28 embodied benchmarks.",
    "zh": "PhysBrain 1.5：统一具身理解、动作生成与未来状态预测的基础模型，在 28 项具身智能基准上取得开源领先表现。"
  },
  "meta.title": {
    "en": "PhysBrain 1.5 — From General VLMs to Physical Foundation Model",
    "zh": "PhysBrain 1.5 — 从通用视觉语言模型到物理世界基础模型"
  },
  "theme.to_dark": {
    "en": "Switch to dark theme",
    "zh": "切换为深色主题"
  },
  "theme.to_light": {
    "en": "Switch to light theme",
    "zh": "切换为浅色主题"
  },
  "theme.light": {
    "en": "Light appearance",
    "zh": "浅色外观"
  },
  "theme.dark": {
    "en": "Dark appearance",
    "zh": "深色外观"
  }
};
  const storageKey='physbrain-language';
  let language='en';
  try{if(localStorage.getItem(storageKey)==='zh-CN')language='zh-CN';}catch{}
  const button=document.getElementById('language-toggle');
  const attributes=['title','aria-label','alt','content'];
  const t=key=>translations[key]?.[language==='zh-CN'?'zh':'en'];
  function applyLanguage(next){
    language=next==='zh-CN'?'zh-CN':'en';
    document.documentElement.lang=language;
    document.querySelectorAll('[data-i18n]').forEach(element=>{
      const value=t(element.dataset.i18n);
      if(value!==undefined)element.innerHTML=value;
    });
    attributes.forEach(attribute=>{
      document.querySelectorAll(`[data-i18n-${attribute}]`).forEach(element=>{
        const value=t(element.getAttribute(`data-i18n-${attribute}`));
        if(value!==undefined)element.setAttribute(attribute,value);
      });
    });
    button.textContent=language==='en'?'中文':'EN';
    button.lang=language==='en'?'zh-CN':'en';
    const label=language==='en'?'Switch to Chinese':'切换为英语';
    button.setAttribute('aria-label',label);
    button.title=label;
    document.dispatchEvent(new Event('languagechange'));
  }
  window.physbrainI18n={t,get language(){return language;}};
  applyLanguage(language);
  button.disabled=false;
  button.addEventListener('click',()=>{
    applyLanguage(language==='en'?'zh-CN':'en');
    try{localStorage.setItem(storageKey,language);}catch{}
  });
})();
