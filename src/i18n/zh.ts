import type { Messages } from './types';

export const zh: Messages = {
  meta: { home: 'Sonora — 让声音，回归简单。', download: '下载 — Sonora', help: '入门指南 — Sonora', privacy: '隐私 — Sonora', description: '在一个安静的空间录音、编辑和转写。下载 Sonora：适用于 Windows、macOS 和 Linux 的免费开源桌面录音软件。' },
  common: { features: '功能', download: '下载', help: '入门指南', github: 'GitHub', language: '语言', theme: '切换主题', light: '浅色', dark: '深色', menu: '打开菜单', close: '关闭', skip: '跳至正文', home: '首页', releaseNotes: '发行说明', privacy: '隐私', source: '源代码', issues: '反馈问题', learnMore: '了解详情', for: '适用于', latestRelease: '最新版本', retry: '重新检查' },
  home: {
    eyebrow: '少一些纷扰，多一些灵感。', headline: ['声音，', '简单就好。'], intro: '好想法，值得被听见。精心设计的桌面录音工具，将录制、编辑与音频资料库汇聚于一个安静的空间。', primary: '下载 Sonora', secondary: '探索功能', platforms: '现已支持 Windows、macOS 和 Linux', artTop: '一点清晰。', artBottom: '无限可能。', artCaption: '为重要的声音留出空间。', values: ['生而开源', '音频留在本地', '三大平台，同一空间。'], featureEyebrow: '用心，化繁为简', featureTitle: '让一切，各就其位。', featureIntro: '从最初的灵感，到最后的导出。专注而实用的工具，陪伴你的创作节奏。',
    features: [
      { title: '选择声音的来源。', text: '你的声音、电脑的声音，或两者兼有。灵活的音源，独立音量与录音会话。', detail: '麦克风 · 系统音频 · 多会话' },
      { title: '留下精彩的部分。', text: '修剪首尾、移除片段、跳转时间标记。预听编辑结果，再保存副本或替换原始文件。', detail: '修剪 · 剪切 · 时间标记' },
      { title: '每个灵感，都有归处。', text: '通过文件夹、标签、收藏、笔记及可搜索的转写文本，整理每一段录音。', detail: '文件夹 · 标签 · 搜索' },
      { title: '从声音，到文字。', text: '使用 whisper.cpp 进行可选的设备端转写。选择 GGML 模型，让处理留在自己的电脑上。', detail: '本地 GGML 模型 · 可选转写' },
    ],
    formatEyebrow: '你的音频，你的格式。', formatTitle: '一段录音，更多可能。', formatText: '借助内置 FFmpeg 导出 WAV、MP3、FLAC、OGG Opus 或 M4A AAC。从高质量 48 kHz 立体声 WAV 开始，或自选格式与质量设置。', privacyEyebrow: '本就属于你', privacyTitle: '你的声音。\n你的空间。', privacyText: '真正属于你的桌面录音工具。本地录音文件、可选的本地语音模型，以及可以查看的源代码。音频不会被发送到在线转写服务。', privacyPoints: ['录音和资料库保存在本地', '设备端转写，不自动下载模型', '采用 GPL-3.0 开源许可'], workflowEyebrow: '自然流畅', workflowTitle: '少些设置，多些表达。',
    steps: [{ title: '调成你的样子。', text: '选择语言、音源与录音文件夹。' }, { title: '留住这一刻。', text: '录制、暂停，标记值得回听的时刻。' }, { title: '为灵感安个家。', text: '回听音频、选择格式，让资料库井井有条。' }],
    faqEyebrow: '你可能想知道', faqTitle: '一些好问题。',
    faqs: [
      { question: 'Sonora 免费且开源吗？', answer: '是的。Sonora 是采用 GPL-3.0 许可的免费软件。源代码、许可证、公开版本与问题跟踪均可在 GitHub 查看。' },
      { question: '现在可以下载吗？', answer: '可以。Windows x64 安装及便携 EXE、适用于 Apple silicon 和 Intel 的 macOS DMG、Linux x64 AppImage 与 DEB 均已发布。请在下载页选择平台。' },
      { question: '音频会离开我的电脑吗？', answer: '录音、资料库和转写处理都留在你的电脑上。Sonora 使用本地 whisper.cpp 模型，而非在线转写服务。本网站不访问麦克风，也不接受音频上传。' },
      { question: '可以录制系统音频吗？', answer: '可以：Windows 使用 WASAPI loopback；macOS 13+ 使用 ScreenCaptureKit 并需屏幕录制权限；Linux 使用 PulseAudio/PipeWire。macOS 12 仅支持麦克风。Wayland 可能显示屏幕选择窗口，但只录制音频。' },
      { question: '支持哪些音频格式？', answer: 'WAV、MP3、FLAC、OGG Opus 和 M4A AAC。默认高质量 48 kHz、立体声、24 位 WAV。已内置 FFmpeg，实际采集质量也取决于输入设备。' },
      { question: '本地转写如何工作？', answer: '在设置 → 转写中选择 ggml-base.bin 等 whisper.cpp GGML 模型，然后打开录音并选择转写。模型不会自动下载。GGUF、PyTorch 和 ONNX 不受支持。x64 电脑需要 AVX2。' },
    ],
    ctaTitle: '为下一个灵感，留个位置。', ctaText: '你的声音、你的电脑、你的下一个好想法。下载 Sonora，开始第一段录音。',
  },
  download: { eyebrow: '在你的桌面，找到归属', title: '下一段录音，\n从这里开始。', intro: 'Windows、macOS 和 Linux 上的熟悉空间。选择平台，从 GitHub 获取最新发布的软件包。', recommended: '适合你的系统', allPlatforms: '所有平台', checking: '正在检查已发布版本…', available: '已有公开版本', pending: '未找到当前可用的安装包。', pendingText: 'GitHub 未返回包含可安装软件包的公开版本。请重试或打开 GitHub Releases 查看下载。', error: '暂时无法获取版本信息。', errorText: '无法连接 GitHub，或已达到请求限制。请重试，也可直接查看版本页面。', viewRelease: '查看下载选项', follow: '查看 GitHub Releases', otherPlatforms: '寻找其他平台？', packagePending: '尚未找到已发布的软件包', packageAvailable: 'GitHub 上有已发布的软件包', windows: 'Windows 10/11 · x64', mac: 'macOS 12+ · Apple silicon 与 Intel', linux: 'Linux x64 · AppImage 与 Debian/Ubuntu', installer: '安装程序', portable: '便携版', architecture: '请选择匹配的架构：Windows 和 Linux 为 x64；macOS 的 Apple silicon 为 arm64，Intel 为 x64。macOS 系统音频需要 13 或更高版本。', sourceTitle: '从源头，保持开放。', sourceText: '在 GitHub 探索 GPL-3.0 源代码、阅读发行说明并关注开发。', helpTitle: '从这里，轻松开始。', helpText: '安装、音频权限与入门步骤。首次录音前，先熟悉一下。', security: '文件由 GitHub Releases 托管。SHA256SUMS.txt 提供校验值。安装与签名详情请见指南。', desktopOnly: 'Sonora 是桌面应用。请在下方选择电脑的操作系统。' },
  help: {
    eyebrow: '一点指引', title: '从一个好开头开始。', intro: '安装 Sonora 并按你的习惯设置的实用指南。', notice: '支持 Windows 10/11 x64、Apple silicon 或 Intel 的 macOS 12+、Linux x64。音频权限、系统录音和更新方式因平台而异。', contents: '本页内容',
    sections: [
      { id: 'installation', title: '01 — 安装', paragraphs: ['在下载页选择软件包。官方 GitHub 发行版的 SHA256SUMS.txt 可用于校验文件完整性。', 'Windows：运行 Setup x64 EXE，或直接运行 Portable x64 EXE。安装程序首先提供六种语言选择。软件包未进行代码签名，SmartScreen 可能显示提示。', 'macOS：Apple silicon 选择 arm64 DMG，Intel 选择 x64 DMG，打开后拖入“应用程序”。应用采用 ad-hoc 签名，未经公证；首次打开方法请见发行说明。', 'Linux：选择 x86_64 AppImage 或 amd64 DEB。在文件属性中允许 AppImage 执行，或通过包管理器安装 DEB。DEB 适用于 Debian/Ubuntu。'] },
      { id: 'first-start', title: '02 — 首次启动', paragraphs: ['设置从语言选择开始：English、Türkçe、Deutsch、Français、中文或 Русский。后续界面会立即切换。', '选择可写入的录音文件夹，检查权限，选择音源与输入设备，再查看快捷键。默认使用麦克风，最后显示设置摘要。', '默认输出为高质量 48 kHz 立体声 24 位 WAV。可在高级设置中调整格式与质量。采集质量受设备限制；转换无法恢复源音频缺少的细节。'] },
      { id: 'permissions', title: '03 — 音频与权限', paragraphs: ['Windows：在设置 → 隐私和安全性 → 麦克风中允许桌面应用访问。系统音频通过默认输出设备的 WASAPI loopback 获取。', 'macOS：在系统设置 → 隐私与安全性中授予麦克风权限。系统音频需要 macOS 13+ 及屏幕录制权限；macOS 12 仅支持麦克风。', 'Linux：麦克风和系统音频使用 PipeWire 或 PulseAudio。Wayland 会通过屏幕选择门户授权，仅音频被录制。全局快捷键取决于桌面门户。', '权限被拒、设备忙碌或无音频流时，Sonora 会说明问题。重要录音前请检查输入与音量。'] },
      { id: 'recording', title: '04 — 录音与资料库', paragraphs: ['选择麦克风、系统音频或两者。双音源可输出混合文件、独立文件或两者兼有。并行会话保留独立设置，控制按钮作用于选中会话。', '录制中可以暂停、继续及添加时间标记。音频持续写入磁盘，中断的录音会在下次启动时提供恢复。停止后预览、修剪或剪切，保存时选择副本或替换。', '用文件夹、标签、收藏及笔记整理录音，转写文本也可搜索。关闭窗口后继续在托盘运行；计划录音仅在应用运行时执行，错过的计划不会补录。'] },
      { id: 'models', title: '05 — 本地转写', paragraphs: ['Sonora 包含 whisper.cpp，不含语音模型。请从下方模型仓库获取 ggml-base.bin 等兼容 GGML 模型。GGUF、PyTorch、safetensors 和 ONNX 不受支持。', '在设置 → 转写 → 选择模型文件中选择 .bin。应用检查 GGML 文件头。打开资料库中的录音并选择转写，可查看进度及取消。', '音频留在本机，文本加入资料库搜索。x64 需要 AVX2；Apple silicon 使用 Metal 并可回退到 CPU。移动模型后需要重选路径。不会自动下载模型。'] },
      { id: 'updates', title: '06 — 版本与更新', paragraphs: ['Sonora 检查 GitHub Releases，在下载或安装前征求同意。录音、设置、资料库和模型路径会保留，安装等待录音和保存完成。', 'Windows 安装版及 Linux AppImage 可在确认后应用内升级。便携 EXE、DMG 和 DEB 需要手动完成升级步骤。最新说明见 GitHub 发行页。'] },
    ],
    shortcutsTitle: '几个按键，让表达更顺畅。', shortcuts: ['开始 / 停止录音', '暂停 / 继续', '添加时间标记'], shortcutNote: '默认 K、空格和 L，全局作用于选中会话。单键全局快捷键也会拦截其他应用中的对应按键。可在设置 → 快捷键中修改或选择“仅在 Sonora 中”。在 Sonora 文本框输入不会触发录音控制。', supportTitle: '需要帮忙？', supportText: '请通过 GitHub Issues 提交可复现的问题和疑问。提供系统、软件包架构和步骤，不要附上私人录音。', supportNote: '提交新问题前，请查看已有问题及最新发行说明。', modelDownload: '浏览 whisper.cpp GGML 模型',
  },
  privacy: { title: '让隐私，清晰可见。', intro: '本页说明此网站，与 Sonora 桌面应用分开。', sections: [
    { title: '这是产品介绍网站', text: '本站不请求麦克风权限，不录音，不接受音频上传，也不运行语音识别。下载链接会前往 GitHub。' },
    { title: '设备上的偏好设置', text: '语言和主题保存在浏览器本地存储中，不会发送至账户或 Sonora 服务器。即使存储被阻止，当前访问仍可正常使用。' },
    { title: '版本可用性', text: '下载页通过 api.github.com 请求公开版本元数据以检查软件包。GitHub 会收到 IP 地址等常规请求信息，不包含音频或账户凭据。' },
    { title: 'Vercel Web Analytics', text: '本站使用 Vercel Web Analytics 提供页面浏览、来源、设备与浏览器类别、国家等汇总访问统计。不使用分析 Cookie 或跨站追踪的持久标识符。网站不收集录音或转写文本。下方提供 Vercel 分析隐私文档链接。' },
    { title: '托管与外部链接', text: 'Vercel 处理提供网站所需的技术请求，并可能保留运行日志。GitHub 等外部服务适用各自隐私政策。字体随网站提供，不向第三方字体服务请求。' },
  ] },
  footer: { tagline: '为声音留一片宁静。', product: '产品', resources: '资源', openSource: '生而开放', madeBy: '开发者', status: '现已可供桌面下载', websiteSource: '网站源代码' },
  notFound: { title: '片刻安静。', text: '找不到此页面。让我们回到首页。' },
};
