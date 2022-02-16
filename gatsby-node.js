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

const fs = require("fs");
const path = require("path");
const { createRemoteFileNode } = require("gatsby-source-filesystem");

/* eslint-disable no-console */
const logger = {
    error: console.error,
    info: console.log
};
/* eslint-enable sort-keys */

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
    posts.forEach(({ node }) => {
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

exports.createSchemaCustomization = async ({ actions }) => {

    const {
        createTypes,
        printTypeDefinitions
    } = actions;

    createTypes(`
        type Mdx implements Node {
            frontmatter: Frontmatter
            embeddedImagesRemote: [File] @link(from: "fields.embeddedImagesRemote")
        }
        type Frontmatter @dontInfer {
            title: String!
            slug: String
            date: Date @dateformat
            author: String
            authorAvatar: String
            description: String
            excerpt: String
            category: String
            keywords: [String]
            featuredImage: File @fileByRelativePath
            embeddedImagesLocal: [File] @fileByRelativePath
            embeddedImagesRemote: [String]
        }
    `);

    const GRAPHQL_TYPE_DEF_DEBUG_FILE_PATH = path.join(__dirname, "debug-graphql-typings.txt");

    try {
        if (fs.existsSync(path.resolve(GRAPHQL_TYPE_DEF_DEBUG_FILE_PATH))) {
            logger.info("Type Definition file exists. Removing it first...");
            fs.unlinkSync(path.resolve(GRAPHQL_TYPE_DEF_DEBUG_FILE_PATH));
        }

        await printTypeDefinitions({ path: GRAPHQL_TYPE_DEF_DEBUG_FILE_PATH });
    } catch (err) {
        logger.error("Error occured while trying to write the GraphQL Type definitions file.", err);
    }
};

exports.onCreateNode = async ({
    node,
    createNodeId,
    actions: { createNodeField, createNode },
    cache,
    store
}) => {

    if (
        node.internal.type === "Mdx" &&
        node.frontmatter &&
        node.frontmatter.embeddedImagesRemote
    ) {
        let embeddedImagesRemote = await Promise.all(
            node.frontmatter.embeddedImagesRemote.map((url) => {
                try {
                    return createRemoteFileNode({
                        cache,
                        createNode,
                        createNodeId,
                        parentNodeId: node.id,
                        store,
                        url
                    });
                } catch (error) {
                    logger.error(error);
                }
            })
        );

        if (embeddedImagesRemote) {
            createNodeField({
                name: "embeddedImagesRemote",
                node,
                value: embeddedImagesRemote.map((image) => {
                    return image.id;
                })
            });
        }
    }
};
