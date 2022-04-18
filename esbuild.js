import { serve, build } from "esbuild";
import { svelte } from "./svelte.config.js"

import esbuildSvelte from "esbuild-svelte";

const devel = process.argv.includes('--devel');

const sp = {
    port: 3000,
    servedir: "public"
}

const bp = {
    entryPoints: ['src/main.ts'],
    outfile: 'public/build/bundle.js',
    mainFields: ['svelte', 'module', 'main'],
    plugins: [
        esbuildSvelte(svelte(devel))
    ],
    sourcemap: devel,
    bundle: true,
}

if (devel) {
    serve(sp, bp);
} else {
    build(bp);
}
