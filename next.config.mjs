/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'api.uifaces.co',
          },
          {
            protocol: 'https',
            hostname: 'randomuser.me',
          },
          {
            protocol: 'https',
            hostname: 'avatars.githubusercontent.com',
          },
        ],
      },
};

export default nextConfig;
