/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {

    extend: {
      screens: {
        sm: "350px",
        //For targeting specific width sizes
        lgsm: "480px",
        500: "500px",
        600: "600px",
        700: "700px",
        800: "800px",
        900: "900px",
        1000: "1000px",
        "lg": "1025px",
        "xl": '1200px',
        "1xl": "1300px",
        "2xl": "1400px",
      },

      fontSize: {
        xs: "1rem",
        sm: "1.2rem",
        md: "1.3rem",
        lg: "1.5rem",
      },

      fontFamily: {
        poppins: ["Poppins, sanSerif"],
      },

      boxShadow: {
        nav: "0px 0px 3px rgba(0, 0, 0, .3)",
        navBtns: "0px 0px 0px 0px rgba(0, 0, 0, 1)",
        mobileHam: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;"
      },

      backgroundColor: {
        mobileMenuOverlay: "rgba(7, 12, 18, .9)",
      },
    },
  },
  plugins: [],
};
