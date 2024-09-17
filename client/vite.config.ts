import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure this is set to 'dist', the folder Vercel uses for static files
  },
  base: '/', // This ensures proper URL handling for Vercel
});
