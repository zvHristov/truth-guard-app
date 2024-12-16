module.exports = {
  extends: [
    "next/core-web-vitals", //  'next'
    "next/typescript",
    "plugin:tailwindcss/recommended"
  ],
  rules: {
    "react/no-unescaped-entities": "off",
    "no-console": ["error", { allow: ["info", "warn", "error"] }],
    "tailwindcss/classnames-order": "error"
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.js"],
      parser: "@typescript-eslint/parser"
    },
  ],
}
