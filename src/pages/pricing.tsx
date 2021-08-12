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

import { PageProps } from "gatsby";
import React, { FunctionComponent, ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { SEO } from "../components";
import { BaseLayout, SiteLayout } from "../layouts";
import { TestableComponentInterface } from "../models";

/**
 * Interface for the Pricing Page props.
 */
type IPricingPageProps = TestableComponentInterface;

/**
 * Pricing page of the site.
 *
 * @param {PageProps<IPricingPageProps>} props - Props injected to the component.
 * @return {React.ReactElement}
 */
const PricingPage: FunctionComponent<PageProps<IPricingPageProps>> = (
    props: PageProps<IPricingPageProps>
): ReactElement => {

    const {
        data
    } = props;

    const {
        "data-testid": testId
    } = data;

    const { t } = useTranslation();

    return (
        <BaseLayout data-testid={ `${ testId }-base-layout` }>
            <SiteLayout data-testid={ `${ testId }-site-layout` }>
                <SEO title="Pricing" />
                <div
                    className={
                        "px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
                    }
                >
                    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                        <div>
                            <p
                                className={
                                    "inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider " +
                                    "text-teal-900 uppercase rounded-full bg-teal-accent-400"
                                }
                            >
                                Our Pricing
                            </p>
                        </div>
                        <h2
                            className={
                                "max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight " +
                                "text-gray-300 sm:text-4xl md:mx-auto"
                            }
                        >
                            <span className="relative inline-block">
                                <svg
                                    viewBox="0 0 52 24"
                                    fill="currentColor"
                                    className={
                                        "absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 " +
                                            "text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                                    }
                                >
                                    <defs>
                                        <pattern
                                            id="7e5e8ff8-1960-4094-a63a-2a0c0f922d69"
                                            x="0"
                                            y="0"
                                            width=".135"
                                            height=".30"
                                        >
                                            <circle cx="1" cy="1" r=".7" />
                                        </pattern>
                                    </defs>
                                    <rect
                                        fill="url(#7e5e8ff8-1960-4094-a63a-2a0c0f922d69)"
                                        width="52"
                                        height="24"
                                    />
                                </svg>
                            </span>
                            { t("pricing:heading.title") }
                        </h2>
                    </div>
                    <div
                        className={
                            "grid max-w-md gap-10 row-gap-5 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 " +
                            "xl:max-w-screen-lg sm:mx-auto"
                        }
                    >
                        <div
                            className={
                                "flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border " +
                                "rounded shadow-sm sm:items-center hover:shadow"
                            }
                        >
                            <div className="text-center">
                                <div className="text-lg font-semibold">
                                    { t("pricing:heading.packages.start.heading") }
                                </div>
                                <div className="flex items-center justify-center mt-2">
                                    <div className="mr-1 text-5xl font-bold">
                                        { t("pricing:heading.packages.start.price") }
                                    </div>
                                </div>
                                <div className="mt-2 space-y-3">
                                    <div className="text-gray-700">
                                        { t("pricing:heading.packages.start.deploys") }
                                    </div>
                                    <div className="text-gray-700">
                                        { t("pricing:heading.packages.start.storage") }
                                    </div>
                                    <div className="text-gray-700">
                                        { t("pricing:heading.packages.start.domain") }
                                    </div>
                                </div>
                            </div>
                            <div>
                                <a
                                    href="/"
                                    className={
                                        "inline-flex items-center justify-center w-full h-12 px-6 mt-6 " +
                                        "font-medium tracking-wide text-white transition duration-200 " +
                                        "bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline " +
                                        "focus:outline-none"
                                    }
                                >
                                    { t("pricing:heading.packages.start.action") }
                                </a>
                            </div>
                        </div>
                        <div
                            className={
                                "relative flex flex-col justify-between p-8 transition-shadow duration-300 " +
                                "bg-white border rounded shadow-sm sm:items-center hover:shadow " +
                                "border-deep-purple-accent-400"
                            }
                        >
                            <div className="absolute inset-x-0 top-0 flex justify-center -mt-3">
                                <div
                                    className={
                                        "inline-block px-3 py-1 text-xs font-medium tracking-wider text-white " +
                                        "uppercase rounded bg-deep-purple-accent-400"
                                    }
                                >
                                    { t("pricing:heading.mostPopularPackageLabel") }
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-lg font-semibold">
                                    { t("pricing:heading.packages.pro.action") }
                                </div>
                                <div className="flex items-center justify-center mt-2">
                                    <div className="mr-1 text-5xl font-bold">$38</div>
                                    <div className="text-gray-700">/ mo</div>
                                </div>
                                <div className="mt-2 space-y-3">
                                    <div className="text-gray-700">
                                        { t("pricing:heading.packages.pro.deploys") }
                                    </div>
                                    <div className="text-gray-700">
                                        { t("pricing:heading.packages.pro.storage") }
                                    </div>
                                    <div className="text-gray-700">
                                        { t("pricing:heading.packages.pro.domains") }
                                    </div>
                                </div>
                            </div>
                            <div>
                                <a
                                    href="/"
                                    className={
                                        "inline-flex items-center justify-center w-full h-12 px-6 mt-6 " +
                                        "font-medium tracking-wide text-white transition duration-200 " +
                                        "rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 " +
                                        "focus:shadow-outline focus:outline-none"
                                    }
                                >
                                    { t("pricing:heading.packages.pro.action") }
                                </a>
                            </div>
                        </div>
                        <div
                            className={
                                "flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border " +
                                "rounded shadow-sm sm:items-center hover:shadow"
                            }
                        >
                            <div className="text-center">
                                <div className="text-lg font-semibold">
                                    { t("pricing:heading.packages.business.heading") }
                                </div>
                                <div className="flex items-center justify-center mt-2">
                                    <div className="mr-1 text-5xl font-bold">$78</div>
                                    <div className="text-gray-700">/ mo</div>
                                </div>
                                <div className="mt-2 space-y-3">
                                    <div className="text-gray-700">
                                        { t("pricing:heading.packages.business.deploys") }
                                    </div>
                                    <div className="text-gray-700">
                                        { t("pricing:heading.packages.business.storage") }
                                    </div>
                                    <div className="text-gray-700">
                                        { t("pricing:heading.packages.business.domains") }
                                    </div>
                                </div>
                            </div>
                            <div>
                                <a
                                    href="/"
                                    className={
                                        "inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium " +
                                        "tracking-wide text-white transition duration-200 bg-gray-800 rounded " +
                                        "shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
                                    }
                                >
                                    { t("pricing:heading.packages.business.action") }
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </SiteLayout>
        </BaseLayout>
    );
};

/**
 * Default props for the component.
 * @type {{data: {"data-testid": string}}}
 */
PricingPage.defaultProps = {
    data: {
        "data-testid": "pricing-page"
    }
};

export default PricingPage;
