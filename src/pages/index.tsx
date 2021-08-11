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

import { PageProps } from "gatsby";
import React, { FunctionComponent, ReactElement } from "react";
import { Hero, SEO } from "../components";
import { BaseLayout, SiteLayout } from "../layouts";
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
        <BaseLayout data-testid={ `${ testId }-base-layout` }>
            <SiteLayout data-testid={ `${ testId }-site-layout` }>
                <SEO title="Home" />
                <Hero data-testid={ `${ testId }-hero` } />
            </SiteLayout>
        </BaseLayout>
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
