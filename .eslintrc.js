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
        jest: true,
        node: true // defines things like process.env when generating through node,
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:react-hooks/recommended"
    ],
    parser: "babel-eslint", // uses babel-eslint transforms
    parserOptions: {
        ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
        sourceType: "module" // Allows for the use of imports
    },
    plugins: [
        "import",
        "@typescript-eslint"
    ],
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
        "no-restricted-imports": [
            "error",
            {
                paths: [
                    {
                        message: "Please use import foo from 'lodash-es/foo' instead.",
                        name: "lodash"
                    },
                    {
                        message: "Avoid using chain since it is non tree-shakable. Try out flow instead.",
                        name: "lodash-es/chain"
                    },
                    {
                        importNames: ["chain"],
                        message: "Avoid using chain since it is non tree-shakable. Try out flow instead.",
                        name: "lodash-es"
                    },
                    {
                        message: "Please use import foo from 'lodash-es/foo' instead.",
                        name: "lodash-es"
                    }
                ],
                patterns: [
                    "lodash/**",
                    "lodash/fp/**"
                ]
            }
        ],
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
            version: "detect" // detect react version
        }
    }
};
