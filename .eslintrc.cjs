module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": ["astro"],  // Añade el plugin "astro"
    "rules": {
        "astro/missing-astro-component-close": "error"  // Añade la regla para verificar etiquetas no cerradas
    }
}
