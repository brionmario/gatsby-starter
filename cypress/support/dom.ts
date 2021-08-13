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
 * Custom command to select DOM element by data-testid attribute.
 *
 * @example
 *    cy.dataTestId("<RAW_TEST_ID>") -> [data-testid=<RAW_TEST_ID>]
 *
 * @param {string} value - Attribute value.
 * @param {string} options - Attribute value.
 * @returns {Cypress.CanReturnChainable}
 */
Cypress.Commands.add("dataTestId", (value: string): Cypress.CanReturnChainable => {

    return cy.get(`[data-testid=${ value }]`);
});
