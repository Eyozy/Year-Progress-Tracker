# 年度进度追踪器

[English Version](README_EN.md) | [中文版](README.md)

一个优雅的年度进度追踪器网站，显示当前年份的进度、已过天数和剩余天数。支持深色模式和国际化。

## ✨ 功能特点

- 📊 显示当前年份的进度百分比
- 📅 显示当前日期和时间
- 🔢 显示已过天数和剩余天数
- 🌓 支持深色模式
- 🌐 支持中英文国际化
- 📱 响应式设计，适配各种设备
- 🎨 优雅的动画和过渡效果
- ⚡ 实时自动更新进度
- 🔄 支持手动切换主题和语言

## 🛠️ 技术栈

- [Astro](https://astro.build) - 现代静态网站构建框架
- [Tailwind CSS](https://tailwindcss.com) - 实用优先的 CSS 框架
- 纯 JavaScript，无需额外前端框架
- 使用 CSS 动画实现流畅的视觉效果
- 基于浏览器的本地存储保存用户偏好

## 🚀 开始使用

### 安装依赖

```bash
npm install
```

### 运行开发服务器

```bash
npm run dev
```

开发服务器将在 [http://localhost:3000](http://localhost:3000) 启动

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 📂 项目结构

```
yearbar/
├── src/
│   ├── components/      # 可复用的组件
│   ├── layouts/         # 页面布局
│   ├── pages/           # 页面路由
│   ├── styles/          # 全局样式
│   └── utils/           # 工具函数
├── public/              # 静态资源
├── astro.config.mjs     # Astro配置
└── tailwind.config.js   # Tailwind配置
```

## 🎨 自定义主题

1. 修改 `tailwind.config.js` 中的颜色变量 - 可调整主题色、背景色等
2. 调整 `src/components/ProgressBar.astro` 中的进度条样式 - 修改渐变颜色、高度等
3. 在 `src/layouts/MainLayout.astro` 中修改主题切换逻辑 - 可添加更多主题选项

## 🌐 添加更多语言支持

1. 在 `src/utils/i18n.js` 中添加新的翻译文本 - 按照现有格式添加新语言
2. 更新语言切换逻辑 - 修改 `MainLayout.astro` 中的语言切换代码
3. 添加对应的语言标识 - 更新 HTML 的 lang 属性和显示文本

## 🤝 贡献指南

### 开发流程
1. Fork 本项目
2. 创建特性分支 (`git checkout -b feature/your-feature`)
3. 提交更改 (`git commit -am 'Add some feature'`)
4. 推送到分支 (`git push origin feature/your-feature`)
5. 创建 Pull Request

### 代码规范
- 使用 Prettier 格式化代码
- 组件命名使用 PascalCase
- 变量命名使用 camelCase
- 添加必要的注释

## 📜 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件
