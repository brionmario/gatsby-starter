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

module.exports = {
    globals: {
        __PATH_PREFIX__: ""
    },
    moduleNameMapper: {
        ".+\\.(css|styl|less|sass|scss)$": "identity-obj-proxy",
        ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
            "<rootDir>/tests/__mocks__/file-mock.js"
    },
    setupFiles: [
        "<rootDir>/tests/loadershim.js"
    ],
    testEnvironment: "jsdom",
    testMatch: [
        "<rootDir>/src/**/__tests__/**/?(*.)+(test).[jt]s?(x)"
    ],
    testPathIgnorePatterns: [
        "node_modules",
        "\\.cache",
        "<rootDir>.*/public"
    ],
    testURL: "http://localhost:8000",
    transform: {
        "^.+\\.[jt]sx?$": "<rootDir>/tests/jest-preprocess.js"
    },
    transformIgnorePatterns: [
        "node_modules/(?!(gatsby)/)"
    ]
};
