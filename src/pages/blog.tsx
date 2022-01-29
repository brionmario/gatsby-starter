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

import { PageProps, graphql, useStaticQuery } from "gatsby";
import { LocalizedLink, useLocalization } from "gatsby-theme-i18n";
import React, { FunctionComponent, ReactElement } from "react";
import { useTranslation } from "react-i18next";
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

    const { locale } = useLocalization();

    const query = useStaticQuery(
        graphql`
            query MyQuery {
                allMdx(sort: {fields: frontmatter___date, order: ASC}) {
                    edges {
                        node {
                            id
                            frontmatter {
                                date(formatString: "YYYY MM Do")
                                author
                                description
                                category
                                keywords
                                title
                                slug
                                featuredImage {
                                    id
                                    publicURL
                                }
                            }
                        }
                    }
                }
            }
        `
    );

    const { t } = useTranslation();

    return (
        <SiteLayout data-testid={ `${ testId }-site-layout` }>
            <SEO title="Pricing" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <Heading.H1 data-testid="heading">
                            { t("blog:heading.title") }
                        </Heading.H1>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                            { t("blog:heading.description") }
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
                                            <img
                                                src={ post.node.frontmatter.featuredImage.publicURL }
                                                className="object-cover w-full h-64"
                                                alt=""
                                            />
                                            <div className="p-5 border border-t-0">
                                                <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                                                    <a
                                                        href="/"
                                                        className={
                                                            "transition-colors duration-200 text-blue-gray-900 " +
                                                            "hover:text-deep-purple-accent-700"
                                                        }
                                                        aria-label="Category"
                                                        title="traveling"
                                                    >
                                                        { post.node.frontmatter.category }
                                                    </a>
                                                    <span className="text-gray-600">
                                                        — { post.node.frontmatter.date }
                                                    </span>
                                                </p>
                                                <a
                                                    href="/"
                                                    aria-label="Category"
                                                    title="Visit the East"
                                                    className={
                                                        "inline-block mb-3 text-2xl font-bold leading-5 " +
                                                        "transition-colors duration-200 " +
                                                        "hover:text-deep-purple-accent-700"
                                                    }
                                                >
                                                    { post.node.frontmatter.title }
                                                </a>
                                                <p className="mb-2 text-gray-700">
                                                    { post.node.excerpt }
                                                </p>
                                                <LocalizedLink
                                                    language={ locale }
                                                    to={ post.node.frontmatter.slug }
                                                    className={
                                                        "inline-flex items-center font-semibold transition-colors " +
                                                        "duration-200 text-deep-purple-accent-400 " +
                                                        "hover:text-deep-purple-800"
                                                    }
                                                >
                                                    { t("blog:blogItem.action") }
                                                </LocalizedLink>
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
