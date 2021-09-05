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

import { PageProps } from "gatsby";
import React, { FunctionComponent, ReactElement } from "react";
import { Hero, SEO, SiteLayout } from "../components";
import { TestableComponentInterface } from "../models";

/**
 * Interface for the Index Page props.
 */
type IIndexPageProps = TestableComponentInterface;

/**
 * Home page of the site.
 *
 * @param {PageProps<IIndexPageProps>} props - Props injected to the component.
 * @return {React.ReactElement}
 */
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
        <SiteLayout data-testid={ `${ testId }-site-layout` }>
            <SEO title="Home" />
            <Hero data-testid={ `${ testId }-hero` } />
        </SiteLayout>
    );
};

/**
 * Default props for the component.
 * @type {{data: {"data-testid": string}}}
 */
IndexPage.defaultProps = {
    data: {
        "data-testid": "index-page"
    }
};

export default IndexPage;
