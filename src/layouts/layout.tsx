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
import React, { FunctionComponent, PropsWithChildren } from "react";
import { Header } from "../components";
import "../assets/styles/layout.css";
import { TestableComponentInterface } from "../models";

type ILayoutProps = TestableComponentInterface;

export const Layout: FunctionComponent<ILayoutProps> = (
    props: PropsWithChildren<ILayoutProps>
) => {

    const {
        children
    } = props;

    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <>
            <Header siteTitle={ data.site.siteMetadata.title || "Title" } />
            <div
                style={ {
                    margin: "0 auto",
                    maxWidth: 960,
                    padding: "0 1.0875rem 1.45rem"
                } }
            >
                <main>{ children }</main>
                <footer
                    style={ {
                        marginTop: "2rem"
                    } }
                >
                    ©
                    { " " }
                    { new Date().getFullYear() }
                    , Built with
                    { " " }
                    <a href="https://www.gatsbyjs.com">Gatsby</a>
                </footer>
            </div>
        </>
    );
};
