var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources
 |
 */

elixir(function(mix) {
    mix.sass('global.scss');

    mix.styles([
        'animate.css',
        'animatedresponsiveImagegrid.css',
        'magnific-popup.css'
    ], 'public/css/vendor.css');

    mix.scriptsIn('resources/assets/js/vendor', 'public/js/vendor.js');

    mix.version(['css/global.css', 'css/vendor.css', 'js/bundle.js', 'js/vendor.js']);
});
