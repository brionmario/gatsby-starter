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
import React, { FunctionComponent, PropsWithChildren, ReactElement } from "react"
import { StylableComponentInterface, TestableComponentInterface } from "../models";

/**
 * Interface for the Base layout component props.
 */
interface IBaseLayoutProps extends TestableComponentInterface, StylableComponentInterface {
}

/**
 * Parent Layout to wrap all other layouts.
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
