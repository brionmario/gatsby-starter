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

/* eslint-disable no-unused-vars */

const React = require("react");
const gatsby = jest.requireActual("gatsby");

module.exports = {
    ...gatsby,
    Link: jest.fn()
        .mockImplementation(
            // these props are invalid for an `a` tag
            ({
                activeClassName,
                activeStyle,
                getProps,
                innerRef,
                partiallyActive,
                ref,
                replace,
                to,
                ...rest
            }) =>
                React.createElement("a", {
                    ...rest,
                    href: to
                })
        ),
    StaticQuery: jest.fn(),
    graphql: jest.fn(),
    useStaticQuery: jest.fn()
};
