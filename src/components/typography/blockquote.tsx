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
import React, { FunctionComponent, PropsWithChildren, ReactElement } from "react";
import { TestableComponentInterface } from "../../models";

/**
 * Interface for the Blockquote component props.
 */
interface IBlockquoteProps extends TestableComponentInterface {

}

/**
 * Block Quote Component.
 *
 * @param {IBlockquoteProps} props - Props injected to the component.
 * @return {React.ReactElement}
 */
export const Blockquote: FunctionComponent<PropsWithChildren<IBlockquoteProps>> = (
    props: PropsWithChildren<IBlockquoteProps>
): ReactElement => {

    const {
        children,
        "data-testid": testId
    } = props;

    const classes = cx(
        "blockquote",
        "relative mb-5 p-4 text-xl italic border-l-4 bg-neutral-100 text-neutral-600 border-neutral-500 quote"
    );

    return (
        <blockquote
            data-testid={ testId }
            className={ classes }
        >
            { children }
        </blockquote>
    );
};

/**
 * Default props for the component.
 * @type {{"data-testid": string}}
 */
Blockquote.defaultProps = {
    "data-testid": "blockquote"
};
