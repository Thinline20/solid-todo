import eslint from "@eslint/js";
import * as tsParser from "@typescript-eslint/parser";
import eslintConfigPrettier from "eslint-config-prettier";
import perfectionist from "eslint-plugin-perfectionist";
import perfectionistNatural from "eslint-plugin-perfectionist/configs/recommended-natural";
import solid from "eslint-plugin-solid/configs/typescript.js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: ["eslint.config.*", "src/components/ui/*"],
  },
  eslint.configs.recommended,
  ...tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      perfectionist,
    },
    rules: {
      "@typescript-eslint/consistent-type-definitions": "off",
    },
  },
  {
    files: ["**/*.{ts,tsx}"],
    ...solid,
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "tsconfig.json",
      },
    },
  },
  perfectionistNatural,
  eslintConfigPrettier,
);
