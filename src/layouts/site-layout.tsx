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

import cx from "classnames";
import { graphql, useStaticQuery } from "gatsby";
import React, { FunctionComponent, PropsWithChildren, ReactElement } from "react";
import { Header } from "../components";
import { Footer } from "../components/footer";
import { StylableComponentInterface, TestableComponentInterface } from "../models";

/**
 * Interface for the Site layout component props.
 */
interface ISiteLayoutProps extends TestableComponentInterface, StylableComponentInterface {
}

/**
 * Parent Layout for all pages that requires Header, Footer.
 *
 * @param {React.PropsWithChildren<ISiteLayoutProps>} props - Props injected to the component.
 * @return {React.ReactElement}
 */
export const SiteLayout: FunctionComponent<ISiteLayoutProps> = (
    props: PropsWithChildren<ISiteLayoutProps>
): ReactElement => {

    const {
        children,
        [ "data-testid" ]: testId
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

    const classes = cx(
        "site-layout",
        "flex flex-col min-h-screen"
    );

    return (
        <div data-testid={ testId } className={ classes }>
            <Header
                siteTitle={ data.site.siteMetadata.title || "Title" }
                data-testid="header"
            />
            <div className="flex-grow">
                { children }
            </div>
            <Footer data-testid="footer" />
        </div>
    );
};

/**
 * Default props for the component.
 * @type {{"data-testid": string}}
 */
SiteLayout.defaultProps = {
    "data-testid": "site-layout"
};
