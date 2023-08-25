/** @type {import('tailwindcss').Config} */
export default {
 
  
    content: ["./src/**/*.{js,jsx}"],
  
  mode: "jit",
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('src/assets/dwa.jpg')" ,
       
       })
    },
  },
  plugins: [],
}