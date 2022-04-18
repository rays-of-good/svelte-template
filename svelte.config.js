import sveltePreprocess from "svelte-preprocess";

export const svelte = (devel) => {
  return {
    compileOptions: {
      dev: devel,
      preprocess: sveltePreprocess(),
      css: true,
    },
  };
}

export default svelte(true);