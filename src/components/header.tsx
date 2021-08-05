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

import { Link } from "gatsby";
import React, { FunctionComponent } from "react";

interface IHeaderProps {
  siteTitle: string;
}

export const Header: FunctionComponent<IHeaderProps> = (
    props: IHeaderProps
) => {

    const {
        siteTitle
    } = props;

    return (
        <header
            style={ {
                background: "rebeccapurple",
                marginBottom: "1.45rem"
            } }
        >
            <div
                style={ {
                    margin: "0 auto",
                    maxWidth: 960,
                    padding: "1.45rem 1.0875rem"
                } }
            >
                <h1 style={ { margin: 0 } }>
                    <Link
                        to="/"
                        style={ {
                            color: "white",
                            textDecoration: "none"
                        } }
                    >
                        { siteTitle }
                    </Link>
                </h1>
            </div>
        </header>
    );
};

Header.defaultProps = {
    siteTitle: ""
};
