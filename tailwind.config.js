/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#F15A24',
          hover: '#D94A16',
          light: '#FFF4EE',
          dark: '#B83B0E',
          50: '#FFF7F2',
          100: '#FFEFE5',
          500: '#F15A24',
          600: '#D94A16',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          soft: '#F7F7F7',
          alt: '#F4F4F4',
          card: '#FFFFFF',
          border: '#E8E8E8',
          borderLight: '#F0F0F0',
        },
        typography: {
          main: '#161616',
          secondary: '#666666',
          muted: '#8B8B8B',
          dark: '#111111',
        },
        semantic: {
          success: '#22A06B',
          warning: '#F5B800',
          error: '#E5484D',
          info: '#2F80ED',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        'site': '1440px',
      },
      borderRadius: {
        'card': '12px',
        'subtle': '8px',
        'pill': '9999px',
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(0, 0, 0, 0.04)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'floating': '0 12px 30px rgba(0, 0, 0, 0.08)',
        'dropdown': '0 10px 30px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}
