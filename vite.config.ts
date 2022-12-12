import type { UserConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';

const config: UserConfig = {
	plugins: [sveltekit({ hot: !process.env.VITEST })],
	test: {
		globals: true,
		environment: 'jsdom'
	}
};

export default config;
