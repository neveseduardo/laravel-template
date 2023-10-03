import { DefineComponent, createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import Layout from '@/pages/Layout.vue';

createInertiaApp({
	resolve: (name: string) => {
		const pages = import.meta.glob<DefineComponent>('./pages/**/*.vue', { eager: true });
		const page = pages[`./pages/${name}.vue`];
		page.default.layout = page.default.layout || Layout;
		return page;
	},
	setup({ el, App, props, plugin }) {
		const app = createApp({
			render: () => h(App, props),
		});
		app.use(plugin);
		app.mount(el);
	},
});