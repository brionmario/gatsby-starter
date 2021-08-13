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
