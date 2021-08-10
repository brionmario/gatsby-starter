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

import { graphql, useStaticQuery } from "gatsby";
import React, { FunctionComponent, ReactElement } from "react";
import { Helmet } from "react-helmet";

/**
 * Interface for the SEO component props.
 */
interface ISEOProps {
    /**
     * Site Description.
     * @see {@link https://moz.com/learn/seo/meta-description}
     */
    description?: string;
    /**
     * Language of the element's content.
     * @see {@link https://www.w3schools.com/tags/att_global_lang.asp}
     */
    lang?: string;
    /**
     * Metadata about an HTML document.
     * @see {@link https://www.w3schools.com/tags/tag_meta.asp}
     */
    meta?: Array<{ name: string, content: string }> | any;
    /**
     * Title of the document.
     * @see {@link https://www.w3schools.com/tags/tag_title.asp}
     */
    title: string
}

/**
 * Interface for the GraphQL Site info query.
 */
interface ISiteQuery {
    siteMetadata: {
        /**
         * Site Title.
         */
        title: string;
        /**
         * Site Description.
         */
        description: string;
        /**
         * Site Author.
         */
        author: string;
    }
}

/**
 * SEO Component.
 *
 * @param {ISEOProps} props - Props injected to the component.
 * @return {React.ReactElement}
 */
export const SEO: FunctionComponent<ISEOProps> = (props: ISEOProps): ReactElement => {

    const {
        description,
        lang,
        meta,
        title
    } = props;

    const { site }: { site: ISiteQuery } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                    }
                }
            }
        `
    );

    const metaDescription: string = description || site.siteMetadata.description;
    const defaultTitle: string = site.siteMetadata?.title;

    return (
        <Helmet
            htmlAttributes={ {
                lang
            } }
            title={ title }
            titleTemplate={ defaultTitle ? `%s | ${defaultTitle}` : undefined }
            meta={ [
                {
                    content: metaDescription,
                    name: "description"
                },
                {
                    content: title,
                    property: "og:title"
                },
                {
                    content: metaDescription,
                    property: "og:description"
                },
                {
                    content: "website",
                    property: "og:type"
                },
                {
                    content: "summary",
                    name: "twitter:card"
                },
                {
                    content: site.siteMetadata?.author || "",
                    name: "twitter:creator"
                },
                {
                    content: title,
                    name: "twitter:title"
                },
                {
                    content: metaDescription,
                    name: "twitter:description"
                }
            ].concat(meta) }
        />
    );
};

/**
 * Default props for the component.
 * @type {{meta: any[]; description: string; lang: string}}
 */
SEO.defaultProps = {
    description: "",
    lang: "en",
    meta: []
};
