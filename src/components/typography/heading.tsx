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
import React, { FunctionComponent, PropsWithChildren, ReactElement } from "react";
import { TestableComponentInterface } from "../../models";

/**
 * Interface for the Header component props.
 */
interface IHeadingProps { }

/**
 * Interface for the Header component props.
 */
interface IHeadingSubComponentProps extends TestableComponentInterface { }

/**
 * Interface for the Data Table sub components.
 */
interface IHeadingSubComponents {
    H1: typeof H1;
    H2: typeof H2;
    H3: typeof H3;
    H4: typeof H4;
    H5: typeof H5;
    H6: typeof H6;
}

/* eslint-disable jsx-a11y/anchor-is-valid */
/**
 * Header Component.
 *
 * @return {React.ReactElement}
 */
export const Heading: FunctionComponent<IHeadingProps> & IHeadingSubComponents = (): ReactElement => {

    return <></>;
};

/**
 * H1 Component.
 *
 * @param {React.PropsWithChildren<IHeadingSubComponentProps>} props - Props injected to the component.
 * @return {React.ReactElement}
 */
const H1: FunctionComponent<PropsWithChildren<IHeadingSubComponentProps>> = (
    props: PropsWithChildren<IHeadingSubComponentProps>
): ReactElement => {

    const {
        children,
        "data-testid": testId
    } = props;

    const h1Classes = cx(
        "h1",
        "text-6xl mb-6 text-white leading-8 font-extrabold tracking-normal sm:text-5xl"
    );

    return (
        <h1
            data-testid={ testId }
            className={ h1Classes }
        >
            { children }
        </h1>
    );
};

/**
 * H2 Component.
 *
 * @param {React.PropsWithChildren<IHeadingSubComponentProps>} props - Props injected to the component.
 * @return {React.ReactElement}
 */
const H2: FunctionComponent<PropsWithChildren<IHeadingSubComponentProps>> = (
    props: PropsWithChildren<IHeadingSubComponentProps>
): ReactElement => {

    const {
        children,
        "data-testid": testId
    } = props;

    const h2Classes = cx(
        "h2",
        "text-5xl mb-5 text-white leading-7 font-extrabold tracking-normal sm:text-4xl"
    );

    return (
        <h2
            data-testid={ testId }
            className={ h2Classes }
        >
            { children }
        </h2>
    );
};

/**
 * H3 Component.
 *
 * @param {React.PropsWithChildren<IHeadingSubComponentProps>} props - Props injected to the component.
 * @return {React.ReactElement}
 */
const H3: FunctionComponent<PropsWithChildren<IHeadingSubComponentProps>> = (
    props: PropsWithChildren<IHeadingSubComponentProps>
): ReactElement => {

    const {
        children,
        "data-testid": testId
    } = props;

    const h3Classes = cx(
        "h3",
        "text-4xl mb-4 text-white leading-6 font-extrabold tracking-normal sm:text-3xl"
    );

    return (
        <h3
            data-testid={ testId }
            className={ h3Classes }
        >
            { children }
        </h3>
    );
};

/**
 * H4 Component.
 *
 * @param {React.PropsWithChildren<IHeadingSubComponentProps>} props - Props injected to the component.
 * @return {React.ReactElement}
 */
const H4: FunctionComponent<PropsWithChildren<IHeadingSubComponentProps>> = (
    props: PropsWithChildren<IHeadingSubComponentProps>
): ReactElement => {

    const {
        children,
        "data-testid": testId
    } = props;

    const h4Classes = cx(
        "h4",
        "text-3xl mb-4 text-white leading-5 font-extrabold tracking-normal sm:text-2xl"
    );

    return (
        <h3
            data-testid={ testId }
            className={ h4Classes }
        >
            { children }
        </h3>
    );
};

/**
 * H5 Component.
 *
 * @param {React.PropsWithChildren<IHeadingSubComponentProps>} props - Props injected to the component.
 * @return {React.ReactElement}
 */
const H5: FunctionComponent<PropsWithChildren<IHeadingSubComponentProps>> = (
    props: PropsWithChildren<IHeadingSubComponentProps>
): ReactElement => {

    const {
        children,
        "data-testid": testId
    } = props;

    const h5Classes = cx(
        "h5",
        "text-2xl mb-3 text-white leading-4 font-extrabold tracking-normal sm:text-xl"
    );

    return (
        <h5
            data-testid={ testId }
            className={ h5Classes }
        >
            { children }
        </h5>
    );
};

/**
 * H6 Component.
 *
 * @param {React.PropsWithChildren<IHeadingSubComponentProps>} props - Props injected to the component.
 * @return {React.ReactElement}
 */
const H6: FunctionComponent<PropsWithChildren<IHeadingSubComponentProps>> = (
    props: PropsWithChildren<IHeadingSubComponentProps>
): ReactElement => {

    const {
        children,
        "data-testid": testId
    } = props;

    const h6Classes = cx(
        "h6",
        "text-xl mb-4 text-white leading-3 font-extrabold tracking-normal sm:text-lg"
    );

    return (
        <h6
            data-testid={ testId }
            className={ h6Classes }
        >
            { children }
        </h6>
    );
};

Heading.H1 = H1;
Heading.H2 = H2;
Heading.H3 = H3;
Heading.H4 = H4;
Heading.H5 = H5;
Heading.H6 = H6;
