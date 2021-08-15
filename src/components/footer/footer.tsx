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

import { faFacebook, faGithub, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cx from "classnames";
import React, { FunctionComponent, ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { Copyright } from "./copyright";
import { StylableComponentInterface, TestableComponentInterface } from "../../models";

/**
 * Interface for the Footer component props.
 */
interface IFooterProps extends TestableComponentInterface, StylableComponentInterface {
}

/**
 * Footer component.
 *
 * @param {IFooterProps} props - Props injected to the component.
 * @return {React.ReactElement}
 */
export const Footer: FunctionComponent<IFooterProps> = (
    props: IFooterProps
): ReactElement => {

    const {
        [ "data-testid" ]: testId
    } = props;

    const { t } = useTranslation();

    const classes = cx(
        "footer",
        "px-4 sm:px-6 md:px-4 lg:px-8 pt-16 lg:mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl"
    );

    return (
        <div data-testid={ testId } className={ classes }>
            <div className="grid row-gap-10 mb-8 lg:grid-cols-6">
                <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
                    <div>
                        <p className="font-medium tracking-wide text-gray-300">
                            { t("common:footer.links.categories.1.heading") }
                        </p>
                        <ul className="mt-2 space-y-2">
                            <li>
                                <a
                                    href="/"
                                    className={
                                        "text-gray-500 transition-colors duration-300 hover:text-deep-orange-accent-700"
                                    }
                                >
                                    { t("common:footer.links.categories.1.subLinks.1") }
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className={
                                        "text-gray-500 transition-colors duration-300 hover:text-deep-orange-accent-700"
                                    }
                                >
                                    { t("common:footer.links.categories.1.subLinks.2") }
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className={
                                        "text-gray-500 transition-colors duration-300 hover:text-deep-orange-accent-700"
                                    }
                                >
                                    { t("common:footer.links.categories.1.subLinks.3") }
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-medium tracking-wide text-gray-300">
                            { t("common:footer.links.categories.2.heading") }
                        </p>
                        <ul className="mt-2 space-y-2">
                            <li>
                                <a
                                    href="/"
                                    className={
                                        "text-gray-500 transition-colors duration-300 hover:text-deep-orange-accent-700"
                                    }
                                >
                                    { t("common:footer.links.categories.2.subLinks.1") }
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className={
                                        "text-gray-500 transition-colors duration-300 hover:text-deep-orange-accent-700"
                                    }
                                >
                                    { t("common:footer.links.categories.2.subLinks.2") }
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className={
                                        "text-gray-500 transition-colors duration-300 hover:text-deep-orange-accent-700"
                                    }
                                >
                                    { t("common:footer.links.categories.2.subLinks.3") }
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-medium tracking-wide text-gray-300">
                            { t("common:footer.links.categories.3.heading") }
                        </p>
                        <ul className="mt-2 space-y-2">
                            <li>
                                <a
                                    href="/"
                                    className={
                                        "text-gray-500 transition-colors duration-300 hover:text-deep-orange-accent-700"
                                    }
                                >
                                    { t("common:footer.links.categories.3.subLinks.1") }
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className={
                                        "text-gray-500 transition-colors duration-300 hover:text-deep-orange-accent-700"
                                    }
                                >
                                    { t("common:footer.links.categories.3.subLinks.2") }
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className={
                                        "text-gray-500 transition-colors duration-300 hover:text-deep-orange-accent-700"
                                    }
                                >
                                    { t("common:footer.links.categories.3.subLinks.3") }
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-medium tracking-wide text-gray-300">
                            { t("common:footer.links.categories.3.heading") }
                        </p>
                        <ul className="mt-2 space-y-2">
                            <li>
                                <a
                                    href="/"
                                    className={
                                        "text-gray-500 transition-colors duration-300 hover:text-deep-orange-accent-700"
                                    }
                                >
                                    { t("common:footer.links.categories.4.subLinks.1") }
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className={
                                        "text-gray-500 transition-colors duration-300 hover:text-deep-orange-accent-700"
                                    }
                                >
                                    { t("common:footer.links.categories.4.subLinks.2") }
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className={
                                        "text-gray-500 transition-colors duration-300 hover:text-deep-orange-accent-700"
                                    }
                                >
                                    { t("common:footer.links.categories.4.subLinks.3") }
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="md:max-w-md lg:col-span-2 mt-6 lg:mt-0">
                    <div>
                        <span className="font-medium tracking-wide text-gray-300">
                            { t("common:footer.social.heading") }
                        </span>
                        <div className="flex items-center mt-3 space-x-3">
                            <a
                                href="https://twitter.com/apareciumlabs"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={
                                    "text-gray-500 transition-colors duration-300 hover:text-deep-orange-accent-400"
                                }
                            >
                                <FontAwesomeIcon size="lg" icon={ faTwitter } />
                            </a>
                            <a
                                href="https://www.facebook.com/apareciumlabs/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={
                                    "text-gray-500 transition-colors duration-300 hover:text-deep-orange-accent-400"
                                }
                            >
                                <FontAwesomeIcon size="lg" icon={ faFacebook } />
                            </a>
                            <a
                                href="https://www.instagram.com/apareciumlabs/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={
                                    "text-gray-500 transition-colors duration-300 hover:text-deep-orange-accent-400"
                                }
                            >
                                <FontAwesomeIcon size="lg" icon={ faInstagram } />
                            </a>
                            <a
                                href="https://www.github.com/apareciumlabs/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={
                                    "text-gray-500 transition-colors duration-300 hover:text-deep-orange-accent-400"
                                }
                            >
                                <FontAwesomeIcon size="lg" icon={ faGithub } />
                            </a>
                        </div>
                        <p className="mt-4 text-sm text-gray-500">
                            { t("common:footer.social.description") }
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 lg:flex-row">
                <Copyright data-testid={ `${ testId }-copyright` } />
                <ul className="flex flex-col mb-3 mt-3 space-y-2 lg:mb-0 lg:mt-0 lg:space-y-0 lg:space-x-5 lg:flex-row">
                    <li>
                        <a
                            href="/"
                            className={
                                "text-sm text-gray-600 transition-colors duration-300 hover:text-deep-orange-accent-400"
                            }
                        >
                            { t("common:footer.links.other.faq") }
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            className={
                                "text-sm text-gray-600 transition-colors duration-300 hover:text-deep-orange-accent-400"
                            }
                        >
                            { t("common:footer.links.other.privacyPolicy") }
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            className={
                                "text-sm text-gray-600 transition-colors duration-300 hover:text-deep-orange-accent-400"
                            }
                        >
                            { t("common:footer.links.other.terms") }
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

/**
 * Default props for the component.
 * @type {{"data-testid": string}}
 */
Footer.defaultProps = {
    "data-testid": "footer"
};
