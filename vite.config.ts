import { defineConfig } from 'vite';
import typescript from '@rollup/plugin-typescript';
import path from 'path';
import { typescriptPaths } from 'rollup-plugin-typescript-paths';

export default defineConfig({
    plugins: [],
    resolve: {
        alias: [
            {
                find: '~',
                replacement: path.resolve(__dirname, './src'),
            },
        ],
    },
    esbuild: {
        minify: true,
    },
    build: {
        manifest: true,
        minify: true,
        reportCompressedSize: true,
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            fileName: 'main',
            formats: ['es', 'cjs'],
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
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
