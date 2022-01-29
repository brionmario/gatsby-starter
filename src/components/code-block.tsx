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
import Highlight, { defaultProps } from "prism-react-renderer";
import prismTheme from "prism-react-renderer/themes/nightOwl";
import React, { FunctionComponent, ReactElement } from "react";
import { TestableComponentInterface } from "../models";

/**
 * Interface for the Code Block component props.
 */
interface ICodeBlockProps extends TestableComponentInterface {
    code: string;
}

/**
 * Code Block Component.
 *
 * @param {ICodeBlockProps} props - Props injected to the component.
 * @return {React.ReactElement}
 */
export const CodeBlock: FunctionComponent<ICodeBlockProps> = (
    props: ICodeBlockProps
): ReactElement => {

    const {
        code,
        "data-testid": testId
    } = props;

    const classes = cx(
        "code-block"
    );

    return (
        <div className={ classes } data-testid={ testId }>
            <Highlight { ...defaultProps } theme={ prismTheme } code={ code } language="javascript">
                { ({ className, style, tokens, getLineProps, getTokenProps }) => {
                    return (
                        <pre className={ cx("pre", className) } style={ style }>
                            {
                                tokens.map((line, i) => {

                                    if (tokens.length === i + 1 && line[0].empty) {
                                        return null;
                                    }

                                    const {
                                        className: lineClassName,
                                        ...restLineProps
                                    } = getLineProps({ key: i, line  });

                                    return (
                                        <div
                                            key={ i }
                                            className={ cx("line", lineClassName) }
                                            { ...restLineProps }
                                        >
                                            <span className="line-no">{ i + 1 }</span>
                                            <span className="line-content">
                                                {
                                                    line.map((token, key) => (
                                                        <span key={ key } { ...getTokenProps({ key, token }) } />
                                                    ))
                                                }
                                            </span>
                                        </div>
                                    );
                                })
                            }
                        </pre>
                    );
                } }
            </Highlight>
        </div>
    );
};

/**
 * Default props for the component.
 * @type {{"data-testid": string}}
 */
CodeBlock.defaultProps = {
    "data-testid": "code-block"
};
