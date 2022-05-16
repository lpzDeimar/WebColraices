const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
    .react()
    .sass('resources/sass/app.scss', 'public/css');

mix.js('resources/js/VitrinaColombia/js/app.js', 'public/js/VitrinaColombia')
    .react()
    .sass('resources/sass/VitrinaColombia/sass/app.scss', 'public/css/VitrinaColombia');
