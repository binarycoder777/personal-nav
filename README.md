# CodeAtlas - 个人导航站

基于 Astro + Supabase 构建的现代化个人导航站，提供高效便捷的工具和资源管理。

## ✨ 特性

- 🚀 基于 Astro 构建，性能优异
- 📦 Supabase 数据管理，实时更新
- 🎨 Tailwind CSS 样式，响应式设计
- 🔍 强大的搜索功能
- 📱 移动端适配
- 🌙 暗色模式支持
- 📝 工具投稿功能

## 🛠️ 技术栈

- [Astro](https://astro.build/) - Web 框架
- [Supabase](https://supabase.com/) - 后端服务
- [Tailwind CSS](https://tailwindcss.com/) - 样式框架
- [Lucide Icons](https://lucide.dev/) - 图标库

## 🚀 快速开始

1. 克隆项目
```bash
git clone https://github.com/binarycoder777/personal-nav.git
cd personal-nav
```

2. 安装依赖
```bash
pnpm install
```

3. 环境配置
创建 `.env` 文件并添加以下配置：
```env
PUBLIC_SUPABASE_URL=your_supabase_url
PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. 启动开发服务器
```bash
pnpm dev
```

## 📦 项目结构

```text
/
├── public/          # 静态资源
├── src/
│   ├── components/  # 组件
│   ├── layouts/     # 布局
│   ├── pages/       # 页面
│   ├── services/    # 服务
│   └── script/      # 工具脚本
└── package.json
```

## 🔧 命令

| 命令 | 描述 |
|------|------|
| `pnpm dev` | 启动开发服务器 |
| `pnpm build` | 构建生产版本 |
| `pnpm preview` | 预览构建结果 |

## 🌟 功能特点

- **工具导航**：分类展示各类实用工具
- **搜索功能**：快速查找所需工具
- **工具投稿**：用户可提交新工具
- **动态更新**：实时同步数据库内容
- **响应式设计**：完美适配各种设备


## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可

[MIT License](LICENSE)

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
