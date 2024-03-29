import { defineConfig } from 'vite';
import typescript from '@rollup/plugin-typescript';
import path from 'path';
import { typescriptPaths } from 'rollup-plugin-typescript-paths';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [
            {
                find: '~',
                replacement: path.resolve(__dirname, './src'),
            },
        ],
    },
    build: {
        manifest: true,
        minify: true,
        reportCompressedSize: true,
        lib: {
            name: 'ReactGrandTour',
            entry: {
                'react-grand-tour': 'src/index.ts',
            },
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                },
            },
            plugins: [
                typescriptPaths({
                    preserveExtensions: true,
                }),
                typescript({
                    sourceMap: false,
                    declaration: true,
                    outDir: 'dist',
                }),
            ],
        },
    },
});
