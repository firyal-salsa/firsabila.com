import { defineConfig } from 'astro/config';

export default defineConfig({
  vite: {
    server: {
      allowedHosts: 'all',
      host: true  // Tambahkan ini untuk binding ke semua interface
    }
  }
});