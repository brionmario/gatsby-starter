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
import { BaseLayout } from "./base-layout";
import { StylableComponentInterface, TestableComponentInterface } from "../../models";

/**
 * Interface for the Error layout component props.
 */
interface IErrorLayoutProps extends TestableComponentInterface, StylableComponentInterface {
}

/**
 * Layout for error pages.
 *
 * @param {React.PropsWithChildren<IErrorLayoutProps>} props - Props injected to the component.
 * @return {React.ReactElement}
 */
export const ErrorLayout: FunctionComponent<IErrorLayoutProps> = (
    props: PropsWithChildren<IErrorLayoutProps>
): ReactElement => {

    const {
        children,
        className,
        [ "data-testid" ]: testId
    } = props;

    const classes = cx(
        "error-layout",
        className
    );

    return (
        <BaseLayout data-testid="base-layout">
            <div data-testid={ testId } className={ classes }>
                { children }
            </div>
        </BaseLayout>
    );
};

/**
 * Default props for the component.
 * @type {{"data-testid": string}}
 */
ErrorLayout.defaultProps = {
    "data-testid": "error-layout"
};
