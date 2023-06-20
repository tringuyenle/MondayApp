module.exports = {
    prefix: '',
    purge: {
      content: [
        './src/**/*.{html,ts}',
        "./node_modules/flowbite/**/*.js",
      ]
    },
    darkMode: 'class', // or 'media' or 'class'
    theme: {
      extend: {
        visibility: ["group-hover"],
      },
    },
    variants: {
      extend: {},
    },
    plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography'),require('flowbite/plugin')],
};