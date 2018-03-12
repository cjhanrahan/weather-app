module.exports = {
    "parser": "babel-eslint", // needed to make babel stuff work properly
    "extends": "airbnb",
    rules: {
        semi: ['error', 'never'],
        indent: ['error', 4],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'func-names': 0,
        'function-paren-newline': 0,
        'no-unused-expressions': 0,
        'comma-dangle': 0,
        'react/jsx-filename-extension': 0,
        'import/prefer-default-export': 0,
    },
    env: {
        "node": true,
        "browser": true,
        mocha: true,
    },
};
