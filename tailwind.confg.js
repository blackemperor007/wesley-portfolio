/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      container:{
        center: true,
        padding: "15px",
      },

      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
      },
      fontFamily: {
        
      },
      extend: {
        colors: {
          colors: {
            primary: "#10151f",
            secondary: "#475467",
            accent: {
              DEFAULT: "#7edad2",
              hover: "#79d3cc",
            },
          },
        },
      },
    },
    plugins: [],
  };
  