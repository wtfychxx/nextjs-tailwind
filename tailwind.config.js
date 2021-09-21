const colors = require('tailwindcss/colors')

module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'true-gray': colors.trueGraym,
                'cyan': colors.cyan,
                'teal': colors.teal,
                'rose': colors.rose
            },
            container: {
                center: true,
                padding: '1rem'
            }
        }
    },
    variants: {
        extends: {},
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}