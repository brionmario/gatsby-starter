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

import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cx from "classnames";
import React, { FunctionComponent, ReactElement } from "react";
import { Trans, useTranslation } from "react-i18next";
import ApareciumLabsFoxIcon from "../assets/images/logo-aparecium-fox-only.svg";
import { StylableComponentInterface, TestableComponentInterface } from "../models";

/**
 * Interface for the Hero component props.
 */
interface IHeroProps extends TestableComponentInterface, StylableComponentInterface {
}

/**
 * Hero component.
 *
 * @param {IHeroProps} props - Props injected to the component.
 * @return {React.ReactElement}
 */
export const Hero: FunctionComponent<IHeroProps> = (
    props: IHeroProps
): ReactElement => {

    const {
        className,
        [ "data-testid" ]: testId
    } = props;

    const { t } = useTranslation();

    const classes = cx(
        "hero",
        "relative flex flex-col-reverse px-4 py-16 mx-auto lg:block lg:flex-col lg:py-32 xl:py-48 md:px-8 " +
        "sm:max-w-xl md:max-w-full",
        className
    );

    return (
        <div data-testid={ testId } className={ classes }>
            <div
                className={
                    "hidden z-0 lg:flex justify-center h-full -mx-10 overflow-hidden lg:pt-24 lg:pb-16 lg:pr-8 " +
                    "xl:pr-0 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center"
                }
            >
                <img
                    src={ ApareciumLabsFoxIcon }
                    className="object-cover object-right w-full h-auto lg:w-auto lg:h-full"
                    alt=""
                />
            </div>
            <div className="relative flex justify-end max-w-xl mx-auto xl:pr-25 lg:max-w-screen-xl">
                <div className="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
                    <div className="max-w-xl mb-6">
                        <h2
                            className={
                                "max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-200 " +
                                "sm:text-4xl sm:leading-none"
                            }
                        >
                            <Trans
                                i18nKey={ "home:newsletter.title" }
                            >
                                Subscribe to our
                                <br className="hidden md:block"/>
                                <span className="inline-block text-deep-orange-accent-400">
                                    Newsletter
                                </span>
                            </Trans>
                        </h2>
                        <p className="text-base text-gray-400 md:text-lg">
                            <Trans
                                i18nKey="home:newsletter.description"
                            >
                                We <FontAwesomeIcon className="ml-2 mr-2 text-red-700" icon={ faHeart } /> open-source
                                and always trying our best to contribute back to the community. Please Subscribe
                                to our newsletter to stay up to date with more awesome
                                projects like this.
                            </Trans>
                        </p>
                    </div>
                    <form
                        className="form-signin"
                        action={
                            "https://apareciumlabs.us15.list-manage.com/subscribe/post?u=41620257667e0" +
                            "123ce58b4277&amp;id=c1c1df411f"
                        }
                        method="post"
                        id="mc-embedded-subscribe-form"
                        name="mc-embedded-subscribe-form"
                        target="_blank"
                        noValidate
                    >
                        <div id="mc_embed_signup_scroll">
                            <div className="flex flex-col md:flex-row">
                                <input
                                    type="email"
                                    name="EMAIL"
                                    id="mce-EMAIL"
                                    className={
                                        "flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-gray-800 " +
                                        "border border-orange-accent-400 rounded shadow-sm appearance-none " +
                                        "md:mb-0 focus:border-deep-orange-accent-700 focus:outline-none text-white " +
                                        "focus:shadow-outline"
                                    }
                                    placeholder={ t("home:newsletter.subscribe.emailInput.placeholder") }
                                    required
                                />
                            </div>
                            {
                                /*real people should not fill this in and expect good things -
                                do not remove this or risk form bot signups*/
                            }
                            <div
                                style={ {
                                    left: "-5000px",
                                    position: "absolute"
                                } }
                                aria-hidden="true"
                            >
                                <input
                                    type="text"
                                    name="b_41620257667e0123ce58b4277_c1c1df411f"
                                    tabIndex={ -1 }
                                    value=""
                                />
                            </div>
                        </div>
                        <div className="flex items-center mt-4">
                            <button
                                id="mc-embedded-subscribe"
                                name="subscribe"
                                type="submit"
                                className={
                                    "inline-flex items-center justify-center h-12 px-6 w-full font-medium " +
                                    "tracking-wide text-white transition duration-200 rounded shadow-md " +
                                    "bg-deep-orange-accent-400 hover:bg-deep-orange-accent-700 " +
                                    "focus:shadow-outline focus:outline-none"
                                }
                            >
                                { t("home:newsletter.subscribe.submitButton.label") }
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

/**
 * Default props for the component.
 * @type {{"data-testid": string}}
 */
Hero.defaultProps = {
    "data-testid": "hero"
};
