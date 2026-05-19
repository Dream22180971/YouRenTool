# 游刃（YouRen）

> 本地密码管家 — 你的密码，只存在你的电脑上。

[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![Tauri](https://img.shields.io/badge/Tauri-1.8-orange?style=flat)](https://tauri.app)
[![Download](https://img.shields.io/badge/Download-EXE-green)](https://youren.seanwalter.top)

**[youren.seanwalter.top](https://youren.seanwalter.top)** · [隐私政策](https://youren.seanwalter.top/privacy.html)

---

## 目录

- [截图](#截图)
- [它是什么](#它是什么)
- [为什么做](#为什么做)
- [核心功能](#核心功能)
- [3 步上手](#3-步上手)
- [使用示例](#使用示例)
- [技术架构](#技术架构)
- [Roadmap](#roadmap)
- [FAQ](#faq)
- [谁适合用](#谁适合用)
- [当前限制](#当前限制)
- [关于我](#关于我)

---

## 截图

<!-- TODO: 取消注释以下链接 -->
<!-- ![登录页](https://github.com/Dream22180971/YouRenTool-Website/blob/main/assets/screenshots/login.png) -->
<!-- ![主界面](https://github.com/Dream22180971/YouRenTool-Website/blob/main/assets/screenshots/home.png) -->
<!-- ![截图识别](https://github.com/Dream22180971/YouRenTool-Website/blob/main/assets/screenshots/screenshot-ocr.png) -->
<!-- ![安全审计](https://github.com/Dream22180971/YouRenTool-Website/blob/main/assets/screenshots/security.png) -->

> 截图待补充。你也可以下载 EXE 亲自体验。

---

## 它是什么

游刃是一款**纯本地**的密码管理桌面应用。

- **不联网**：数据只存在你的电脑上，不上传、不收集任何信息
- **不收钱**：没有订阅费，没有账号体系，打开就用
- **绿色软件**：双击即用，无需安装，卸载即走

名字取自庄子「游刃有余」——管理密码，从容不迫。

---

## 为什么做

市面上的密码管理器大多需要云端同步——1Password、Bitwarden、LastPass 都要你注册账号、把密码交给他们的服务器。

但有些人就是不想把密码交给第三方。

游刃的思路很简单：**你的密码只应该存在你的电脑上**。没有云端，没有订阅，没有"同意隐私政策"。下载、打开、用。

---

## 核心功能

| 你能做什么 | 说明 |
|-----------|------|
| **管理密码** | 添加、编辑、删除、搜索，支持分类和分页 |
| **生成安全密码** | 一键生成高强度密码，可自定义长度 |
| **截图识别** | Ctrl+V 粘贴截图，自动识别网站/用户名/密码并填入表单 |
| **安全审计** | 扫描你的密码，检测重复密码和弱密码，给出安全评分 |
| **CSV 导入导出** | 支持批量导入导出，自动识别分类（社交媒体/银行/邮箱等） |
| **剪贴板保护** | 复制密码后 30 秒自动清除，防止被人看到 |
| **自动锁定** | 5 分钟无操作自动锁屏，也可以手动一键锁定 |
| **主题切换** | 浅色 / 深色模式随你选 |

---

## 3 步上手

### 方式一：直接下载（推荐）

1. 从 [youren.seanwalter.top](https://youren.seanwalter.top) 下载 `游刃.exe`
2. 双击运行（首次可能触发 SmartScreen 警告，点"仍要运行"）
3. 设置登录密码，开始使用

### 方式二：开发者启动

```bash
# 1. 下载项目
git clone https://github.com/Dream22180971/YouRenTool.git
cd YouRenTool

# 2. 安装依赖
npm install

# 3. 启动开发服务器
npm run dev
```

打开浏览器访问 `http://localhost:1420`

---

## 使用示例

### 场景 1：保存一个新密码

1. 点击「新建密码」
2. 填写网站、用户名、密码（或者点击「生成安全密码」让它帮你生成）
3. 选个分类 → 保存

### 场景 2：用截图快速录入

1. 打开「新建密码」弹窗
2. 截一张包含网站、用户名、密码的图
3. Ctrl+V 粘贴 → OCR 自动识别并填入表单

### 场景 3：检查密码安全

点击左侧「安全审计」，系统自动扫描：
- 你有没有多个账号用同一个密码
- 有没有太弱的密码（太短、只用数字等）
- 输出安全评分和改进建议

---

## 技术架构

```
┌──────────────────────────────────┐
│        Tauri (Rust Backend)      │
│   WebView2 · fs · dialog API    │
├──────────────────────────────────┤
│        Frontend (Single HTML)    │
│   HTML5 + CSS3 + JavaScript     │
│   Tailwind CSS · Tesseract.js   │
├──────────────────────────────────┤
│        Build: Vite 5            │
│   Dev: localhost:1420           │
│   Bundle: 游刃.exe (~4MB)       │
└──────────────────────────────────┘
```

**为什么选这个方案：**
- **Tauri 而非 Electron**：包体 4MB vs 150MB+，启动更快，内存占用更低
- **单文件架构**：整个前端是一个 109KB 的 `index.html`，所有 CSS/JS 内联，极致精简
- **纯 localStorage**：数据存在浏览器本地存储中，不依赖数据库，不联网

---

## Roadmap

- [x] 密码管理基础功能
- [x] 分类管理 + CSV 导入导出
- [x] 安全审计（重复/弱密码检测）
- [x] 用户认证 + 自动锁定
- [x] 截图 OCR 识别
- [x] UI 全面重构（v1.1.0）
- [ ] 密码强度实时检测
- [ ] 数据备份与恢复
- [ ] 多设备同步（加密传输）
- [ ] 浏览器扩展（自动填充）
- [ ] 2FA 密钥管理

---

## 版本历史

| 版本 | 日期 | 亮点 |
|------|------|------|
| v1.1.1 | 2026-05-14 | 下载计数迁移至 Redis |
| v1.1.0 | 2026-05-13 | UI 全面重构，新增截图 OCR |
| v1.0.0 | 2026-04-04 | 用户认证、会话超时、CSV 自动分类 |
| v0.1.0 | 2026-03-31 | 初始版本 |

详见 [CHANGELOG.md](./CHANGELOG.md)

---

## 技术栈

| 类别 | 技术 |
|------|------|
| 桌面框架 | Tauri 1.8 (Rust + WebView2) |
| 前端 | HTML5 + CSS3 + JavaScript |
| 样式 | Tailwind CSS |
| OCR | Tesseract.js |
| 构建 | Vite 5 |
| 打包 | 游刃.exe（绿色软件，~4MB） |

---

## FAQ

**Q: 我的密码安全吗？会不会被上传？**
A: 游刃是纯本地应用，数据存在你电脑的浏览器本地存储中，不联网、不上传。你的密码不会离开你的设备。

**Q: 和 1Password / Bitwarden 有什么区别？**
A: 最大的区别是"不联网"。1Password 和 Bitwarden 需要云端同步和账号体系，游刃完全本地运行，没有服务器、没有订阅费。

**Q: 支持 Mac / Linux 吗？**
A: 目前只支持 Windows 10+。Tauri 框架本身支持多平台，未来可能适配 macOS 和 Linux。

**Q: 数据丢了怎么办？**
A: 建议定期使用「导出 CSV」功能备份密码数据。当前版本暂不支持自动备份，已在 Roadmap 中规划。

**Q: 截图识别是怎么实现的？**
A: 使用 Tesseract.js 在本地进行 OCR 识别，截图不会上传到任何服务器。识别准确率取决于截图清晰度。

**Q: 首次运行被 SmartScreen 拦截怎么办？**
A: 这是因为程序没有数字签名。点击"更多信息" → "仍要运行"即可。详细说明见 [安装指南](https://youren.seanwalter.top)。

---

## 谁适合用

- **不想用云端密码管理器的人**：你的密码只存在你的电脑上
- **需要管理大量账号密码的人**：分类、搜索、批量导入导出
- **注重隐私的用户**：不联网、不收集、不上传
- **经常需要生成密码的人**：一键生成高强度密码

---

## 当前限制

- **仅支持 Windows**：macOS / Linux 暂未适配
- **不支持多设备同步**：数据只在本地，换电脑需要手动导出导入
- **没有浏览器扩展**：不能自动填充网页表单（已在 Roadmap 中规划）
- **数据备份需手动**：暂不支持自动备份，建议定期导出 CSV

---

## 关于我

我是**肖恩沃尔特**（Sean Walter），一个从测试工程师正在转型为 AI 独立开发者的程序员。

游刃是我用 Tauri 框架做的第一个桌面应用。从测试工程师的视角出发，我对"安全"和"用户体验"有天然的敏感度——这也是游刃设计的出发点。

- GitHub: [Dream22180971](https://github.com/Dream22180971)
- Twitter/X: [@sean_walter0717](https://x.com/sean_walter0717)
- 博客: [seanwalter.top](https://seanwalter.top)

---

## License

[MIT](./LICENSE)
