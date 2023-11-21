import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

console.log(`${__dirname}/../dist`);
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: { 'react-grand-tour': `${__dirname}/../src` },
    },
});
