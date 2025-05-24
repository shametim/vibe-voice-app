/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app.tsx",
    "./frontend.tsx",
    "./index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Franklin Gothic Medium', 'sans-serif'],
      },
      colors: {
        amber: {
          50: '#fffde7',
          100: '#fff3cd',
          800: '#8b4513',
          900: '#6b3a12',
        },
      },
    },
  },
  plugins: [],
}
