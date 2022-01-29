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
    content: [
        // Paths to all of your pages and components so Tailwind can
        // tree-shake unused styles in production builds:
        "./src/**/*.{js,jsx,ts,tsx}"
    ],
    plugins: [],
    theme: {
        extend: {
            colors: {
                "deep-orange": {
                    50: "#fbe9e7",
                    100: "#ffccbc",
                    200: "#ffab91",
                    300: "#ff8a65",
                    400: "#ff7043",
                    500: "#ff5722",
                    600: "#f4511e",
                    700: "#e64a19",
                    800: "#d84315",
                    900: "#bf360c",
                    "accent-100": "#ff9e80",
                    "accent-200": "#ff6e40",
                    "accent-400": "#ff3d00",
                    "accent-700": "#dd2c00"
                }
            }
        }
    }
};
