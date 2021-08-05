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

import { Link, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { FunctionComponent, ReactElement } from "react";
import { SEO } from "../components";
import { Layout } from "../layouts";
import { TestableComponentInterface } from "../models";

type IIndexPageProps = TestableComponentInterface;

const IndexPage: FunctionComponent<PageProps<IIndexPageProps>> = (
    props: PageProps<IIndexPageProps>
): ReactElement => {

    const {
        data
    } = props;

    const {
        "data-testid": testId
    } = data;

    return (
        <Layout data-testid={ testId }>
            <SEO title="Home" />
            <h1>Hi people</h1>
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>
            <StaticImage
                src="../images/gatsby-astronaut.png"
                width={ 300 }
                quality={ 95 }
                formats={ ["AUTO", "WEBP", "AVIF"] }
                alt="A Gatsby astronaut"
                style={ { marginBottom: "1.45rem" } }
            />
            <p>
                <Link to="/page-2/">Go to page 2</Link>
                { " " }
                <br />
                <Link to="/using-typescript/">Go to Using TypeScript</Link>
            </p>
        </Layout>
    );
};

IndexPage.defaultProps = {
    data: {
        "data-testid": "index-page"
    }
};

export default IndexPage;
