import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
        proxy: {
          '/api': {
            target: 'http://localhost:8080',
            changeOrigin: true,
          },
        },
      },
});
// import { defineConfig } from 'vite';

// export default defineConfig({
//   server: {
//     proxy: {
//       '/api': {
//         target: 'http://localhost:8080',
//         changeOrigin: true,
//       },
//     },
//   },
// });
