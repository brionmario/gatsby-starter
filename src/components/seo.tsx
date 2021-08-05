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
import React, { FunctionComponent } from "react";
import { Helmet } from "react-helmet";

interface ISEOProps {
  description?: string,
  lang?: string,
  meta?: Array<{name: string, content: string}> | any,
  title: string
}

interface ISiteQuery {
    siteMetadata: {
        title: string;
        description: string;
        author: string;
    }
}

export const SEO: FunctionComponent<ISEOProps> = (props: ISEOProps) => {

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

SEO.defaultProps = {
    description: "",
    lang: "en",
    meta: []
};
