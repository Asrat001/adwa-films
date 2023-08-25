/** @type {import('tailwindcss').Config} */
export default {
 
  
    content: ["./src/**/*.{js,jsx}"],
  
  mode: "jit",
  theme: {
    fontFamily:{
      glutin:['Gluten']
    },
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('https://res.cloudinary.com/diogyja1g/image/upload/v1692965227/qvsy65cnb9be5bui0wn4.jpg')" ,
       
       })
    },
  },
  plugins: [],
}