import tinycolor from "tinycolor2";

const colorPalette = {
    bg: '#191919',
    accent: '#ffea77',
    font: '#e6eaf0',
}

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        theme: {
            fontSize: {
                sm: '0.875rem',
                base: '1.125rem',
                lg: '1.25rem',
                xl: '1.5rem',
            },
        },
        extend: {
            colors: {
                background: {
                    100: tinycolor(colorPalette.bg).brighten(6).toString(),
                    200: tinycolor(colorPalette.bg).brighten(4).toString(),
                    300: tinycolor(colorPalette.bg).brighten(2).toString(),
                    DEFAULT: colorPalette.bg,
                    400: tinycolor(colorPalette.bg).darken(2).toString(),
                    500: tinycolor(colorPalette.bg).darken(4).toString(),
                    600: tinycolor(colorPalette.bg).darken(6).toString(),
                },
                accent: {
                    light: tinycolor(colorPalette.accent).brighten(10).desaturate(10).toString(),
                    DEFAULT: colorPalette.accent,
                    dark: tinycolor(colorPalette.accent).darken(10).saturate(10).toString(),
                },
                font: {
                    light: tinycolor(colorPalette.font).brighten(10).toString(),
                    DEFAULT: colorPalette.font,
                    dark: tinycolor(colorPalette.font).darken(10).toString(),
                },
            },
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
                mono: ['Source Code Pro', 'monospace'],
            },
            maxWidth: {
                'site': '920px',
            },
            height: {
                'hero': '620px'
            }
        },
    },
    plugins: [],
}

