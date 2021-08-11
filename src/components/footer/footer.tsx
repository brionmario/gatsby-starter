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

import { faFacebook, faGithub, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cx from "classnames";
import React, { FunctionComponent, ReactElement } from "react";
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

    const classes = cx(
        "footer",
        "px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
    );

    return (
        <div data-testid={ testId } className={ classes }>
            <div className="grid row-gap-10 mb-8 lg:grid-cols-6">
                <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
                    <div>
                        <p className="font-medium tracking-wide text-gray-300">
                            Category
                        </p>
                        <ul className="mt-2 space-y-2">
                            <li>
                                <a
                                    href="/"
                                    className={
                                        "text-gray-500 transition-colors duration-300 hover:text-deep-orange-accent-700"
                                    }
                                >
                                    News
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className={
                                        "text-gray-500 transition-colors duration-300 hover:text-deep-orange-accent-700"
                                    }
                                >
                                    World
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className={
                                        "text-gray-500 transition-colors duration-300 hover:text-deep-orange-accent-700"
                                    }
                                >
                                    Games
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className={
                                        "text-gray-500 transition-colors duration-300 hover:text-deep-orange-accent-700"
                                    }
                                >
                                    References
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-medium tracking-wide text-gray-300">Apples</p>
                        <ul className="mt-2 space-y-2">
                            <li>
                                <a
                                    href="/"
                                    className={
                                        "text-gray-500 transition-colors duration-300 hover:text-deep-orange-accent-700"
                                    }
                                >
                                    Web
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className={
                                        "text-gray-500 transition-colors duration-300 hover:text-deep-orange-accent-700"
                                    }
                                >
                                    eCommerce
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className={
                                        "text-gray-500 transition-colors duration-300 hover:text-deep-orange-accent-700"
                                    }
                                >
                                    Business
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className={
                                        "text-gray-500 transition-colors duration-300 hover:text-deep-orange-accent-700"
                                    }
                                >
                                    Entertainment
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className={
                                        "text-gray-500 transition-colors duration-300 hover:text-deep-orange-accent-700"
                                    }
                                >
                                    Portfolio
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-medium tracking-wide text-gray-300">Cherry</p>
                        <ul className="mt-2 space-y-2">
                            <li>
                                <a
                                    href="/"
                                    className={
                                        "text-gray-500 transition-colors duration-300 hover:text-deep-orange-accent-700"
                                    }
                                >
                                    Media
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className={
                                        "text-gray-500 transition-colors duration-300 hover:text-deep-orange-accent-700"
                                    }
                                >
                                    Brochure
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className={
                                        "text-gray-500 transition-colors duration-300 hover:text-deep-orange-accent-700"
                                    }
                                >
                                    Nonprofit
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className={
                                        "text-gray-500 transition-colors duration-300 hover:text-deep-orange-accent-700"
                                    }
                                >
                                    Educational
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className={
                                        "text-gray-500 transition-colors duration-300 hover:text-deep-orange-accent-700"
                                    }
                                >
                                    Projects
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-medium tracking-wide text-gray-300">
                            Business
                        </p>
                        <ul className="mt-2 space-y-2">
                            <li>
                                <a
                                    href="/"
                                    className={
                                        "text-gray-500 transition-colors duration-300 hover:text-deep-orange-accent-700"
                                    }
                                >
                                    Infopreneur
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className={
                                        "text-gray-500 transition-colors duration-300 hover:text-deep-orange-accent-700"
                                    }
                                >
                                    Personal
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className={
                                        "text-gray-500 transition-colors duration-300 hover:text-deep-orange-accent-700"
                                    }
                                >
                                    Wiki
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className={
                                        "text-gray-500 transition-colors duration-300 hover:text-deep-orange-accent-700"
                                    }
                                >
                                    Forum
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="md:max-w-md lg:col-span-2 mt-6 lg:mt-0">
                    <div>
                        <span className="font-medium tracking-wide text-gray-300">
                            Social
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
                            Lets socialize over these channels.
                            <br />
                            If you have any question or suggestions, please open up an issue on GitHub.
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
                            F.A.Q
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            className={
                                "text-sm text-gray-600 transition-colors duration-300 hover:text-deep-orange-accent-400"
                            }
                        >
                            Privacy Policy
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            className={
                                "text-sm text-gray-600 transition-colors duration-300 hover:text-deep-orange-accent-400"
                            }
                        >
                            Terms &amp; Conditions
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