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

/**
 * Interface for Gatsby i18n language config.
 *
 * @remarks Gatsby Theme i18n does not currently have types for config. Once they support,
 * this interface can be removed.
 * @see @{link https://github.com/gatsbyjs/themes/blob/v3/packages/gatsby-theme-i18n/index.d.ts#L36 }
 */
export interface IGatsbyI18LanguageConfig {

    /**
     * The ISO 3166-1 alpha-2 code which will be used for the path prefix,
     * as a unique identifier (e.g. for the defaultLang option)
     */
    code: string;
    /**
     * The IETF language tag for the <html lang="xx-XX" /> attribute. Also used for og tags
     */
    hrefLang: string;
    /**
     * The english name of the locale
     */
    name: string;
    /**
     * The local name of the locale
     */
    localName: string;
    /**
     * The direction of language (e.g. "ltr", "rtl")
     */
    langDir: "ltr" | "rtl";
    /**
     * The tokens that Moment.js accepts for date formatting. This can be used for dates on GraphQL queries
     */
    dateFormat: string;
}
