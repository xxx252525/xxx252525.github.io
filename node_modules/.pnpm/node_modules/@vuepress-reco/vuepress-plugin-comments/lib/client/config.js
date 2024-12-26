import { defineClientConfig } from 'vuepress/client';
import { applyClientEnhance } from './clientEnhance.js';
export default defineClientConfig({
    enhance(...args) {
        applyClientEnhance(...args);
    },
});
