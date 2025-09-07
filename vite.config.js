// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression';
import { VitePWA } from 'vite-plugin-pwa';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    
    // Compressione Gzip/Brotli per assets
    compression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 10240, // Solo file > 10kb
      deleteOriginFile: false
    }),
    
    compression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 10240,
      deleteOriginFile: false
    }),
    
    // PWA Support
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'Dott.ssa Alice Miegge - Medicina Estetica',
        short_name: 'Dr. Miegge',
        description: 'Medicina Estetica e Chirurgia Plastica Rigenerativa a Milano',
        theme_color: '#1a365d',
        background_color: '#ffffff',
        display: 'standalone',
        orientation: 'portrait',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,jpg,jpeg,svg,webp,woff,woff2}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 anno
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'gstatic-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 anno
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp|ico)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'images-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 30 // 30 giorni
              }
            }
          }
        ]
      }
    })
  ],
  
  // Alias per import più puliti
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@config': path.resolve(__dirname, './src/config')
    }
  },
  
  // Ottimizzazioni build
  build: {
    target: 'es2015',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['framer-motion', '@headlessui/react'],
          'utils-vendor': ['axios', 'date-fns', 'clsx'],
          
          // Lazy loaded chunks
          'lazy-components': [
            './src/pages/Home.jsx',
            './src/pages/LaDottoressa.jsx',
            './src/pages/Trattamenti.jsx',
            './src/pages/DoveRiceve.jsx'
          ]
        },
        // Asset naming
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId ? chunkInfo.facadeModuleId.split('/').pop() : 'chunk';
          return `js/[name].[hash].js`;
        },
        entryFileNames: 'js/[name].[hash].js',
        assetFileNames: (assetInfo) => {
          const extType = assetInfo.name.split('.').pop();
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            return `images/[name].[hash][extname]`;
          }
          if (/woff|woff2|eot|ttf|otf/i.test(extType)) {
            return `fonts/[name].[hash][extname]`;
          }
          if (/css/i.test(extType)) {
            return `css/[name].[hash][extname]`;
          }
          return `assets/[name].[hash][extname]`;
        }
      }
    },
    // Aumenta il limite per gli avvisi
    chunkSizeWarningLimit: 1000,
    
    // Genera sourcemaps solo in dev
    sourcemap: process.env.NODE_ENV === 'development',
    
    // Report della build
    reportCompressedSize: true,
    
    // CSS code splitting
    cssCodeSplit: true,
    
    // Assicura compatibilità con browser moderni
    cssTarget: 'chrome61'
  },
  
  // Server di sviluppo
  server: {
    port: 3000,
    strictPort: false,
    open: true,
    cors: true,
    // Proxy per API backend (se necessario)
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  
  // Preview server
  preview: {
    port: 4173,
    strictPort: false,
    open: true
  },
  
  // Ottimizzazioni
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'framer-motion',
      '@headlessui/react'
    ],
    exclude: ['@vite/client', '@vite/env']
  },
  
  // Performance
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' },
    jsxInject: `import React from 'react'`,
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment'
  },
  
  // Variabili d'ambiente
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
    __BUILD_DATE__: JSON.stringify(new Date().toISOString())
  }
});
