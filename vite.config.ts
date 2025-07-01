import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'node:path';

export default defineConfig({
    plugins: [react()],
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/components/index.ts'),
            name: 'fracto-ui',
            formats: ['es', 'cjs'],
            fileName: (format) => `index.${format}.js`  // 👈 remove [hash]
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                }
            }
        },
        sourcemap: true,
        assetsInlineLimit: 0,
        cssCodeSplit: false
    }
});