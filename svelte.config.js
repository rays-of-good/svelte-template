import sveltePreprocess from "svelte-preprocess";

const svelte = {
  preprocess: [
    sveltePreprocess({
      postcss: true,
    }),
  ],
};

export default svelte;
