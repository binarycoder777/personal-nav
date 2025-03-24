/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  safelist: [
    'bg-emerald-50',
    'bg-blue-50',
    'bg-cyan-50',
    'bg-green-50',
    'bg-orange-50',
    'text-emerald-500',
    'text-blue-500',
    'text-cyan-500',
    'text-green-500',
    'text-orange-500',
    'bg-purple-50',
    'bg-pink-50',
    'text-purple-500',
    'text-pink-500',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          600: '#9333ea',
        }
      }
    },
  },
  plugins: [],
} 