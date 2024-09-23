# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```

## Credits for images

Foto di <a href="https://unsplash.com/it/@hudsoncrafted?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Debby Hudson</a> su <a href="https://unsplash.com/it/foto/barattolo-di-vetro-di-pennello-lotto-MzSqFPLo8CE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  
Foto di <a href="https://unsplash.com/it/@karishea?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Kari Shea</a> su <a href="https://unsplash.com/it/foto/macbook-pro-sopra-il-tavolo-marrone-1SAnrIxw5OY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

Foto di <a href="https://unsplash.com/it/@masoncbjpg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Mason B.</a> su <a href="https://unsplash.com/it/foto/pila-di-francobolli-0FbQ5wemi8Q?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  
  
## Logo and Usage Guidelines
<a href="https://github.com/logos">Logo GitHub Guidelines</a>
<a href="https://brand.linkedin.com/policies">Logo LinkedIn® Guidelines</a>
  
