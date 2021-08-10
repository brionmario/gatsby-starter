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

import { IconDefinition, faBookmark, faChartBar } from "@fortawesome/free-regular-svg-icons";
import {
    faBars,
    faBorderNone,
    faCalendarAlt,
    faChevronDown,
    faHeadphonesAlt,
    faMousePointer,
    faPhone,
    faPlayCircle,
    faShieldVirus,
    faSyncAlt, faTimes
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Popover, Transition } from "@headlessui/react";
import cx from "classnames";
import React, { Fragment, FunctionComponent, ReactElement } from "react";
import ApareciumLogoText from "../assets/images/logo-aparecium-text-only.svg";
import { TestableComponentInterface } from "../models";
import { Link } from "gatsby"

/**
 * Interface for the Header component props.
 */
interface IHeaderProps extends TestableComponentInterface {
    /**
     * Title of the Site.
     */
    siteTitle?: string;
}

const solutions: ({ icon: IconDefinition; name: string; description: string; href: string })[] = [
    {
        description: "Get a better understanding of where your traffic is coming from.",
        href: "#",
        icon: faChartBar,
        name: "Analytics"
    },
    {
        description: "Speak directly to your customers in a more meaningful way.",
        href: "#",
        icon: faMousePointer,
        name: "Engagement"
    },
    {
        description: "Your customers' data will be safe and secure.",
        href: "#",
        icon: faShieldVirus,
        name: "Security"
    },
    {
        description: "Connect with third-party tools that you're already using.",
        href: "#",
        icon: faBorderNone,
        name: "Integrations"
    },
    {
        description: "Build strategic funnels that will drive your customers to convert",
        href: "#",
        icon: faSyncAlt,
        name: "Automations"
    }
];

const callsToAction: ({ icon: IconDefinition; name: string; href: string })[] = [
    {
        href: "#",
        icon: faPlayCircle,
        name: "Watch Demo"
    },
    {
        href: "#",
        icon: faPhone,
        name: "Contact Sales"
    }
];

const resources: ({ icon: IconDefinition; name: string; description: string; href: string })[] = [
    {
        description: "Get all of your questions answered in our forums or contact support.",
        href: "#",
        icon: faHeadphonesAlt,
        name: "Help Center"
    },
    {
        description: "Learn how to maximize our platform to get the most out of it.",
        href: "#",
        icon: faBookmark,
        name: "Guides"
    },
    {
        description: "See what meet-ups and other events we might be planning near you.",
        href: "#",
        icon: faCalendarAlt,
        name: "Events"
    },
    {
        description: "Understand how we take your privacy seriously.",
        href: "#",
        icon: faShieldVirus,
        name: "Security"
    }
];

const recentPosts: ({ name: string; href: string; id: number })[] = [
    {
        href: "#",
        id: 1,
        name: "Boost your conversion rate"
    },
    {
        href: "#",
        id: 2,
        name: "How to use search engine optimization to drive traffic to your site"
    },
    {
        href: "#",
        id: 3,
        name: "Improve your customer experience"
    }
];

/* eslint-disable jsx-a11y/anchor-is-valid */

/**
 * Header Component.
 *
 * @param {IHeaderProps} props - Props injected to the component.
 * @return {React.ReactElement}
 */
