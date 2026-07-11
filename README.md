# TIMO — Shredders-Machine.com

工业破碎机 / 脱水螺旋压榨机官网重构项目。基于 **Next.js 15 + Tailwind CSS + Framer Motion**，
采用静态导出（`output: "export"`），纯前端、无后端，可部署到 Vercel / Cloudflare Pages / 任意 CDN。

## 技术栈

- **Next.js 15**（App Router，静态导出）
- **Tailwind CSS 3**（深色工业风设计系统）
- **Framer Motion**（滚动进场 / 微交互动效）
- **TypeScript**

## 环境要求

> ⚠️ 需要 **Node.js ≥ 18.18**（推荐 Node 20 LTS）。当前若本地为 Node 16 请先升级。

## 本地开发

```bash
npm install
npm run dev      # http://localhost:3000
```

## 构建 & 静态导出

```bash
npm run build    # 产物输出到 out/ 目录
```

`out/` 目录即为可部署的静态站点。

## 项目结构

```
app/                      # 页面与路由（App Router）
  page.tsx                # 首页
  products/               # 产品总览 + 详情 [slug]
  applications/           # 应用场景总览 + 详情 [slug]
  video/ about/ contact/  # 其他页面
components/
  layout/                 # Navbar / Footer / LiveChat
  home/                   # 首页各区块
  cards/                  # 产品卡 / 应用卡
  products/               # 产品筛选器
  contact/                # 询盘表单
  ui/                     # 复用 UI（Reveal 动效 / Placeholder 占位图 / 标题等）
lib/
  site.ts                 # 全站配置（联系方式、社交、第三方 ID）
  nav.ts                  # 导航结构
  products.ts             # 产品数据
  applications.ts         # 应用场景数据
```

## 上线前需回填的配置（集中在 `lib/site.ts`）

| 配置项 | 说明 |
| --- | --- |
| `contact.whatsapp` | WhatsApp 号码（当前为占位符 `0000000000`） |
| `thirdParty.tawkPropertyId` / `tawkWidgetId` | Tawk.to 在线客服 ID（配置后自动启用） |
| `thirdParty.formspreeId` | Formspree 表单 ID（配置后询盘表单可用） |

## 阶段说明

- **阶段2（当前）**：结构化骨架版。所有图片位置均为占位块，并标注了阶段3需回填的本地资料主题。
- **阶段3**：读取本地资料库图片/文稿，回填占位符并做视觉打磨。
- **阶段4**：打包并部署到 Vercel，绑定 `shredders-machine.com` 域名。
