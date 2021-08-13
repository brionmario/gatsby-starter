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
import React, { FunctionComponent, ReactElement } from "react";
import { Trans } from "react-i18next";
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
            <Trans
                i18nKey="common:footer.copyright"
                tOptions={ { year: getYear() } }
                components={
                    {
                        image: (
                            <img
                                alt="Apareciumlabs Logo Copyright"
                                className="mr-2 ml-2"
                                src={ ApareciumLabsFoxIcon }
                                width="20px"
                                height="20px"
                            />
                        )
                    }
                }
            >
                &copy; Copyright { getYear() }
                <img
                    alt="Apareciumlabs Logo Copyright"
                    className="mr-2 ml-2"
                    src={ ApareciumLabsFoxIcon }
                    width="20px"
                    height="20px"
                />
                <p>Aparecium Labs. All rights reserved.</p>
            </Trans>
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
