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
import { LocalizedLink, useLocalization } from "gatsby-theme-i18n";
import React, { Fragment, FunctionComponent, ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./language-switcher";
import ApareciumLogoText from "../assets/images/logo-aparecium-text-only.svg";
import { TestableComponentInterface } from "../models";

/**
 * Interface for the Header component props.
 */
interface IHeaderProps extends TestableComponentInterface {
    /**
     * Title of the Site.
     */
    siteTitle?: string;
}

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

    const { locale } = useLocalization();
    const { t } = useTranslation();

    const solutions: ({ icon: IconDefinition; name: string; description: string; href: string })[] = [
        {
            description: t("common:header.links.solutions.analytics.description"),
            href: "#",
            icon: faChartBar,
            name: t("common:header.links.solutions.analytics.title")
        },
        {
            description: t("common:header.links.solutions.engagement.description"),
            href: "#",
            icon: faMousePointer,
            name: t("common:header.links.solutions.engagement.title")
        },
        {
            description: t("common:header.links.solutions.security.description"),
            href: "#",
            icon: faShieldVirus,
            name: t("common:header.links.solutions.security.title")
        },
        {
            description: t("common:header.links.solutions.integrations.description"),
            href: "#",
            icon: faBorderNone,
            name: t("common:header.links.solutions.integrations.title")
        },
        {
            description: t("common:header.links.solutions.automations.description"),
            href: "#",
            icon: faSyncAlt,
            name: t("common:header.links.solutions.automations.title")
        }
    ];

    const callsToAction: ({ icon: IconDefinition; name: string; href: string })[] = [
        {
            href: "#",
            icon: faPlayCircle,
            name: t("common:header.links.solutions.callToAction.watchDemo")
        },
        {
            href: "#",
            icon: faPhone,
            name: t("common:header.links.solutions.callToAction.contactSales")
        }
    ];

    const resources: ({ icon: IconDefinition; name: string; description: string; href: string })[] = [
        {
            description: t("common:header.links.more.helpCenter.description"),
            href: "#",
            icon: faHeadphonesAlt,
            name: t("common:header.links.more.helpCenter.title")
        },
        {
            description: t("common:header.links.more.guides.description"),
            href: "#",
            icon: faBookmark,
            name: t("common:header.links.more.guides.title")
        },
        {
            description: t("common:header.links.more.events.description"),
            href: "#",
            icon: faCalendarAlt,
            name: t("common:header.links.more.events.title")
        },
        {
            description: t("common:header.links.more.security.description"),
            href: "#",
            icon: faShieldVirus,
            name: t("common:header.links.more.security.title")
        }
    ];

    const recentPosts: ({ name: string; href: string; id: number })[] = [
        {
            href: "#",
            id: 1,
            name: t("common:header.links.more.recentPosts.links.boost")
        },
        {
            href: "#",
            id: 2,
            name: t("common:header.links.more.recentPosts.links.seo")
        },
        {
            href: "#",
            id: 3,
            name: t("common:header.links.more.recentPosts.links.csa")
        }
    ];

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
                                <LocalizedLink
                                    language={ locale }
                                    to="/"
                                    className="text-base font-medium text-gray-500 hover:text-gray-100"
                                >
                                    { t("dictionary:homePage") }
                                </LocalizedLink>
                                <LocalizedLink
                                    language={ locale }
                                    to="/blog"
                                    className="text-base font-medium text-gray-500 hover:text-gray-100"
                                >
                                    Blog
                                </LocalizedLink>
                                <LocalizedLink
                                    language={ locale }
                                    to="/404"
                                    className="text-base font-medium text-gray-500 hover:text-gray-100"
                                >
                                    404
                                </LocalizedLink>
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
                                                <span> { t("dictionary:solutions") }</span>
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
                                                <span>{ t("dictionary:more") }</span>
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
                                                                    {
                                                                        t("common:header.links.more.recentPosts" +
                                                                            ".heading")
                                                                    }
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
                                                                    {
                                                                        t("common:header.links.more.recentPosts" +
                                                                            ".action")
                                                                    }
                                                                    { " " }
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
                                    className={
                                        "whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-100"
                                    }
                                >
                                    <LanguageSwitcher data-testid="language-switcher" />
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
                                    <div className="grid grid-cols-1 gap-y-4">
                                        <LocalizedLink
                                            language={ locale }
                                            to="/"
                                            className="text-base font-medium text-gray-900 hover:text-gray-100"
                                        >
                                            { t("dictionary:home") }
                                        </LocalizedLink>
                                        <LocalizedLink
                                            language={ locale }
                                            to="/404"
                                            className="text-base font-medium text-gray-900 hover:text-gray-700"
                                        >
                                            404
                                        </LocalizedLink>
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
