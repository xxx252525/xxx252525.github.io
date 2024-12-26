import { defineClientConfig } from 'vuepress/client';
import { applyClientSetup } from './clientSetup.js';
export default defineClientConfig({
    setup() {
        applyClientSetup();
    },
});
