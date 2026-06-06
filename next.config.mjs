import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config here
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ]
  },
  images: {
    loader: 'custom',
    loaderFile: './src/lib/loader.js',
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
      },
      {
        protocol: 'https',
        hostname: 'www.author-shaelin-bishop.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'shaelinbishop.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'tvokjt9s5bkmgsfn.public.blob.vercel-storage.com',
      }
    ],
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
