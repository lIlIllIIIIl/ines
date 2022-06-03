const mix = require('laravel-mix');

mix.js('src/scripts/app.js', 'public/scripts')
    .js('src/scripts/archive.js', 'public/scripts')
    .js('src/scripts/splitText.js', 'public/scripts')
    .js('src/scripts/hScroll.js', 'public/scripts')
    .js('src/scripts/copy.js', 'public/scripts')
    .js('src/scripts/cursor.js', 'public/scripts')
    .js('src/scripts/scroll.js', 'public/scripts')
    .js('src/scripts/headerAnim.js', 'public/scripts')
    .js('src/scripts/linesApparition.js', 'public/scripts')
    .postCss('src/styles/main.css', 'public/styles')
    .postCss('src/styles/project.css', 'public/styles')
    .postCss('src/styles/test.css', 'public/styles')
    .postCss('src/styles/responsive/main.responsive.css', 'public/styles/responsive')
    .options({
        processCssUrls: false
    });
