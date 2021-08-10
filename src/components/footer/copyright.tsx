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
import React, { FunctionComponent, ReactElement } from "react";
import ApareciumLabsFoxIcon from "../../assets/images/logo-aparecium-fox-only.svg";
import { StylableComponentInterface, TestableComponentInterface } from "../../models";

/**
 * Interface for the Copyright component props.
 */
interface ICopyrightProps extends TestableComponentInterface, StylableComponentInterface {
}

/**
 * Footer Copyright component.
 *
 * @param {ICopyrightProps} props - Props injected to the component.
 * @return {React.ReactElement}
 */
export const Copyright: FunctionComponent<ICopyrightProps> = (
    props: ICopyrightProps
): ReactElement => {

    const {
        [ "data-testid" ]: testId
    } = props;

    const classes = cx(
        "copyright",
        "flex flex-row items-center md:width-full text-sm text-gray-600"
    );

    /**
     * Generates the current year.
     *
     * @return {number}
     */
    const getYear = (): number => {

        const date: Date = new Date;
        let currentYear: number = date.getFullYear();

        if (currentYear < 1900) {
            currentYear = currentYear + 1900;
        }

        return currentYear;
    };

    return (
        <div data-testid={ testId } className={ classes }>
            <p>&copy; Copyright { getYear() }</p>
            <img
                alt="Apareciumlabs Logo Copyright"
                className="mr-2 ml-2"
                src={ ApareciumLabsFoxIcon }
                width="20px"
                height="20px"
            />
            <p>Aparecium Labs. All rights reserved.</p>
        </div>
    );
};

/**
 * Default props for the component.
 * @type {{"data-testid": string}}
 */
Copyright.defaultProps = {
    "data-testid": "copyright"
};
