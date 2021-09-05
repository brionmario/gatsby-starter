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

import cx from "classnames";
import { graphql, useStaticQuery } from "gatsby";
import React, { FunctionComponent, PropsWithChildren, ReactElement } from "react";
import { BaseLayout } from "./base-layout";
import { Container, Footer, Header } from "../../components";
import { StylableComponentInterface, TestableComponentInterface } from "../../models";

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
        <BaseLayout data-testid="base-layout">
            <div data-testid={ testId } className={ classes }>
                <Header
                    siteTitle={ data.site.siteMetadata.title || "Title" }
                    data-testid="header"
                />
                <div className="flex-grow">
                    <Container data-testid="container">
                        { children }
                    </Container>
                </div>
                <Footer data-testid="footer" />
            </div>
        </BaseLayout>
    );
};

/**
 * Default props for the component.
 * @type {{"data-testid": string}}
 */
SiteLayout.defaultProps = {
    "data-testid": "site-layout"
};
