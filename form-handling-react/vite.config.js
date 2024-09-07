import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: 'jsx', // Handle .js files as JSX
    include: /src\/.*\.[tj]sx?$/, // Include both .js and .jsx files in src directory
    exclude: /node_modules/, // Exclude node_modules
  },
});
