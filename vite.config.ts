import react from '@vitejs/plugin-react';
import path from "path";
import { defineConfig, loadEnv } from 'vite';


// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    define: {
      'process.env': env
    },
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./"),
      }
    },
    base: './',
    build: {
      outDir: 'dist-react',
    },
    server: {
      port: 5123,
      strictPort: true,
    }

  };
})
