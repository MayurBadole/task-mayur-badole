/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        rotate: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        rotate: "rotate 0.5s linear infinite",
      },

      colors: {
        darkslateblue: {
          100: "#164e90",
          200: "#144272",
        },
        gray: {
          100: "#0a2647",
          200: "rgba(11, 39, 72, 0.4)",
        },
        lightsteelblue: "rgba(157, 178, 191, 0)",
        darkslategray: {
          100: "#3a5066",
          200: "#203046",
        },
        color: "#dde6ed",
        color1: "#27374d",
        radial: "#526d82",
        "backgrounds-primary": "#fff",
        goldenrod: "#dda23c",
        darkgoldenrod: {
          100: "#ab7008",
          200: "rgba(171, 112, 8, 0.09)",
        },
        "miscellaneous-floating-tab-text-unselected": "#000",
        color2: "#9db2bf",
        linear: "#2f2961",
        linear1: "#f7c243",
        skyblue: "#9ae8ff",
      },
      spacing: {},
      fontFamily: {
        "square721-bt": "'Square721 BT'",
        "btn-large-normal": "Archivo",
        "good-times": "'Good Times'",
      },
      borderRadius: {
        "6xl": "25px",
        "31xl": "50px",
        "11xl": "30px",
        "4xl-5": "23.5px",
        "11xs-9": "1.9px",
        "131xl": "150px",
        "8xs-8": "4.8px",
        mini: "15px",
        "89xl-1": "108.1px",
        "8xs": "5px",
        "93xl": "112px",
        "4xl-7": "23.7px",
        "149xl": "168px",
        "58xl-3": "77.3px",
        smi: "13px",
        "sm-4": "13.4px",
      },
    },
    fontSize: {
      "23xl": "2.625rem",
      "6xl": "1.563rem",
      "15xl": "2.125rem",
      "15xl-1": "2.131rem",
      xl: "1.25rem",
      "8xl": "1.688rem",
      "19xl": "2.375rem",
      "4xl": "1.438rem",
      "11xl": "1.875rem",
      lg: "1.125rem",
      base: "1rem",
      "17xl-5": "2.281rem",
      "3xl": "1.375rem",
      "10xl-5": "1.844rem",
      "5xl": "1.5rem",
      "35xl": "3.375rem",
      "13xl": "2rem",
      "24xl": "2.688rem",
      "17xl": "2.25rem",
      "10xl": "1.813rem",
      inherit: "inherit",
    },
    screens: {
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq767: {
        raw: "screen and (max-width: 767px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
