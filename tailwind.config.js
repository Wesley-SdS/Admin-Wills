/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns:{
        app: 'minmax(18rem, 20rem) 1fr',
        profile: 'min-content 1fr min-content'
      },
      maxWidth:{
        app: '700px',
    
      },

      colors:{
        primary:'#ea580c', 
        secondary:'#457431',
        wess:'#333',
      },
     
    },
  },
  plugins: [],
}