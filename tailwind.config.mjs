/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif']
      },
      colors: {
        cream: '#FAF8F5',
        blush: '#FFF0F5',
        softpurple: '#E8D5F5',
        lavender: '#F3E8FF',
        deeppurple: '#6B46C1',
        warmgray: '#78716C'
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'polaroid-spin': 'polaroidSpin 0.6s ease-out forwards'
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
        polaroidSpin: {
          '0%': { opacity: '0', transform: 'rotate(-5deg) scale(0.9)' },
          '100%': { opacity: '1', transform: 'rotate(var(--rot, 2deg)) scale(1)' }
        }
      }
    }
  },
  plugins: []
};
