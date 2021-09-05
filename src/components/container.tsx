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

import React, { FunctionComponent, PropsWithChildren, ReactElement } from "react";
import { StylableComponentInterface, TestableComponentInterface } from "../models";

/**
 * Interface for the Container component props.
 */
interface IContainerProps extends TestableComponentInterface, StylableComponentInterface {
}

/**
 * Container for page layouts.
 *
 * @param {React.PropsWithChildren<IContainerProps>} props - Props injected to the component.
 * @return {React.ReactElement}
 */
export const Container: FunctionComponent<IContainerProps> = (
    props: PropsWithChildren<IContainerProps>
): ReactElement => {

    const {
        children,
        [ "data-testid" ]: testId
    } = props;

    return (
        <div
            data-testid={ testId }
            className={
                "px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
            }
        >
            { children }
        </div>
    );
};

/**
 * Default props for the component.
 * @type {{"data-testid": string}}
 */
Container.defaultProps = {
    "data-testid": "container"
};
