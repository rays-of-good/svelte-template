import sveltePreprocess from 'svelte-preprocess'
import nested from 'postcss-nested'
import variables from 'postcss-simple-vars'
import mixins from 'postcss-mixins'
import autoprefixer from "autoprefixer"
import cssnano from 'cssnano'

export function configureSvelte(production) {
  return {
    preprocess: sveltePreprocess({
      sourceMap: !production,
      postcss: {
        plugins: [nested, variables, mixins, autoprefixer, cssnano]
      },
    }),
    compilerOptions: {
      dev: !production,
    },
  }
}

let s = configureSvelte(true)

export default s