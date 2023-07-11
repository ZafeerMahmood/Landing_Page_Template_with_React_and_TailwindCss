# Readme

React and Tailwind Css template for Company Landing pages,
is fully Responsive has 

you can edit the Navlinks , Features and other display information from
[src/constants/index.js]()

reusable components in [src/components]()

# Setup

```sh
git clone 
npm install
npm run dev
```

# Tailwind.Config

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
```
# Screenshots 




