module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#c026d3",

          "secondary": "#e9d5ff",

          "accent": "#a3e635",

          "neutral": "#3D4451",

          "base-100": "#FFFFFF",

          "info": "#2563eb",

          "success": "#14b8a6",

          "warning": "#fef08a",

          "error": "#e11d48",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
  //...
}  