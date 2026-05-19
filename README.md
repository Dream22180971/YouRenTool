# 游刃（YouRen）

> 本地密码管家 — 游刃有余，守护每一个密码。

[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![Tauri](https://img.shields.io/badge/Tauri-1.8-orange?style=flat)](https://tauri.app)
[![Download](https://img.shields.io/badge/Download-EXE-green)](https://youren.seanwalter.top)

**[youren.seanwalter.top](https://youren.seanwalter.top)** · [在线体验]() · [隐私政策](https://youren.seanwalter.top/privacy.html)

---

## 截图

<!-- TODO: 替换为实际截图链接 -->
<!-- ![登录页](https://github.com/Dream22180971/YouRenTool-Website/blob/main/assets/screenshots/login.png) -->
<!-- ![主界面](https://github.com/Dream22180971/YouRenTool-Website/blob/main/assets/screenshots/home.png) -->
<!-- ![截图识别](https://github.com/Dream22180971/YouRenTool-Website/blob/main/assets/screenshots/screenshot-ocr.png) -->
<!-- ![安全审计](https://github.com/Dream22180971/YouRenTool-Website/blob/main/assets/screenshots/security.png) -->

> 截图待补充。下载 EXE 或本地启动后查看实际效果。

---

## 它是什么

游刃是一款**纯本地**的密码管理桌面应用。

- 数据存在你的设备上，不联网、不上传、不收集任何信息
- 取自庄子「游刃有余」——管理密码，从容不迫
- 绿色软件，双击即用，无需安装

---

## 为什么做

市面上的密码管理器大多依赖云端同步——1Password、Bitwarden、LastPass 都需要账号和服务器。

但有些人就是不想把密码交给第三方。

游刃的思路很简单：**你的密码只应该存在你的电脑上**。没有云端、没有账号体系、没有订阅费。打开就用，关掉就走。

---

## 核心功能

| 功能 | 状态 | 说明 |
|------|------|------|
| 密码管理 | ✅ | 添加 / 编辑 / 删除 / 搜索，支持分类和分页 |
| 安全密码生成 | ✅ | 一键生成高强度密码，可配置长度 |
| 分类管理 | ✅ | 自定义分类，导入时自动识别（社交媒体/银行/邮箱等） |
| CSV 导入导出 | ✅ | UTF-8 编码，支持多种字段格式，自动分类 |
| 截图 OCR 识别 | ✅ | Ctrl+V 粘贴截图，自动识别网站/用户名/密码并填入表单 |
| 安全审计 | ✅ | 检测重复密码、弱密码，计算安全评分（0-100） |
| 剪贴板保护 | ✅ | 复制密码后 30 秒自动清除 |
| 用户认证 | ✅ | 登录密码 + 5 分钟无操作自动锁定 |
| 主题切换 | ✅ | 浅色 / 深色模式 |
| 开机自启 | ✅ | Windows 开机自启动 |

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

**关键设计决策：**
- **单文件架构**：整个前端是一个 109KB 的 `index.html`，所有 CSS/JS 内联
- **Tauri 而非 Electron**：包体 4MB vs 150MB+，启动更快，内存占用更低
- **纯 localStorage**：数据存在浏览器本地存储中，不依赖数据库

---

## 快速开始

### 下载使用

从 [youren.seanwalter.top](https://youren.seanwalter.top) 下载 `游刃.exe`，双击运行。

> 首次运行可能触发 SmartScreen 警告，点击"仍要运行"即可。

### 开发环境

```bash
git clone https://github.com/Dream22180971/YouRenTool.git
cd YouRenTool
npm install
npm run dev
```

访问 `http://localhost:1420`

---

## 使用示例

### 添加密码

1. 点击「新建密码」
2. 填写网站、用户名、密码（或点击「生成安全密码」自动生成）
3. 选择分类 → 保存

### 截图识别

1. 打开「新建密码」弹窗
2. 截图包含网站、用户名、密码信息
3. Ctrl+V 粘贴 → OCR 自动识别并填入表单

### 安全审计

点击左侧「安全审计」，系统自动扫描：
- 重复密码（多个账号用同一个密码）
- 弱密码（长度不足、仅数字等）
- 输出安全评分和改进建议

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

## License

[MIT](./LICENSE)
