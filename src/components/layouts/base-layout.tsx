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
import { StylableComponentInterface, TestableComponentInterface } from "../../models";

/**
 * Interface for the Base layout component props.
 */
interface IBaseLayoutProps extends TestableComponentInterface, StylableComponentInterface {
}

/**
 * Parent Layout to wrap other layouts.
 *
 * @remarks This can be used to provide base CSS classes, re-usable components that are required for
 * all other layouts.
 *
 * @param {React.PropsWithChildren<IBaseLayoutProps>} props - Props injected to the component.
 * @return {React.ReactElement}
 */
export const BaseLayout: FunctionComponent<IBaseLayoutProps> = (
    props: PropsWithChildren<IBaseLayoutProps>
): ReactElement => {

    const {
        children,
        className,
        [ "data-testid" ]: testId
    } = props;

    const classes = cx(
        "base-layout",
        "bg-gray-900",
        className
    );

    return (
        <div data-testid={ testId } className={ classes }>
            { children }
        </div>
    );
};

/**
 * Default props for the component.
 * @type {{"data-testid": string}}
 */
BaseLayout.defaultProps = {
    "data-testid": "base-layout"
};
