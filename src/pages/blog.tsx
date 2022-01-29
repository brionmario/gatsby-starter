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

import { Link, PageProps, graphql, useStaticQuery } from "gatsby";
import React, { FunctionComponent, ReactElement } from "react";
import { Heading, SEO, SiteLayout } from "../components";
import { TestableComponentInterface } from "../models";

/**
 * Interface for the Pricing Page props.
 */
type IPricingPageProps = TestableComponentInterface;

/**
 * Pricing page of the site.
 *
 * @param {PageProps<IPricingPageProps>} props - Props injected to the component.
 * @return {React.ReactElement}
 */
const BlogPage: FunctionComponent<PageProps<IPricingPageProps>> = (
    props: PageProps<IPricingPageProps>
): ReactElement => {

    const {
        data
    } = props;

    const {
        "data-testid": testId
    } = data;

    const query = useStaticQuery(
        graphql`
            query BLOG_POSTS_INDEX {
                allMdx(sort: {fields: frontmatter___date, order: ASC}) {
                    edges {
                        node {
                            id
                            frontmatter {
                                date(formatString: "YYYY MM Do")
                                author
                                title
                                slug
                            }
                        }
                    }
                }
            }
        `
    );

    return (
        <SiteLayout data-testid={ `${ testId }-site-layout` }>
            <SEO title="Pricing" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <Heading.H1 data-testid="heading">
                            Blog
                        </Heading.H1>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                            These are some of the blogs we have written over the years. Please have a look and
                            contact us if you have any issues.
                        </p>
                    </div>

                    <div className="mt-10">
                        <div
                            className={
                                "px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 " +
                                "lg:px-8 lg:py-20"
                            }
                        >
                            <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                                {
                                    query.allMdx.edges.map((post: any, index: number) => (
                                        <div
                                            key={ index }
                                            className={
                                                "overflow-hidden transition-shadow duration-300 bg-white " +
                                                "rounded shadow-sm"
                                            }
                                        >
                                            <div className="p-5 border border-t-0">
                                                <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                                                    <span className="text-gray-600">
                                                        — { post.node.frontmatter.date }
                                                    </span>
                                                </p>
                                                <div
                                                    className={
                                                        "inline-block mb-3 text-2xl font-bold leading-5 " +
                                                        "transition-colors duration-200 " +
                                                        "hover:text-deep-purple-accent-700"
                                                    }
                                                >
                                                    { post.node.frontmatter.title }
                                                </div>
                                                <p className="mb-2 text-gray-700">
                                                    { post.node.excerpt }
                                                </p>
                                                <Link
                                                    to={ post.node.frontmatter.slug }
                                                    className={
                                                        "inline-flex items-center font-semibold transition-colors " +
                                                        "duration-200 text-deep-purple-accent-400 " +
                                                        "hover:text-deep-purple-800"
                                                    }
                                                >
                                                    Read more
                                                </Link>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SiteLayout>
    );
};

/**
 * Default props for the component.
 * @type {{data: {"data-testid": string}}}
 */
BlogPage.defaultProps = {
    data: {
        "data-testid": "blog-page"
    }
};

export default BlogPage;
