/**
 * BSD Zero Clause License
 *
 * Copyright (c) 2021 Brion Mario
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
 * REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
 * AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
 * INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
 * LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
 * OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
 * PERFORMANCE OF THIS SOFTWARE.
 */

module.exports = {
    env: {
        browser: true, // Browser global variables like `window` etc.
        commonjs: true, // CommonJS global variables and CommonJS scoping.Allows require, exports and module.
        es6: true, // Enable all ECMAScript 6 features except for modules.
        jest: true, // Jest global variables like `it` etc.
        node: true // Defines things like process.env when generating through node
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:react-hooks/recommended",
        "plugin:jest/recommended",
        "plugin:testing-library/react",
        "plugin:cypress/recommended"
    ],
    overrides: [
        {
            files: [ "**/*.ts?(x)" ],
            parser: "@typescript-eslint/parser",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                },
                ecmaVersion: 2018,
                sourceType: "module"
            },
            plugins: [
                "@typescript-eslint"
            ],
            // You can add Typescript specific rules here.
            // If you are adding the typescript variant of a rule which is there in the javascript
            // ruleset, disable the JS one.
            rules: {
                "@typescript-eslint/no-array-constructor": "warn",
                "no-array-constructor": "off"
            }
        }
    ],
    parser: "@babel/eslint-parser", // Uses babel-eslint transforms.
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
        requireConfigFile : false, // To silent @babel/eslint-parser from needing a `babelrc` file.
        sourceType: "module" // Allows for the use of imports
    },
    plugins: [
        "import" // eslint-plugin-import plugin. https://www.npmjs.com/package/eslint-plugin-import
    ],
    root: true, // For configuration cascading.
    rules: {
        "comma-dangle": [
            "warn",
            "never"
        ],
        "eol-last": "error",
        "import/order": [
            "warn",
            {
                alphabetize: {
                    caseInsensitive: true,
                    order: "asc"
                },
                groups: [
                    "builtin",
                    "external",
                    "index",
                    "sibling",
                    "parent",
                    "internal"
                ]
            }
        ],
        indent: [
            "error",
            4
        ],
        "jest/expect-expect": "off",
        "jsx-quotes": [
            "warn",
            "prefer-double"
        ],
        "max-len": [
            "warn",
            {
                code: 120
            }
        ],
        "no-console": "warn",
        "no-duplicate-imports": "warn",
        "no-unused-vars": "warn",
        "object-curly-spacing": [
            "warn",
            "always"
        ],
        "padded-blocks": [
            "off",
            "always"
        ],
        quotes: [
            "warn",
            "double"
        ],
        "react/jsx-curly-spacing": [
            "warn",
            {
                allowMultiline: true,
                children: {
                    when: "always"
                },
                spacing: {
                    objectLiterals: "always"
                },
                when: "always"
            }
        ],
        "react/jsx-filename-extension": [
            "error",
            {
                extensions: [
                    ".js",
                    ".jsx",
                    ".ts",
                    ".tsx"
                ]
            }
        ],
        "react/jsx-indent": [
            "error",
            4,
            {
                checkAttributes: false,
                indentLogicalExpressions: true
            }
        ],
        "react/jsx-indent-props": [
            "error",
            4
        ],
        "react/prop-types": "warn",
        semi: "warn",
        "sort-imports": [
            "warn",
            {
                ignoreCase: false,
                ignoreDeclarationSort: true,
                ignoreMemberSort: false
            }
        ],
        "sort-keys": [
            "warn",
            "asc",
            {
                caseSensitive: true,
                minKeys: 2,
                natural: true // allows 50, 100 instead of 100, 50 which is not natural.
            }
        ]
    },
    settings: {
        react: {
            version: "detect" // Detect react version
        }
    }
};
