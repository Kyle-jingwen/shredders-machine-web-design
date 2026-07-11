# TIMO — Shredders-Machine.com

工业破碎机 / 脱水螺旋压榨机官网重构项目。基于 **Next.js 15 + Tailwind CSS + Framer Motion**，采用静态导出（`output: "export"`），纯前端、无后端，可部署到 Vercel / Cloudflare Pages / 任意 CDN。

## 技术栈

- **Next.js 15**（App Router，静态导出）
- **Tailwind CSS 3**（深色工业风 + 蓝色品牌色）
- **Framer Motion**（滚动进场 / 微交互动效）
- **TypeScript**

## 环境要求

> Node.js ≥ 18.18（推荐 Node 20 LTS）。

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

## 页面总览

| 路由 | 说明 |
| --- | --- |
| `/` | 首页（Hero + 产品展示 + 应用场景 + 优势 + 流程 + CTA） |
| `/products` | 产品总览（分类筛选 + 即时搜索） |
| `/products/[slug]` | 产品详情 ×10（真实图集 + 规格表 + 特性） |
| `/applications` | 应用场景总览 |
| `/applications/[slug]` | 应用详情 ×8（真实描述 + 推荐设备） |
| `/video` | 视频中心 ×14（标题+描述，待回填 YouTube ID） |
| `/about` | 关于 TIMO |
| `/contact` | 联系表单（含数学验证码 + 蜜罐防垃圾） |
| `/not-found` | 404 页面 |

## 项目结构

```
app/                      # 页面与路由（App Router）
components/
  layout/                 # Navbar / Footer / LiveChat
  home/                   # 首页各区块
  cards/                  # 产品卡 / 应用卡
  products/               # 产品筛选器
  contact/                # 询盘表单
  ui/                     # 复用 UI（Reveal 动效 / PageHeader 等）
lib/
  site.ts                 # 全站配置（联系方式、社交、第三方 ID）
  nav.ts                  # 导航结构
  products.ts             # 10 个产品数据
  applications.ts         # 8 个应用场景数据
public/images/            # 真实设备图片（50+ 张，来自旧站素材库）
```

## 第三方集成

| 功能 | 状态 |
| --- | --- |
| WhatsApp 浮动按钮（`+86 134 3575 3318`） | ✅ 已配置 |
| 联系表单 — Formspree | ⚠️ 需填入真实 `FORMSPREE_FORM_ID` |
| 在线客服 — Tawk.to | ⚠️ 需填入真实 Property / Widget ID |
| YouTube 频道链接 | ✅ 已配置（`@liphilip8232`） |
| 视频页 YouTube 内嵌 | ⏳ 待回填 14 个视频的真实 YouTube ID |

> 第三方 ID 集中配置在 `lib/site.ts` 的 `thirdParty` 字段中。

## 部署

推荐使用 **Vercel** 部署（免费、Next.js 原生支持、自动 HTTPS）：

1. 在 Vercel 中 import 此仓库
2. 框架自动识别为 Next.js
3. 域名绑定 `shredders-machine.com`
4. 每次 `git push` 自动触发部署

## 阶段进度

- **阶段2**（已完成）— 结构化骨架版，含占位图
- **阶段3**（已完成）— 真实文稿 + 50+ 张设备图片回填，TypeScript 0 error，构建通过
- **阶段4** — 配置 Tawk.to / Formspree / YouTube ID，Vercel 部署上线
