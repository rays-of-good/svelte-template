import sveltePreprocess from "svelte-preprocess";

export const svelte = (devel) => {
  return {
    compileOptions: {
      dev: devel,
      css: true
    },
    preprocess: sveltePreprocess({
      typescript: {},
    }),
  };
}

export default svelte(true);