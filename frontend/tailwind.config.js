/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bcsve: {
          50: '#FDF6F7',
          100: '#FCE7EB',
          200: '#F8CBD4',
          300: '#F0A1B2',
          400: '#E46E89',
          500: '#D24164',
          600: '#B8264B',
          700: '#9B1B3C',
          800: '#821733',
          850: '#75132c',
          900: '#6E162D',
          950: '#3F0816',
        },
        gold: {
          50: '#FAF6ED',
          100: '#F3E8CE',
          200: '#E8D29F',
          300: '#DBBA6F',
          400: '#CEA245',
          500: '#B8872B',
          600: '#9C6C21',
          700: '#7A501C',
        },
        cream: {
          50: '#FDFAF7',
          100: '#FAF4ED',
          200: '#F5EADC',
          300: '#EEDDC9',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        serif: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'soft': '0 10px 30px -5px rgba(110, 22, 45, 0.06), 0 4px 12px -2px rgba(0, 0, 0, 0.03)',
        'card': '0 12px 28px -6px rgba(130, 23, 51, 0.08), 0 2px 8px -2px rgba(0, 0, 0, 0.04)',
        'elevated': '0 22px 45px -10px rgba(110, 22, 45, 0.15), 0 8px 20px -4px rgba(0, 0, 0, 0.06)',
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '16/9': '16 / 9',
        'square': '1 / 1',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translate3d(0, 16px, 0)' },
          '100%': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
        },
        float1: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) rotate(0deg)' },
          '50%': { transform: 'translate3d(0, -6px, 0) rotate(1deg)' },
        },
        float2: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) rotate(0deg)' },
          '50%': { transform: 'translate3d(0, -8px, 0) rotate(-1.5deg)' },
        },
        float3: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) rotate(0deg)' },
          '50%': { transform: 'translate3d(0, -5px, 0) rotate(1deg)' },
        },
        floatOrb1: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(20px, -15px) scale(1.08)' },
        },
        floatOrb2: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(-25px, 20px) scale(0.94)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        },
        shimmerWave: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        kenBurns: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.06)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '20%, 60%': { transform: 'translateX(-4px)' },
          '40%, 80%': { transform: 'translateX(4px)' },
        },
        popIn: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '70%': { transform: 'scale(1.05)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 300ms cubic-bezier(0.22, 1, 0.36, 1) forwards',
        fadeInUp: 'fadeInUp 500ms cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'float-1': 'float1 4.5s ease-in-out infinite',
        'float-2': 'float2 5.5s ease-in-out infinite',
        'float-3': 'float3 6.5s ease-in-out infinite',
        'float-orb-1': 'floatOrb1 12s ease-in-out infinite',
        'float-orb-2': 'floatOrb2 15s ease-in-out infinite',
        marquee: 'marquee 22s linear infinite',
        shimmer: 'shimmer 2.2s infinite',
        shimmerWave: 'shimmerWave 3s ease-in-out infinite',
        pulseGlow: 'pulseGlow 3s ease-in-out infinite',
        gradientShift: 'gradientShift 10s ease infinite',
        kenBurns: 'kenBurns 24s ease-out forwards',
        shake: 'shake 400ms ease-in-out',
        popIn: 'popIn 400ms cubic-bezier(0.22, 1, 0.36, 1) forwards',
      },
    },
  },
  plugins: [],
}