export const Header: FunctionComponent<IHeaderProps> = (
    props: IHeaderProps
): ReactElement => {

    const {
        [ "data-testid" ]: testId
    } = props;

    return (
        <Popover data-testid={ testId } className="relative">
            { ({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div
                            className={
                                "flex justify-between items-center py-6 " +
                                "md:justify-start md:space-x-10"
                            }
                        >
                            <div className="flex justify-start lg:w-0 lg:flex-1">
                                <a href="#">
                                    <span className="sr-only">Workflow</span>
                                    <img
                                        className="h-8 w-auto sm:h-10"
                                        src={ ApareciumLogoText }
                                        alt=""
                                    />
                                </a>
                            </div>
                            <div className="-mr-2 -my-2 md:hidden">
                                <Popover.Button
                                    className={
                                        "rounded-md p-2 inline-flex items-center justify-center " +
                                        "text-gray-400 hover:text-gray-500 hover:bg-gray-800 focus:outline-none " +
                                        "focus:ring-2 focus:ring-inset focus:ring-deep-orange-accent-700"
                                    }
                                >
                                    <span className="sr-only">Open menu</span>
                                    <FontAwesomeIcon
                                        className="h-6 w-6"
                                        size="2x"
                                        aria-hidden="true"
                                        icon={ faBars }
                                    />
                                </Popover.Button>
                            </div>
                            <Popover.Group as="nav" className="hidden md:flex space-x-10">
                                <Link
                                    to="/"
                                    className="text-base font-medium text-gray-500 hover:text-gray-100"
                                >
                                    Home
                                </Link>
                                <Popover className="relative">
                                    { ({ open }) => (
                                        <>
                                            <Popover.Button
                                                className={ cx(
                                                    open ? "text-gray-100" : "text-gray-500",
                                                    "group rounded-md inline-flex items-center text-base font-medium " +
                                                    "hover:text-gray-100 focus:outline-none"
                                                ) }
                                            >
                                                <span>Solutions</span>
                                                <FontAwesomeIcon
                                                    className={ cx(
                                                        open ? "text-gray-600" : "text-gray-400",
                                                        "ml-2 h-5 w-5 group-hover:text-gray-500"
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
                                                        "absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md " +
                                                        "sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
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
                                                            { solutions.map((item) => (
                                                                <a
                                                                    key={ item.name }
                                                                    href={ item.href }
                                                                    className={
                                                                        "-m-3 p-3 flex items-start rounded-lg " +
                                                                        "hover:bg-gray-50"
                                                                    }
                                                                >
                                                                    <FontAwesomeIcon
                                                                        aria-hidden="true"
                                                                        className={
                                                                            "flex-shrink-0 h-6 w-6 text-deep-orange-" +
                                                                            "accent-400"
                                                                        }
                                                                        size="lg"
                                                                        icon={ item.icon }
                                                                    />
                                                                    <div className="ml-4">
                                                                        <p
                                                                            className={
                                                                                "text-base font-medium text-gray-900"
                                                                            }
                                                                        >
                                                                            { item.name }
                                                                        </p>
                                                                        <p
                                                                            className={ "mt-1 text-sm text-gray-500" }
                                                                        >
                                                                            { item.description }
                                                                        </p>
                                                                    </div>
                                                                </a>
                                                            )) }
                                                        </div>
                                                        <div
                                                            className={
                                                                "px-5 py-5 bg-gray-50 space-y-6 sm:flex " +
                                                                "sm:space-y-0 sm:space-x-10 sm:px-8"
                                                            }
                                                        >
                                                            { callsToAction.map((item) => (
                                                                <div key={ item.name } className="flow-root">
                                                                    <a
                                                                        href={ item.href }
                                                                        className={
                                                                            "-m-3 p-3 flex items-center rounded-md " +
                                                                            "text-base font-medium text-gray-900 " +
                                                                            "hover:bg-gray-100"
                                                                        }
                                                                    >
                                                                        <FontAwesomeIcon
                                                                            aria-hidden="true"
                                                                            className={
                                                                                "flex-shrink-0 h-6 w-6 text-gray-400"
                                                                            }
                                                                            size="lg"
                                                                            icon={ item.icon }
                                                                        />
                                                                        <span className="ml-3">{ item.name }</span>
                                                                    </a>
                                                                </div>
                                                            )) }
                                                        </div>
                                                    </div>
                                                </Popover.Panel>
                                            </Transition>
                                        </>
                                    ) }
                                </Popover>
                                <Link
                                    to="/pricing"
                                    className="text-base font-medium text-gray-500 hover:text-gray-100"
                                >
                                    Pricing
                                </Link>
                                <a
                                    href="#"
                                    className="text-base font-medium text-gray-500 hover:text-gray-100"
                                >
                                    Docs
                                </a>

                                <Popover className="relative">
                                    { ({ open }) => (
                                        <>
                                            <Popover.Button
                                                className={ cx(
                                                    open ? "text-gray-100" : "text-gray-500",
                                                    "group rounded-md inline-flex items-center text-base " +
                                                    "font-medium hover:text-gray-100 focus:outline-none"
                                                ) }
                                            >
                                                <span>More</span>
                                                <FontAwesomeIcon
                                                    aria-hidden="true"
                                                    className={ cx(
                                                        open ? "text-gray-600" : "text-gray-400",
                                                        "ml-2 h-5 w-5 group-hover:text-gray-500"
                                                    ) }
                                                    size="xs"
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
                                                        "px-2 w-screen max-w-md sm:px-0"
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
                                                            { resources.map((item) => (
                                                                <a
                                                                    key={ item.name }
                                                                    href={ item.href }
                                                                    className={
                                                                        "-m-3 p-3 flex items-start rounded-lg " +
                                                                        "hover:bg-gray-50"
                                                                    }
                                                                >
                                                                    <FontAwesomeIcon
                                                                        aria-hidden="true"
                                                                        className={
                                                                            "flex-shrink-0 h-6 w-6 " +
                                                                            "text-deep-orange-accent-400"
                                                                        }
                                                                        size="lg"
                                                                        icon={ item.icon }
                                                                    />
                                                                    <div className="ml-4">
                                                                        <p
                                                                            className={
                                                                                "text-base font-medium text-gray-900"
                                                                            }
                                                                        >
                                                                            { item.name }
                                                                        </p>
                                                                        <p className="mt-1 text-sm text-gray-500">
                                                                            { item.description }
                                                                        </p>
                                                                    </div>
                                                                </a>
                                                            )) }
                                                        </div>
                                                        <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                                                            <div>
                                                                <h3
                                                                    className={
                                                                        "text-sm tracking-wide font-medium " +
                                                                        "text-gray-500 uppercase"
                                                                    }
                                                                >
                                                                    Recent Posts
                                                                </h3>
                                                                <ul className="mt-4 space-y-4">
                                                                    { recentPosts.map((post) => (
                                                                        <li
                                                                            key={ post.id }
                                                                            className="text-base truncate"
                                                                        >
                                                                            <a
                                                                                href={ post.href }
                                                                                className={
                                                                                    "font-medium text-gray-900 " +
                                                                                    "hover:text-gray-700"
                                                                                }
                                                                            >
                                                                                { post.name }
                                                                            </a>
                                                                        </li>
                                                                    )) }
                                                                </ul>
                                                            </div>
                                                            <div className="mt-5 text-sm">
                                                                <a
                                                                    href="#"
                                                                    className={
                                                                        "font-medium text-deep-orange-accent-400 " +
                                                                        "hover:text-deep-orange-accent-700"
                                                                    }
                                                                >
                                                                    { " " }
                                                                    View all posts{ " " }
                                                                    <span aria-hidden="true">&rarr;</span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Popover.Panel>
                                            </Transition>
                                        </>
                                    ) }
                                </Popover>
                            </Popover.Group>
                            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                                <a
                                    href="#"
                                    className={
                                        "whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-100"
                                    }
                                >
                                    Sign in
                                </a>
                                <a
                                    href="#"
                                    className={
                                        "ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 " +
                                        "py-2 border border-transparent rounded-md shadow-sm text-base font-medium " +
                                        "text-white bg-deep-orange-accent-400 hover:bg-deep-orange-accent-700"
                                    }
                                >
                                    Sign up
                                </a>
                            </div>
                        </div>
                    </div>

                    <Transition
                        show={ open }
                        as={ Fragment }
                        enter="duration-200 ease-out"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="duration-100 ease-in"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Popover.Panel
                            focus
                            static
                            className={
                                "z-10 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                            }
                        >
                            <div
                                className={
                                    "rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 " +
                                    "divide-gray-50"
                                }
                            >
                                <div className="pt-5 pb-6 px-5">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <img
                                                className="h-8 w-auto"
                                                src={ ApareciumLogoText }
                                                alt="Workflow"
                                            />
                                        </div>
                                        <div className="-mr-2">
                                            <Popover.Button
                                                className={
                                                    "bg-white rounded-md p-2 inline-flex items-center " +
                                                    "justify-center text-gray-400 hover:text-gray-500 " +
                                                    "hover:bg-gray-100 focus:outline-none focus:ring-2 " +
                                                    "focus:ring-inset focus:deep-orange-accent-700"
                                                }
                                            >
                                                <span className="sr-only">Close menu</span>
                                                <FontAwesomeIcon
                                                    className="h-6 w-6"
                                                    size="2x"
                                                    aria-hidden="true"
                                                    icon={ faTimes }
                                                />
                                            </Popover.Button>
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <nav className="grid gap-y-8">
                                            { solutions.map((item) => (
                                                <a
                                                    key={ item.name }
                                                    href={ item.href }
                                                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                                                >
                                                    <FontAwesomeIcon
                                                        aria-hidden="true"
                                                        className={
                                                            "flex-shrink-0 h-6 w-6 text-deep-orange-accent-400"
                                                        }
                                                        size="lg"
                                                        icon={ item.icon }
                                                    />
                                                    <span className="ml-3 text-base font-medium text-gray-900">
                                                        { item.name }
                                                    </span>
                                                </a>
                                            )) }
                                        </nav>
                                    </div>
                                </div>
                                <div className="py-6 px-5 space-y-6">
                                    <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                        <Link
                                            to="/"
                                            className="text-base font-medium text-gray-500 hover:text-gray-100"
                                        >
                                            Home
                                        </Link>
                                        <Link
                                            to="/pricing"
                                            className="text-base font-medium text-gray-900 hover:text-gray-700"
                                        >
                                            Pricing
                                        </Link>

                                        <a
                                            href="#"
                                            className="text-base font-medium text-gray-900 hover:text-gray-700"
                                        >
                                            Docs
                                        </a>
                                        { resources.map((item) => (
                                            <a
                                                key={ item.name }
                                                href={ item.href }
                                                className="text-base font-medium text-gray-900 hover:text-gray-700"
                                            >
                                                { item.name }
                                            </a>
                                        )) }
                                    </div>
                                    <div>
                                        <a
                                            href="#"
                                            className={
                                                "w-full flex items-center justify-center px-4 py-2 border " +
                                                "border-transparent rounded-md shadow-sm text-base font-medium " +
                                                "text-white bg-deep-orange-accent-400 hover:bg-deep-orange-accent-700"
                                            }
                                        >
                                            Sign up
                                        </a>
                                        <p className="mt-6 text-center text-base font-medium text-gray-500">
                                            Existing customer?{ " " }
                                            <a
                                                href="#"
                                                className={
                                                    "text-deep-orange-accent-400 hover:text-deep-orange-accent-700"
                                                }
                                            >
                                                Sign in
                                            </a>
                                        </p>
                                    </div>
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
Header.defaultProps = {
    "data-testid": "header"
};
