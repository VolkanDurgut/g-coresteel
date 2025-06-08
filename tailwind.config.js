/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': {
          50: '#e6f2ff',
          100: '#cce5ff',
          500: '#2d5a87',
          600: '#1a365d',
          700: '#0f2a47',
          800: '#071f35',
          900: '#041526'
        },
        'secondary': {
          50: '#fff4f0',
          100: '#ffe9e0',
          500: '#ff8c42',
          600: '#ff6b35',
          700: '#e85a2e',
          800: '#cc4926',
          900: '#b33820'
        },
        'accent': {
          50: '#f7fafc',
          100: '#e2e8f0',
          200: '#cbd5e0',
          300: '#a0aec0',
          400: '#718096',
          500: '#4a5568'
        },
        'dark': {
          50: '#f7fafc',
          100: '#edf2f7',
          700: '#2d3748',
          800: '#1a202c',
          900: '#171923'
        }
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'orbitron': ['Orbitron', 'monospace']
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
        'slide-up': 'slide-up 0.8s ease-out',
        'fade-in': 'fade-in 1s ease-out',
        'scale-in': 'scale-in 0.6s ease-out',
        'electric': 'electric 2s linear infinite',
        'rotate-slow': 'rotate-slow 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        'pulse-glow': {
          '0%': { boxShadow: '0 0 20px rgba(255, 107, 53, 0.5)' },
          '100%': { boxShadow: '0 0 40px rgba(255, 107, 53, 0.8), 0 0 60px rgba(255, 107, 53, 0.4)' }
        },
        'slide-up': {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        'scale-in': {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        'electric': {
          '0%, 100%': { filter: 'hue-rotate(0deg)' },
          '50%': { filter: 'hue-rotate(90deg)' }
        },
        'rotate-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'industrial-pattern': "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.05\"%3E%3Cpath d=\"M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zM10 50c11.046 0 20-8.954 20-20s-8.954-20-20-20-20 8.954-20 20 8.954 20 20 20z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
      }
    },
  },
  plugins: [],
};