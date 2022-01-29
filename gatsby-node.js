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

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {

    // Destructure the createPage function from the actions object
    const { createPage } = actions;

    const result = await graphql(`
        query BLOG_POSTS {
            allMdx {
                edges {
                    node {
                        id
                        frontmatter {
                          slug
                        }
                    }
                }
            }
        }
    `);

    if (result.errors) {
        reporter.panicOnBuild("🚨  ERROR: Loading \"createPages\" query");
    }

    // Create blog post pages.
    const posts = result.data.allMdx.edges;

    // you'll call `createPage` for each result
    posts.forEach(({ node }, index) => {
        createPage({
            // This component will wrap our MDX content
            component: path.resolve("./src/templates/blog-post-template.tsx"),
            // Pass any value you want to access inside the template. They'll be available via `props`.
            context: {
                id: node.id
            },
            // Slug defined with frontmatter in each MDX file.
            path: node.frontmatter.slug
        });
    });
};
