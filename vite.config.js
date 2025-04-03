import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import { resolve } from 'path'
import fs from 'fs'

const htmlPages = fs.readdirSync('./src/pages')
  .filter(file => file.endsWith('.html'))
  .reduce((entries, file) => {
    const name = file.replace('.html', '');
    entries[name] = resolve(__dirname, `src/pages/${file}`);
    return entries;
  }, {
    main: resolve(__dirname, 'index.html'),
  });

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: htmlPages,
    },
    outDir: 'dist',
    emptyOutDir: true
  },
});
