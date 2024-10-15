import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Output directory
  },
  base: '/', // Base path
  server: {
    host: '0.0.0.0', // Enable external access
    port: 3000, // Optional: specify a port (default is 5173 for Vite)
  },
});
