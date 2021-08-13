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
