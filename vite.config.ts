import vue from '@vitejs/plugin-vue';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';
import path from 'path';
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';

export default defineConfig({
	server: {
		host: '0.0.0.0',
		hmr: {
			host: 'localhost',
		},
	},
	build: { outDir: './public/build' },
	plugins: [
		vue({
			template: {
				transformAssetUrls: {
					base: null,
					includeAbsolute: false,
				},
			},
		}),
		laravel({
			input: [
				'resources/ts/app.ts',
				'resources/sass/app.scss',
			],
			refresh: true,
		}),
		Components({
			dirs: ['./resources/ts/components'],
			dts: './resources/ts/shared/types/components.d.ts',
			deep: true,
			extensions: ['vue'],
		}),
		AutoImport({
			include: [
				/\.[tj]sx?$/,
				/\.vue$/,
				/\.vue\?vue/,
			],
			dirs: ['src'],
			dts: './resources/ts/shared/types/auto-imports.d.ts',
			eslintrc: {
				enabled: true,
				filepath: './resources/ts/shared/.eslint-globals.json',
				globalsPropValue: true,
			},
			imports: [
				'vue',
				{
					'vue-router/composables': [
						'useRouter',
						'useRoute',
					],
				},
			],
		}),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './resources/ts'),
		},
	},
});
