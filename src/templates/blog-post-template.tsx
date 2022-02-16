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

import { MDXProvider, MDXProviderComponentsProp } from "@mdx-js/react";
import cx from "classnames";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React, { FunctionComponent, ReactElement } from "react";
import { Blockquote, CodeBlock, Heading, Paragraph, SiteLayout } from "../components";
import { StylableComponentInterface, TestableComponentInterface } from "../models";

// FIle level ESLint Overrides.
/* eslint-disable react/display-name */

/**
 * Interface for the Blog Post template props.
 */
interface IBlogPostTemplateProps extends TestableComponentInterface, StylableComponentInterface {
    data: any;
}

const components: MDXProviderComponentsProp = {
    blockquote: Blockquote,
    h1: Heading.H1,
    h2: Heading.H2,
    h3: Heading.H3,
    h4: Heading.H4,
    h5: Heading.H5,
    h6: Heading.H6,
    ol: (props) => {
        return (
            <ul className="list-decimal">
                { props.children }
            </ul>
        );
    },
    p: Paragraph,
    pre: (props) => {
        return <CodeBlock data-testid="code-block" code={ props.children.props.children } />;
    },
    ul: (props) => {
        return (
            <ul className="list-disc pl-8 mb-5 text-lg">
                { props.children }
            </ul>
        );
    }
};

/**
 * Page Template for blog posts.
 *
 * @param {IBlogPostTemplateProps} props - Props injected to the component.
 * @return {React.ReactElement}
 */
const BlogPostTemplate: FunctionComponent<IBlogPostTemplateProps> = (
    props: IBlogPostTemplateProps
): ReactElement => {

    const {
        data,
        "data-testid": testId
    } = props;
    
    const {
        mdx
    } = data;

    const {
        body,
        embeddedImagesRemote,
        frontmatter
    } = mdx;

    const {
        author,
        authorAvatar,
        date,
        embeddedImagesLocal,
        title
    } = frontmatter;

    const classes = cx(
        "blog-post-layout"
    );

    return (
        <SiteLayout data-testid="site-layout">
            <div className={ classes } data-testid={ testId }>
                <div
                    className={
                        "px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-16 lg:px-6 lg:py-10"
                    }
                >
                    <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase sm:text-center">
                        { date }
                    </p>
                    <div className="max-w-xl mb-5 md:mx-auto sm:text-center lg:max-w-2xl">
                        <div className="mb-4">
                            <Heading.H1 data-testid="heading">
                                { title }
                            </Heading.H1>
                        </div>
                    </div>
                    <div className="mb-10 sm:text-center">
                        <a href="/" aria-label="Author" className="inline-block mb-1">
                            <img
                                alt="avatar"
                                src={ authorAvatar }
                                className="object-cover w-10 h-10 rounded-full shadow-sm"
                            />
                        </a>
                        <div>
                            <a
                                href="/"
                                aria-label="Author"
                                className={
                                    "font-semibold text-gray-300 transition-colors duration-200 " +
                                    "hover:text-deep-purple-accent-700"
                                }
                            >
                                { author }
                            </a>
                            <p className="text-sm font-medium leading-4 text-gray-600">Author</p>
                        </div>
                    </div>
                </div>
                <div className="text-gray-100">
                    <MDXProvider components={ components }>
                        <MDXRenderer
                            frontmatter={ frontmatter }
                            remoteImages={ embeddedImagesRemote }
                            localImages={ embeddedImagesLocal }
                        >
                            { body }
                        </MDXRenderer>
                    </MDXProvider>
                </div>
            </div>
        </SiteLayout>
    );
};

/**
 * Default props for the component.
 * @type {{"data-testid": string}}
 */
BlogPostTemplate.defaultProps = {
    "data-testid": "blog-post-template"
};

export const query = graphql`
    query BlogPostQuery($id: String) {
        mdx(id: { eq: $id }) {
            id
            body
            embeddedImagesRemote {
                childImageSharp {
                    gatsbyImageData(
                        layout: FULL_WIDTH
                    )
                }
            }
            frontmatter {
                date(formatString: "YYYY MM Do")
                title
                author
                authorAvatar
                description
                embeddedImagesLocal {
                    childImageSharp {
                        gatsbyImageData(
                            layout: FULL_WIDTH
                        )
                    }
                }
            }
        }
    }
`;

export default BlogPostTemplate;
