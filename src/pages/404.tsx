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

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, PageProps } from "gatsby";
import React, { FunctionComponent, ReactElement } from "react";
import PageNotFoundIllustration from "../assets/images/404.svg";
import { SEO } from "../components";
import { BaseLayout } from "../layouts";
import { TestableComponentInterface } from "../models";

/**
 * Interface for the 404 Page props.
 */
type INotFoundPageProps = TestableComponentInterface;

/**
 * Page for 404.
 *
 * @param {PageProps<INotFoundPageProps>} props - Props injected to the component.
 * @return {React.ReactElement}
 */
const NotFoundPage: FunctionComponent<PageProps<INotFoundPageProps>> = (
    props: PageProps<INotFoundPageProps>
): ReactElement => {

    const {
        data
    } = props;

    const {
        "data-testid": testId
    } = data;

    return (
        <BaseLayout data-testid={ testId } className="flex flex-col justify-center min-h-screen bg-gray-900">
            <SEO title="404: Not found"/>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-lg sm:text-center sm:mx-auto">
                    <img
                        src={ PageNotFoundIllustration }
                        alt="404 Illustration"
                    />
                    <div>
                        <p
                            className={
                                "inline-block px-3 py-px mb-4 text-xs font-semibold" +
                                "tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400"
                            }
                        >
                            404 ERROR
                        </p>
                    </div>
                    <hr className="my-8 border-gray-300"/>
                    <h2
                        className={
                            "mb-6 mt-3 font-sans text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl " +
                            "sm:leading-none"
                        }
                    >
                        <span className="relative inline-block">
                            <svg
                                viewBox="0 0 52 24"
                                fill="currentColor"
                                className={
                                    "absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 " +
                                    "lg:-ml-32 lg:-mt-10 sm:block"
                                }
                            >
                                <defs>
                                    <pattern
                                        id="6b0188f3-b7a1-4e9b-b95e-cad916bb3042"
                                        x="0"
                                        y="0"
                                        width=".135"
                                        height=".30"
                                    >
                                        <circle cx="1" cy="1" r=".7"/>
                                    </pattern>
                                </defs>
                                <rect
                                    fill="url(#6b0188f3-b7a1-4e9b-b95e-cad916bb3042)"
                                    width="52"
                                    height="24"
                                />
                            </svg>
                            <span className="relative">Oops, </span>
                        </span>{ " " }
                        this is embarrassing...
                    </h2>
                    <p className="text-base text-gray-700 md:text-lg">
                        We could not locate the page you are looking for.
                    </p>
                    <Link
                        className={
                            "flex flex-row items-center justify-center h-10 mt-2 px-5 text-deep-orange-accent-400 " +
                            "rounded-lg hover:text-deep-orange-accent-700"
                        }
                        to="/"
                    >
                        <FontAwesomeIcon icon={ faArrowLeft } className="mr-2" />
                        Go Back Home
                    </Link>
                </div>
            </div>
        </BaseLayout>
    );
};

/**
 * Default props for the component.
 * @type {{data: {"data-testid": string}}}
 */
NotFoundPage.defaultProps = {
    data: {
        "data-testid": "test"
    }
};

export default NotFoundPage;
