/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./src/**/*.{js,ts,html,svelte}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'slantBack':"linear-gradient(135deg, rgba(168,85,247,1) 50%, rgba(250,204,21,1) 50%)",
      },
    },
  },
  plugins: [],
}