/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  parser: "typescript",
  trailingComma: "es5",
  tabWidth: 4,
  useTabs: false,
  semi: false,
  singleQuote: true,
  arrowParens: "always",
  printWidth: 120,
  endOfLine: "lf",
}

export default config
