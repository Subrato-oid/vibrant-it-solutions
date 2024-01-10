module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "standard-with-typescript",
    "plugin:react/recommended",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        ".eslintrc.{js,cjs}",
      ],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "react",
  ],
  rules: {
    "multiline-ternary": "off",
    "@typescript-eslint/quotes": ["error", "double", { allowTemplateLiterals: true }],
    "@typescript-eslint/comma-dangle": ["error", {
      arrays: "always-multiline",
      objects: "always-multiline",
      imports: "never",
      exports: "never",
      functions: "never",
    }],
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    "react/no-unescaped-entities": 0,
    "n/no-path-concat": "off",
  },
}
