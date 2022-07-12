import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter(),
        prerender: {
            default: true,
        },
        vite: {
            ssr: {
                noExternal: [
                    "@fortawesome/free-brands-svg-icons",
                    "@fortawesome/free-regular-svg-icons",
                    "@fortawesome/free-solid-svg-icons",
                ],
            },
        },
    },
    preprocess: preprocess(),
};

export default config;
