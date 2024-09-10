import type { Config } from "tailwindcss";

const config: Config = {
 mode: "jit",
 content: [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
 ],
 theme: {
  container: {
   center: true,
   padding: {
    DEFAULT: "1rem",
    sm: "1rem",
    lg: "1rem",
    xl: "1rem",
   },
  },
  screens: {
   xs: "0px", // 0-412
   sm: "512px", // 412-768
   md: "768px", // 768-1024
   lg: "1024px", // 1024-1330
   xl: "1330px", // 1330-1520
   "2xl": "1500px", // 1920+
  },

  extend: {
   spacing: {
    "8xl": "96rem",
    "9xl": "128rem",
   },
   skew: {
    'custom-top': '4deg',
    'custom-bottom': '4deg',
   },
   colors: {
    primary: "#D2691E",
    primaryDark: "#0d3b66",
    secondary: "#ecc94b",
    textColor: "#333333",
    white: "#ffffff",
    borderGray: "#e5e5e5",
    gray: "#4a5568",
    black: "#000000",
    grayLight: "#f3f3f3",
    lightBlue: "#D4EBFF",
    blue: "#0000FF",
    grayMedium: "#999",
    whiteGray: "#E0E0E0",
    grayText: "#b2b2b2",
    red: "#ff0000",
    border: "#cccccc",
    transparent: "transparent",
    whiteSmoke: "#F5F5F5",
    boxBorder: "#e7e9eb",
    errorMsg: "#ed4337",
    amber: "#FFD700",
    slate: "#C0C2C9",
    lightAmber: "#FBF6F1",
    subTextColor: "#1C1C1C",
    lightGreen: "#D7F0E5",
    lightYellow: "#F6FFDB",
   },
   borderRadius: {
    none: "0",
    sm: ".125rem",
    DEFAULT: ".25rem",
    lg: ".5rem",
    full: "9999px",
    ellipse: "50% 200px", // For larger screens
    'ellipse-sm': "50% 100px", // For smaller screens
   },
   backgroundImage: {
    'gradient-custom': 'linear-gradient(to bottom, #FBF6F1, white)',
   },
   height: {
    'gradient-h': '100px', // Define a custom height for gradient background
   },
  },
 },
 plugins: [],
};
export default config;
