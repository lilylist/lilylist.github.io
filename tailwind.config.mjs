/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      colors: {
        // Backgrounds
        cream: '#FAF7F2',
        warmwhite: '#FEFCF8',
        paper: '#FFFDF9',
        // Neutrals
        charcoal: '#1A1A1A',
        graphite: '#2D2D2D',
        stone: '#4A4A4A',
        gray: '#8A8A8A',
        lightgray: '#C4C0B8',
        // Vibrant accents
        coral: '#FF6B6B',
        corallight: '#FFE8E8',
        electric: '#6C5CE7',
        electriclight: '#EDE9FF',
        hotpink: '#FD79A8',
        pinklight: '#FFE8F1',
        golden: '#FDCB6E',
        goldenlight: '#FFF8E8',
        mint: '#00CEC9',
        mintlight: '#E0FFfe',
        // Deep accent
        deep: '#2D1B69'
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'wiggle': 'wiggle 3s ease-in-out infinite',
        'marquee': 'marquee 20s linear infinite',
        'blob': 'blob 8s ease-in-out infinite',
        'tilt': 'tilt 10s infinite linear'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' }
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(20px, -30px) scale(1.05)' },
          '66%': { transform: 'translate(-15px, 15px) scale(0.95)' }
        },
        tilt: {
          '0%, 50%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(1deg)' },
          '75%': { transform: 'rotate(-1deg)' }
        }
      }
    }
  },
  plugins: []
};
