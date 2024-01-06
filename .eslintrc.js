module.exports = {
  extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:jsx-a11y/recommended",
    "next/core-web-vitals",
    "prettier",
  ],
  plugins: ["react", "jsx-a11y", "import"],
  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".tsx", ".jsx"] }],
    "import/extensions": ["error", "never", { "svg": "always" }],
    semi: ['error', 'always'],
  },
  overrides: [
    {
      files: ["**/*.js", "**/*.jsx"],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      rules: {
        "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
      },
    },
  ],
};
