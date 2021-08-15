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
    plugins: [
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-image",
        "gatsby-plugin-postcss",
        {
            options: {
                postCssPlugins: [
                    require("tailwindcss"),
                    require("./tailwind.config.js")
                ]
            },
            resolve: "gatsby-plugin-sass"
        },
        {
            options: {
                exclude: [
                    "node_modules",
                    ".cache",
                    "public"
                ],
                extensions: [
                    "js",
                    "jsx",
                    "ts",
                    "tsx"
                ],
                stages: [
                    "develop"
                ]
            },
            resolve: "gatsby-plugin-eslint"
        },
        {
            options: {
                name: "images",
                path: `${__dirname}/src/assets/images`
            },
            resolve: "gatsby-source-filesystem"
        },
        "gatsby-transformer-sharp",
        "gatsby-plugin-sharp",
        {
            options: {
                background_color: "#F89C68",
                display: "minimal-ui",
                icon: "src/assets/images/logo-aparecium-fox-only.svg",
                name: "apareciumlabs-official-website",
                short_name: "apareciumlabs",
                start_url: "/",
                theme_color: "#F89C68"
            },
            resolve: "gatsby-plugin-manifest"
        },
        "gatsby-plugin-gatsby-cloud",
        {
            options: {
                configPath: require.resolve("./i18n/config.json"),
                defaultLang: "en"
            },
            resolve: "gatsby-theme-i18n"
        },
        {
            options: {
                i18nextOptions: {
                    ns: [ "dictionary", "common", "home" ]
                },
                locales: "./i18n/translations"
            },
            resolve: "gatsby-theme-i18n-react-i18next"
        },
        {
            options: {
                files: [
                    `${__dirname}/src/**/*.{css,sass,scss}`
                ]
            },
            resolve: "@danbruegge/gatsby-plugin-stylelint"
        }
    ],
    siteMetadata: {
        author: "@brionmario",
        description: "Aparecium Labs official website.",
        siteUrl: "https://apareciumlabs.com",
        title: "Aparecium Labs"
    }
};
