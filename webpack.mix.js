const mix = require("laravel-mix");

mix.js("resources/js/app.js", "public/js")
    .react()
    .sass("resources/sass/app.scss", "public/css");

//Vitrina Colombia
mix.js("resources/js/VitrinaColombia/js/app.js", "public/js/VitrinaColombia")
    .react()
    .sass(
        "resources/sass/VitrinaColombia/sass/app.scss",
        "public/css/VitrinaColombia"
    );

//Landings

//Franquicias
mix.js(
    "resources/js/Zlandings/Franquicias/js/app.js",
    "public/js/Zlandings/Franquicias"
)
    .react()
    .sass(
        "resources/sass/Zlandings/Franquicias/sass/app.scss",
        "public/css/Zlandings/Franquicias"
    );

//Remesas
mix.js(
    "resources/js/Zlandings/Remesas/js/app.js",
    "public/js/Zlandings/Remesas"
)
    .react()
    .sass(
        "resources/sass/Zlandings/Remesas/sass/app.scss",
        "public/css/Zlandings/Remesas"
    );
