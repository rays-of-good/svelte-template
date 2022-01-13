import sveltePreprocess from 'svelte-preprocess'
import nested from 'postcss-nested'
import variables from 'postcss-simple-vars'
import mixins from 'postcss-mixins'
import autoprefixer from "autoprefixer"
import cssnano from 'cssnano'

export function configureSvelte(develop) {
  return {
    preprocess: sveltePreprocess({
      sourceMap: develop,
      postcss: {
        plugins: [nested, variables, mixins, autoprefixer, cssnano]
      },
    }),
    compilerOptions: {
      dev: develop,
    },
  }
}

let s = configureSvelte(false)

export default s