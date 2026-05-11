/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    // 這裡放全域擴充的樣式
    extend: {
      fontFamily: {
        sans: ['Noto Sans TC', 'sans-serif'],
      },
      colors: {
        'primary-text': '#C0A4A5',
        'primary-title': '#907A7B',
        'primary-bg': '#F5F0E7',
        'secondary-text': '#707070',
      },
      fontSize: {
        '2.5xl': '1.75rem',
      },
      boxShadow: {
        'custom-card': '0px 3px 6px #00000029',
      },
    },
    // container 應該在 extend 外面，這樣才能完全覆蓋預設行為
    container: {
      center: true,
      padding: '2rem',
      screens: {
        sm: '375px',
        md: '768px',
        lg: '1024px',
        xl: '1100px',
      },
    },
  },
  plugins: [],
}
