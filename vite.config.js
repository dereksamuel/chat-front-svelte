import { sveltekit } from '@sveltejs/kit/vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vitest/config';
import autoPreprocess from 'svelte-preprocess';

export default defineConfig({
	plugins: [sveltekit(), svelte({
		preprocess: autoPreprocess()
	}),],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
