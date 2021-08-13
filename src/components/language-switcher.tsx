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

import { faChevronDown, faLanguage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Popover, Transition } from "@headlessui/react";
import cx from "classnames";
import { LocalizedLink, useLocalization } from "gatsby-theme-i18n";
import React, { Fragment, FunctionComponent, ReactElement } from "react";
import { IGatsbyI18LanguageConfig, StylableComponentInterface, TestableComponentInterface } from "../models";

/**
 * Interface for the Language Switcher component props.
 */
interface ILanguageSwitcherProps extends TestableComponentInterface, StylableComponentInterface {
}

/**
 * Language Switcher component.
 *
 * @param {ILanguageSwitcherProps} props - Props injected to the component.
 * @return {React.ReactElement}
 */
export const LanguageSwitcher: FunctionComponent<ILanguageSwitcherProps> = (
    props: ILanguageSwitcherProps
): ReactElement => {

    const {
        className,
        [ "data-testid" ]: testId
    } = props;

    const { locale, config } = useLocalization();

    const classes = cx(
        "language-switcher",
        "relative",
        className
    );

    /**
     * Extract a specific language configuration from the list.
     *
     * @param {string} localeCode -
     * @return {IGatsbyI18LanguageConfig}
     */
    const getLanguageConfig = (localeCode: string): IGatsbyI18LanguageConfig => {

        return config.find((item: any) => item.code === localeCode);
    };

    return (
        <Popover data-testid={ testId } className={ classes }>
            { ({ open }) => (
                <>
                    <Popover.Button
                        className={ cx(
                            open ? "text-gray-100" : "text-gray-500",
                            "group rounded-md inline-flex items-center text-base font-medium " +
                            "hover:text-gray-100 focus:outline-none"
                        ) }
                    >
                        <span>
                            <FontAwesomeIcon
                                className={ cx(
                                    open ? "text-gray-100" : "text-gray-500",
                                    "mr-2 h-5 w-5 group-hover:text-gray-100"
                                ) }
                                size="lg"
                                aria-hidden="true"
                                icon={ faLanguage }
                            />
                            { getLanguageConfig(locale).localName }
                        </span>
                        <FontAwesomeIcon
                            className={ cx(
                                open ? "text-gray-100" : "text-gray-500",
                                "ml-2 h-5 w-5 group-hover:text-gray-100"
                            ) }
                            size="xs"
                            aria-hidden="true"
                            icon={ faChevronDown }
                        />
                    </Popover.Button>

                    <Transition
                        show={ open }
                        as={ Fragment }
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                    >
                        <Popover.Panel
                            static
                            className={
                                "absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 " +
                                "px-2 w-64 max-w-md sm:px-0"
                            }
                        >
                            <div
                                className={
                                    "rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 " +
                                    "overflow-hidden"
                                }
                            >
                                <div
                                    className={
                                        "relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"
                                    }
                                >
                                    { config.map((item: any) => (
                                        <LocalizedLink
                                            key={ item.name }
                                            to={ "/" }
                                            language={ item.code }
                                            className={
                                                "-m-3 p-3 flex items-start rounded-lg " +
                                                "hover:bg-gray-50"
                                            }
                                        >
                                            <div className="ml-4">
                                                <p
                                                    className={
                                                        "text-base font-medium text-gray-900"
                                                    }
                                                >
                                                    { item.localName }
                                                </p>
                                            </div>
                                        </LocalizedLink>
                                    )) }
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </>
            ) }
        </Popover>
    );
};

/**
 * Default props for the component.
 * @type {{"data-testid": string}}
 */
LanguageSwitcher.defaultProps = {
    "data-testid": "language-switcher"
};
