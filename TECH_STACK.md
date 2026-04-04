# KeyGuardTool 产品技术栈说明书

## 1. 产品概述

KeyGuardTool 是一款本地密码管理应用，采用现代化技术栈构建，专注于数据安全性和用户体验。产品以桌面应用形式运行，所有数据存储在本地，确保用户隐私安全。

## 2. 技术架构

### 2.1 前端技术栈

| 技术 | 版本 | 用途 | 依赖关系 |
|------|------|------|----------|
| HTML5 | - | 页面结构和语义化标签 | 核心技术 |
| CSS3 | - | 样式设计和响应式布局 | 核心技术 |
| JavaScript (ES6+) | - | 前端交互逻辑和业务处理 | 核心技术 |
| Tailwind CSS | - | 实用优先的CSS框架 | 样式管理 |

### 2.2 桌面应用框架

| 技术 | 版本 | 用途 | 依赖关系 |
|------|------|------|----------|
| Tauri | v1.8.3 | 跨平台桌面应用框架 | 核心框架 |
| Rust | 1.94.1 | 系统级编程语言 | 后端逻辑 |
| WebView2 | v0.19.1 | Windows网页渲染引擎 | UI渲染 |

### 2.3 构建工具链

| 工具 | 版本 | 用途 | 依赖关系 |
|------|------|------|----------|
| Vite | v5.4.21 | 前端构建工具 | 代码编译和打包 |
| npm | - | 包管理器 | 依赖管理 |
| Cargo | - | Rust包管理器 | Rust依赖管理 |

### 2.4 数据存储

| 技术 | 用途 | 依赖关系 |
|------|------|----------|
| localStorage | - | 本地数据存储 | 浏览器API |
| JSON | - | 数据序列化格式 | 标准格式 |

## 3. 核心依赖库

### 3.1 前端核心依赖

| 依赖名称 | 版本 | 用途 | 来源 |
|----------|------|------|------|
| Vite | v5.4.21 | 前端构建工具 | npm |
| Tailwind CSS | - | CSS框架 | npm |

### 3.2 Tauri核心依赖

| 依赖名称 | 版本 | 用途 | 来源 |
|----------|------|------|------|
| tauri | v1.8.3 | 桌面应用框架 | crates.io |
| tauri-runtime | v0.14.6 | 运行时环境 | crates.io |
| tauri-runtime-wry | v0.14.11 | WebView运行时 | crates.io |
| wry | v0.24.12 | WebView渲染引擎 | crates.io |
| webview2-com | v0.19.1 | Windows WebView2支持 | crates.io |

### 3.3 安全相关依赖

| 依赖名称 | 版本 | 用途 | 来源 |
|----------|------|------|------|
| sha2 | v0.10.9 | SHA-256加密算法 | crates.io |
| base64 | v0.22.1 | Base64编码 | crates.io |
| crypto-common | v0.1.7 | 加密算法通用组件 | crates.io |

### 3.4 系统集成依赖

| 依赖名称 | 版本 | 用途 | 来源 |
|----------|------|------|------|
| winreg | v0.52.0 | Windows注册表访问 | crates.io |
| dirs-next | v2.0.0 | 系统目录访问 | crates.io |
| windows-sys | v0.52.0 | Windows系统API | crates.io |

### 3.5 数据处理依赖

| 依赖名称 | 版本 | 用途 | 来源 |
|----------|------|------|------|
| serde | v1.0.228 | 数据序列化 | crates.io |
| serde_json | v1.0.149 | JSON处理 | crates.io |
| regex | v1.12.3 | 正则表达式 | crates.io |
| toml | v0.8.23 | TOML配置文件 | crates.io |

### 3.6 文件处理依赖

| 依赖名称 | 版本 | 用途 | 来源 |
|----------|------|------|------|
| flate2 | v1.1.9 | 压缩算法 | crates.io |
| tar | v0.4.45 | TAR文件处理 | crates.io |
| tempfile | v3.27.0 | 临时文件处理 | crates.io |

## 4. 技术特性

### 4.1 安全性

- **本地存储**：所有数据存储在浏览器localStorage中，不依赖外部服务器
- **安全审计**：内置密码强度检测和重复密码检测功能
- **输入验证**：严格的用户输入验证和数据格式检查

### 4.2 性能优化

- **高效渲染**：使用WebView2进行高性能网页渲染
- **代码优化**：Vite构建工具提供代码分割和懒加载
- **内存管理**：Rust语言提供内存安全保障

### 4.3 用户体验

- **响应式设计**：适配不同屏幕尺寸
- **直观界面**：简洁清晰的用户界面设计
- **快速操作**：支持快捷键和批量操作

### 4.4 开发效率

- **热重载**：Vite提供实时开发体验
- **模块化设计**：代码结构清晰，易于维护
- **类型安全**：Rust语言提供编译时类型检查

## 5. 构建和部署

### 5.1 开发环境

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 打包桌面应用
npm run tauri build
```

### 5.2 依赖安装

```bash
# 安装Rust (Windows)
Invoke-WebRequest -Uri "https://win.rustup.rs/x86_64" -OutFile rustup-init.exe
.\rustup-init.exe -y

# 安装Visual Studio Build Tools
winget install Microsoft.VisualStudio.2022.BuildTools --override "--add Microsoft.VisualStudio.Workload.VCTools --includeRecommended --includeOptional --quiet"
```

## 6. 技术选型理由

### 6.1 前端技术选择

- **HTML5/CSS3/JavaScript**：成熟稳定的Web技术栈，开发效率高
- **Tailwind CSS**：实用优先的CSS框架，减少样式代码量
- **Vite**：快速的构建工具，提供优秀的开发体验

### 6.2 桌面框架选择

- **Tauri**：相比Electron更轻量级，性能更好，资源占用更少
- **Rust**：系统级编程语言，提供内存安全和高性能
- **WebView2**：Windows原生渲染引擎，提供更好的性能和兼容性

### 6.3 数据存储选择

- **localStorage**：简单易用，适合本地应用的数据存储
- **JSON**：标准的数据交换格式，易于解析和生成

## 7. 未来技术规划

### 7.1 短期计划

- 实现密码加密存储功能
- 添加主密码保护机制
- 优化安全审计算法

### 7.2 中期计划

- 添加自动更新功能
- 支持多平台同步
- 实现密码生成器增强功能

### 7.3 长期计划

- 添加生物识别认证
- 支持云备份和同步
- 开发移动端版本

## 8. 技术文档

### 8.1 核心文件结构

```
KeyGuardTool/
├── index.html              # 主HTML文件
├── vite.config.js         # Vite配置文件
├── package.json           # npm依赖配置
├── src-tauri/             # Tauri项目目录
│   ├── Cargo.toml         # Rust依赖配置
│   ├── tauri.conf.json    # Tauri配置文件
│   └── src/               # Rust源代码
└── TECH_STACK.md          # 技术栈文档
```

### 8.2 关键功能模块

- **密码管理**：添加、编辑、删除密码
- **分类管理**：创建和管理密码分类
- **搜索筛选**：按名称、分类搜索密码
- **导入导出**：CSV文件导入导出功能
- **安全审计**：密码强度检测和风险评估
- **设置管理**：应用配置和个性化设置

## 9. 总结

KeyGuardTool采用现代化技术栈构建，兼顾了安全性、性能和用户体验。通过使用Tauri框架和Rust语言，实现了轻量级、高性能的桌面应用。本地存储设计确保了用户数据的安全性和隐私保护。

技术栈的选择充分考虑了开发效率、运行性能和维护成本，为产品的持续迭代和功能扩展提供了坚实的基础。