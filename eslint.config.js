// eslint.config.cjs
const js = require("@eslint/js");
const globals = require("globals");
const { defineConfig } = require("eslint/config");

module.exports = defineConfig([
  {
    files: ["/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
    rules: {
      "no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^(next|error||sellerId)",
          varsIgnorePattern: "^(|coupon|productFactory|uri|Order|outputFormat)",
        },
      ],
      "no-unexpected-multiline": "off",
    },
  },
  {
    files: ["test//.js", "**/.test.js"],
    languageOptions: {
      globals: {
        ...globals.mocha,
      },
    },
    rules: {
      "no-unused-vars": "off",
    },
  },
]);
