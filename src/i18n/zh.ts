import type { Messages } from './types';

export const zh: Messages = {
  meta: { home: 'Sonora — 让声音，回归简单。', download: '下载 — Sonora', help: '入门指南 — Sonora', privacy: '隐私 — Sonora', description: '为声音留一片宁静。认识 Sonora：正在为 Windows、macOS 和 Linux 开发的开源桌面录音软件。' },
  common: { features: '功能', download: '下载', help: '入门指南', github: 'GitHub', language: '语言', theme: '切换主题', light: '浅色', dark: '深色', menu: '打开菜单', close: '关闭', skip: '跳至正文', home: '首页', releaseNotes: '发行说明', privacy: '隐私', source: '源代码', issues: '反馈问题', planned: '产品目标', learnMore: '了解详情', for: '适用于', latestRelease: '最新版本', retry: '重新检查' },
  home: {
    eyebrow: '少一些纷扰，多一些灵感。', headline: ['声音，', '简单就好。'], intro: '好想法，值得被听见。精心设计的桌面录音工具，旨在将录制、编辑与音频资料库汇聚于一个安静的空间。', primary: '认识 Sonora', secondary: '探索功能', platforms: '专为 Windows、macOS 和 Linux 设计', artTop: '一点清晰。', artBottom: '无限可能。', artCaption: '为重要的声音留出空间。', values: ['生而开源', '以本地使用为先', '三大平台，同一空间。'], featureEyebrow: '用心，化繁为简', featureTitle: '让一切，各就其位。', featureIntro: '从最初的灵感，到最后的导出。专注而实用的工具，陪伴你的创作节奏。', featureStatus: 'Sonora 正在开发中。以下内容描述产品设计目标，并非已发布版本中经过验证的功能。',
    features: [
      { title: '选择声音的来源。', text: '你的声音、电脑的声音，或两者兼有。灵活的音源，独立音量与录音会话。', detail: '麦克风 · 系统音频 · 多会话' },
      { title: '留下精彩的部分。', text: '修剪首尾、移除片段、跳转时间标记。在保留原始录音的同时，打磨你的声音。', detail: '修剪 · 剪切 · 时间标记' },
      { title: '每个灵感，都有归处。', text: '井然有序的音频资料库。通过文件夹、标签、收藏和笔记，找回每段录音。', detail: '文件夹 · 标签 · 搜索' },
      { title: '从声音，到文字。', text: '可选的设备端转写。选择兼容的本地模型，让处理留在自己的电脑上。', detail: '本地模型 · 可选转写' },
    ],
    formatEyebrow: '你的音频，你的格式。', formatTitle: '一段录音，更多可能。', formatText: '计划支持五种导出格式，兼顾无压缩音频与日常聆听。各版本实际支持的格式将在 GitHub 上说明。', privacyEyebrow: '本就属于你', privacyTitle: '你的声音。\n你的空间。', privacyText: '源于一个简单想法：桌面录音工具应真正属于你。本地文件、可选的本地语音模型，以及可以查看的源代码。', privacyPoints: ['本地录音与资料库设计', '产品计划不包含云端转写', '采用 GPL-3.0 开源许可'], workflowEyebrow: '自然流畅', workflowTitle: '少些设置，多些表达。',
    steps: [{ title: '调成你的样子。', text: '选择语言、音源与录音文件夹。' }, { title: '留住这一刻。', text: '录制、暂停，标记值得回听的时刻。' }, { title: '为灵感安个家。', text: '回听音频、选择格式，让资料库井井有条。' }],
    faqEyebrow: '你可能想知道', faqTitle: '一些好问题。',
    faqs: [
      { question: 'Sonora 免费且开源吗？', answer: 'Sonora 计划作为采用 GPL-3.0 许可的免费软件发布。项目公开后，可通过 GitHub 链接查看应用仓库和许可证。' },
      { question: '现在可以下载吗？', answer: '首个公开版本正在准备中。下载页会检查 GitHub 上已发布的软件包，不会将不存在的软件包显示为可用下载。' },
      { question: '音频会离开我的电脑吗？', answer: '产品规格采用本地录音文件和可选的设备端转写。本网站不访问麦克风，也不接受音频上传。实际实现请以发布版本及其文档为准。' },
      { question: '可以录制系统音频吗？', answer: '在受支持的环境中录制系统音频是产品目标。实际可用性取决于操作系统、权限和音频基础设施，需在发布的应用中确认平台限制。' },
      { question: '计划支持哪些音频格式？', answer: 'WAV、MP3、FLAC、OGG Opus 和 M4A AAC，默认计划使用 WAV。经过验证的格式与质量选项请见发行说明。' },
      { question: '本地转写将如何工作？', answer: '计划使用由你选择的、兼容 whisper.cpp 的本地模型，不会自动下载模型。确切的模型格式和支持的运行组件需以版本文档为准。' },
    ],
    ctaTitle: '为下一个灵感，留个位置。', ctaText: '一种更从容的录音方式正在成形。查看适合你电脑的最新发布信息。',
  },
  download: { eyebrow: '在你的桌面，找到归属', title: '下一段录音，\n从这里开始。', intro: 'Windows、macOS 和 Linux 上的熟悉空间。在 GitHub 查找最新发布的软件包。', recommended: '适合你的系统', allPlatforms: '所有平台', checking: '正在检查已发布版本…', available: '已有公开版本', pending: '首个版本，即将到来。', pendingText: 'Sonora 正在准备首次公开发布，安装包暂未提供。软件包发布后，本页将链接至对应版本。', error: '暂时无法获取版本信息。', errorText: '无法连接 GitHub，或已达到请求限制。请重试，也可直接查看版本页面。', viewRelease: '查看下载选项', follow: '在 GitHub 关注项目', otherPlatforms: '寻找其他平台？', packagePending: '尚未找到已发布的软件包', packageAvailable: 'GitHub 上有已发布的软件包', windows: '让录音拥有熟悉的归处。', mac: '给 Mac，多一点清晰。', linux: '你的桌面，你的方式。', installer: '安装程序', portable: '便携版', architecture: '请选择 GitHub 发行页标明的适合处理器架构的软件包。不同平台的可用软件包可能不同。', sourceTitle: '从源头，保持开放。', sourceText: '在 GitHub 探索项目、阅读发行说明、关注开发进展。应用仓库正在准备公开。', helpTitle: '从这里，轻松开始。', helpText: '安装、音频权限与入门步骤。首次录音前，先熟悉一下。', security: '下载文件由 GitHub Releases 托管。请核对发布者、文件类型及支持的架构。', desktopOnly: 'Sonora 是桌面应用。请在下方选择电脑的操作系统。' },
  help: {
    eyebrow: '一点指引', title: '从一个好开头开始。', intro: '安装 Sonora 并按你的习惯设置的实用指南。', notice: '发布前指南：这些步骤描述预期流程。安装包、权限和模型兼容性需要与首次发布版本核对。', contents: '本页内容',
    sections: [
      { id: 'installation', title: '01 — 安装', paragraphs: ['先打开下载页，检查是否已有适用于你系统的软件包。仅从所链接的 GitHub 发行页下载。', 'Windows：提供后可选择 EXE 安装程序或便携包。安装程序用于常规安装；便携版从解压后的文件夹运行。', 'macOS：选择与处理器匹配的 DMG，打开并按附带说明安装。签名与公证状态请查看发行说明。', 'Linux：提供后可选择 AppImage 或 DEB。在文件属性中允许 AppImage 执行。通过发行版包管理器安装 DEB。请核对支持的发行版与依赖项。'] },
      { id: 'first-start', title: '02 — 首次启动', paragraphs: ['首次设置计划从选择语言开始：English、Türkçe、Deutsch、Français、中文或 Русский。', '选择可写入的录音文件夹，再检查麦克风权限、默认音源和快捷键。默认音源计划为麦克风。', '计划的初始音频目标为高质量配置的 48 kHz 立体声 WAV。实际采集质量取决于输入设备和文档说明的转换。'] },
      { id: 'permissions', title: '03 — 音频与权限', paragraphs: ['Windows：在设置 → 隐私和安全性 → 麦克风中检查访问权限，包括桌面应用权限。系统音频可用性取决于发布版本的实现。', 'macOS：在系统设置 → 隐私与安全性中检查麦克风，以及需要时的屏幕与系统音频录制权限。名称可能因 macOS 版本而异。', 'Linux：核对输入设备和音频路由。PipeWire、PulseAudio、Wayland 门户和桌面环境都可能影响采集。请参阅版本的平台说明。', '找不到系统音源并不代表录制成功。重要录音之前，请选择受支持的音源并检查音量。'] },
      { id: 'recording', title: '04 — 录音与资料库', paragraphs: ['预期流程是选择音源、开始录音、按需暂停，并在不中断思路的情况下添加时间标记。', '停止后，默认流程会打开完整工作区预览，用于聆听和编辑。保存、创建副本或替换原始文件都应明确操作。', '资料库设计包括文件夹、标签、收藏、笔记和可恢复的回收站。请为重要录音保留独立备份。'] },
      { id: 'models', title: '05 — 本地转写', paragraphs: ['可选转写计划使用另行选择的 whisper.cpp 兼容模型，在你的电脑上运行。本网站不上传或转写音频。', '版本发布后，请先阅读兼容性说明再获取模型。仅凭 .bin 扩展名不能证明兼容；运行时和模型版本同样重要。', '在应用的转写设置中选择模型。设计不包含自动下载模型。速度和内存需求取决于硬件及模型大小。'] },
      { id: 'updates', title: '06 — 版本与更新', paragraphs: ['公开发行说明和软件包将放在 GitHub Releases。本网站不显示固定版本号，而是链接至最新版本。', '请查阅发行说明，了解功能、限制、架构和升级步骤。安装程序、便携版、DMG、AppImage 和 DEB 的自动安装支持可能不同。'] },
    ],
    shortcutsTitle: '几个按键，让表达更顺畅。', shortcuts: ['开始 / 停止录音', '暂停 / 继续', '添加时间标记'], shortcutNote: '计划默认快捷键：K、空格、L。全局快捷键支持取决于平台。在应用文本框中输入时，不应触发录音控制。', supportTitle: '需要帮忙？', supportText: '仓库公开后，可通过 GitHub Issues 提交可复现的问题和疑问。请提供操作系统和相关步骤，不要附上私人录音。', supportPending: '应用仓库和问题跟踪页面正在准备中。',
  },
  privacy: { title: '让隐私，清晰可见。', intro: '本页说明此网站，与 Sonora 桌面应用分开。', sections: [
    { title: '这是产品介绍网站', text: '本站不请求麦克风权限，不录音，不接受音频上传，也不运行语音识别。下载链接会前往 GitHub。' },
    { title: '设备上的偏好设置', text: '语言、主题和分析偏好保存在浏览器本地存储中，不会发送至账户或 Sonora 服务器。即使浏览器阻止存储，当前访问仍可正常使用。' },
    { title: '版本可用性', text: '下载页通过 api.github.com 请求公开版本元数据，以判断是否存在平台软件包。GitHub 会收到 IP 地址等常规网络信息，但不包含录音或账户凭据。' },
    { title: '可选的 Statcounter 分析', text: '站点所有者配置 Statcounter 后，只有在你同意时才会加载。根据 Statcounter 隐私政策，可能处理浏览页面、来源、浏览器详情和 IP 地址等信息。拒绝不会限制网站使用。撤回同意会刷新页面，以停止已加载的脚本。' },
    { title: '托管与外部链接', text: '托管服务商处理提供网站所需的技术请求，并可能保留运行日志。跳转至 GitHub 等服务后，适用其各自的隐私政策。字体随网站提供，不向第三方字体服务请求。' },
  ], enabled: 'Statcounter 已配置。', disabled: 'Statcounter 未配置，不会加载分析脚本。', accepted: '你的选择：允许分析。', rejected: '你的选择：拒绝分析。', undecided: '你尚未启用分析。', allow: '允许分析', deny: '拒绝分析', preferences: '分析偏好', bannerTitle: '关于访问统计的小问题。', bannerText: '是否允许可选的 Statcounter 访问统计？你的选择不会影响网站使用。', blocked: '浏览器的“请勿跟踪”已开启，分析保持关闭。' },
  footer: { tagline: '为声音留一片宁静。', product: '产品', resources: '资源', openSource: '生而开放', madeBy: '开发者', status: '桌面应用开发中', websiteSource: '网站源代码' },
  notFound: { title: '片刻安静。', text: '找不到此页面。让我们回到首页。' },
};
