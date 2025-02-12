/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Urbanist, serif;",
    },
    extend: {
      colors: {
        "orange-primary": "#FD853A",
        "orange-secondary": "#FEB273",
        "black-primary": "#171717",
        "paragraph-primary": "#344054",
      },
      backgroundImage: {
        "my-services": "url('/public/my serveices background.png')",
      },
    },
  },
  plugins: [],
};
