<div align="center">

# 游刃 · YouRen

**一款本地优先的密码管理器，你的密码只保存在自己的电脑上。**

[English](./README.md) | [简体中文](./README.zh-CN.md)

[![Product Site](https://img.shields.io/badge/PRODUCT-youren.seanwalter.top-165DFF?style=for-the-badge)](https://youren.seanwalter.top)
[![Tauri](https://img.shields.io/badge/Tauri-1.x-24C8DB?style=for-the-badge&logo=tauri&logoColor=white)](https://tauri.app)
[![Version](https://img.shields.io/badge/version-1.0.0-F59E0B?style=for-the-badge)](./package.json)
[![License](https://img.shields.io/badge/LICENSE-MIT-10B981?style=for-the-badge)](./LICENSE)

</div>

---

## 为什么做

有些人就是不希望把密码库交给第三方服务器。

游刃选择另一条路线：

- 不要求注册账号
- 不依赖云端
- 数据本地优先
- 可以作为便携桌面工具使用
- 需要备份时由自己导出

> 你的密码，留在你的电脑上。

---

## 直接使用

产品站：

**https://youren.seanwalter.top**

开发模式：

```bash
git clone https://github.com/Dream22180971/YouRenTool.git
cd YouRenTool

npm install
npm run dev
```

Tauri 桌面壳：

```bash
npm run tauri dev
```

---

## 核心功能

| 功能 | 说明 |
|---|---|
| 密码库 | 添加、编辑、删除、搜索和分类 |
| 密码生成器 | 一键生成更强的密码 |
| 截图解析 | 粘贴截图辅助填写网站 / 用户名 / 密码 |
| 安全审计 | 检测弱密码和重复密码 |
| CSV 导入导出 | 迁移或备份自己的数据 |
| 剪贴板保护 | 一段时间后清除已复制密码 |
| 自动锁定 | 无操作后自动锁定 |
| 主题 | 浅色 / 深色 |

---

## 隐私模型

游刃明确采用本地优先：

- 不强制注册
- 默认不做云同步
- 没有中央密码数据库
- 不依赖订阅服务

需要备份时，请导出并保存在你信任的位置。

---

## 技术架构

```text
Desktop Shell
Tauri 1.x
   │
   ▼
Frontend
Vite · HTML / CSS / JavaScript
   │
   ▼
Local data
保存在用户自己的设备
```

---

## 当前限制

- 暂无浏览器扩展
- 暂无自动多设备同步
- 备份由用户自行管理
- 本地优先不等于设备本身不需要安全防护

---

## 路线图

- [x] 密码增删改查
- [x] 本地存储
- [x] 密码生成
- [x] 安全审计
- [x] CSV 导入导出
- [x] 自动锁定
- [ ] 浏览器扩展
- [ ] 更完善的备份流程
- [ ] 可选加密同步
- [ ] 更丰富的凭据模板

---

## License

[MIT](./LICENSE)

<div align="center">

**方便很重要，掌控权更重要。**

</div>
