import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "main-background": "#5186FF",
      },
      backgroundImage:{
        "pricing": "url('/pricing/background.png')",
        "banner-layer": "url('/layer.png')",
        "member-card": "url('/member-card.png')",
      },
      container: {
        center: true,
        screens: {
          "1140px": "1140px",
          "1600px": "1600px"
        }
      },
      fontFamily: {
        sans: ["var(--font-nunito-sans)"],
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
} satisfies Config;
