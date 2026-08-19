import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 深色工业风调色板（冷调/带海军蓝底味，与蓝色主色协调）
        ink: {
          950: "#060A12", // 页面最底色（深海军黑）
          900: "#0B111D",
          800: "#121A29", // 卡片/表面
          700: "#1C2739",
          600: "#2A3852",
        },
        steel: {
          400: "#8E9BB3", // 次要文字（冷灰）
          300: "#BFC8D9",
          200: "#E3E8F1",
        },
        // 品牌主色：工业蓝（沿用旧站蓝色基调，提高饱和与对比以更吸睛）
        brand: {
          DEFAULT: "#2F80ED",
          50: "#EAF2FE",
          100: "#CFE1FB",
          400: "#57A0FF",
          500: "#2F80ED",
          600: "#1E63C4",
          700: "#17509E",
        },
        // 辅助高亮：亮青蓝（用于点缀渐变/发光，增强科技感）
        azure: {
          400: "#38BDF8",
          500: "#0EA5E9",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        container: "1680px",
      },
      backgroundImage: {
        "grid-lines":
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "brand-glow":
          "radial-gradient(60% 60% at 50% 0%, rgba(47,128,237,0.22) 0%, rgba(47,128,237,0) 70%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
