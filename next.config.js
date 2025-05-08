const nextConfig = {
  output: 'export', // Ensures a static export build
  distDir: 'dist',  // Output directory for the build

  images: {
    unoptimized: true, // Required for static export (disables Next's image optimization)
    domains: [
      'imakesite.s3.eu-north-1.amazonaws.com','inotch-backend.onrender.com'
    ]
  },

  assetPrefix: 'https://imakesite.s3.eu-north-1.amazonaws.com/templates/flynow',
  trailingSlash: true, // Ensures URLs have trailing slashes (important for static hosting)
  basePath: '/templates/flynow', // Needed if you're deploying the site under this S3 subfolder

  env: {
    STRAPI_API_URL: process.env.STRAPI_API_URL || 'https://inotch-backend.onrender.com',
    GRAPESJS_ENABLED: process.env.GRAPESJS_ENABLED || 'false'
  },

  experimental: {
    appDir: true // Keep this if you're using the App Router
  }
};

export default nextConfig;









// // const nextConfig = {
// //   output: 'export',
// //   distDir: 'dist',
// //   images: {
// //     unoptimized: true,
// //     domains: ['imakesite.s3.eu-north-1.amazonaws.com'],
// //     loader: 'custom',
// //     loaderFile: './src/utils/imageLoader.js'
// //   },
// //   assetPrefix: process.env.NODE_ENV === 'production'
// //     ? process.env.NEXT_PUBLIC_S3_BUCKET_URL
// //     : '',
// //   trailingSlash: true,
// //   basePath: '/templates/flynow'
// // }

// // export default nextConfig
