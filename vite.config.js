import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        search: resolve(__dirname, 'search.html'),
        details: resolve(__dirname, 'details.html'),
        messages: resolve(__dirname, 'messages.html')
      }
    }
  }
});
