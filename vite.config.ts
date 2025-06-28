import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/components/index.ts'),
            name: 'fractoui',
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
        sourcemap: true
    },
    server: {
        port: 5173,
        proxy: {
            '/api': 'http://localhost:8080', // Proxy to Go backend
        },
    },
});