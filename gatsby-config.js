/**
 * MIT License
 *
 * Copyright (c) 2021 Aparecium Labs
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
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
                    "jsx"
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
        "gatsby-plugin-gatsby-cloud"
    ],
    siteMetadata: {
        author: "@brionmario",
        description: "Aparecium Labs official website.",
        siteUrl: "https://apareciumlabs.com",
        title: "Aparecium Labs"
    }
};
