import sveltePreprocess from "svelte-preprocess";

export const svelte = (devel) => {
  return {
    preprocess: sveltePreprocess({
      typescript: true,
    }),
    compilerOptions: {
      dev: devel,
      css: true,
    },
  };
}

export default svelte(true);