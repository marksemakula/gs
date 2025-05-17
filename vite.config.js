import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: './', // Changed from '/' to './' for better compatibility
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true, // Cleans dist folder before build
    sourcemap: true,
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash].[ext]',
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js'
      }
    }
  },
  server: {
    historyApiFallback: true,
    fs: {
      strict: false // Allows serving from outside project root
    }
  },
  css: {
    modules: {
      localsConvention: 'camelCase'
    },
    postcss: './postcss.config.js'
  }
});