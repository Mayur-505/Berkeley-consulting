/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      "1": "1px",
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    extend: {
      colors: {
        white: "#fff",
        "greys-grey-08": "#1e293b",
        "greys-grey-01": "#f1f5f9",
        "greys-grey-10": "#020617",
        "greys-grey-09": "#0f172a",
        "gray-200": "#eaecf0",
        "greys-grey-05": "#64748b",
        "gray-900": "#101828",
        slategray: "#6c757d",
        "primary-purple-06": "#2563eb",
        gray: {
          "100": "#1a1b22",
          "200": "rgba(255, 255, 255, 0.01)",
        },
        "greys-grey-02": "#e2e8f0",
        "greys-grey-06": "#475569",
        black: "#1d1e25",
        grey: "#808d9e",
        "greys-grey-04": "#94a3b8",
        "greys-grey-07": "#334155",
        "primary-purple-08": "#1e40af",
        "primary-purple-04": "#60a5fa",
        "primary-purple-05": "#3b82f6",
        "primary-purple-03": "#93c5fd",
        "greys-grey-03": "#cbd5e1",
        "primary-purple-01": "#dbeafe",
      },
      fontFamily: {
        "button-1-semibold": "'General Sans'",
        "body-1-light": "Satoshi",
        "heading-3-medium": "'Plus Jakarta Sans'",
        "small-text": "'DM Sans'",
        inherit: "inherit",
        "lead-lead-1": "Inter",
      },
      borderRadius: {
        "35xl": "54px",
        "8xs": "5px",
        sm: "14px",
        xl: "20px",
        "12xs-5": "0.5px",
        "11xl": "30px",
        "21xl": "40px",
        lg: "18px",
        "115xl": "134px",
        "70xl": "89px",
        "61xl": "80px",
        "59xl": "78px",
      },
    },
    fontSize: {
      lg: "18px",
      "13xl": "32px",
      base: "16px",
      "29xl": "48px",
      "5xl": "24px",
      "45xl": "64px",
      "37xl": "56px",
      sm: "14px",
      xs: "12px",
      "21xl": "40px",
      "53xl": "72px",
    },
    fontFamily: {
      'general-sans': ['"General Sans"', 'sans-serif'],
      'satoshi': ['Satoshi', 'sans-serif'],
      'plus-jakarta-sans': ['"Plus Jakarta Sans"', 'sans-serif'],
      'inter': ['Inter', 'sans-serif'],
      'dm-sans': ['"DM Sans"', 'sans-serif'],
    }
  },
  corePlugins: {
    preflight: false,
  },
}
