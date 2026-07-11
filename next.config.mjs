/** @type {import('next').NextConfig} */
const nextConfig = {
  // 纯前端静态导出：产出 out/ 目录，可部署到 Vercel / Cloudflare Pages / 任意 CDN
  output: "export",
  trailingSlash: true,
  images: {
    // 静态导出下需关闭 Next 图片优化服务（无后端）
    unoptimized: true,
  },
  reactStrictMode: true,
  eslint: {
    // 骨架阶段不因 lint 阻断构建；类型检查仍照常执行
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
