// @ts-check
import {defineConfig} from 'astro/config';
import vue from '@astrojs/vue';
// https://astro.build/config
export default defineConfig({
    // Configurado automaticamente a partir do remote git: mauriciovictor/portfolio
    site: 'https://mauriciovictor.github.io/portfolio',
    base: '/portfolio/',
    integrations: [vue()],
});
