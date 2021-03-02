const mix = require('laravel-mix')

mix.setPublicPath('public')
    .js('src/js/app.js', 'js')
    .postCss('src/css/app.css','css', [
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer'),
    ])