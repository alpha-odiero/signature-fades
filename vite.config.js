import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
var heroAsset = 'hero backgroung';
function preloadHeroImage() {
    return {
        name: 'preload-hero-image',
        apply: 'build',
        enforce: 'post',
        generateBundle: function (_options, bundle) {
            var html = bundle['index.html'];
            if (!html || html.type !== 'asset')
                return;
            var hero;
            for (var _i = 0, _a = Object.keys(bundle); _i < _a.length; _i++) {
                var key = _a[_i];
                var chunk = bundle[key];
                if (chunk.type === 'asset' && chunk.fileName.indexOf(heroAsset) !== -1) {
                    hero = '/' + encodeURI(chunk.fileName);
                    break;
                }
            }
            if (!hero)
                return;
            var tag = "<link rel=\"preload\" as=\"image\" href=\"".concat(hero, "\" fetchpriority=\"high\">");
            html.source = html.source.toString().replace('</head>', "  ".concat(tag, "\n  </head>"));
        },
    };
}
export default defineConfig({
    plugins: [react(), preloadHeroImage()],
});
