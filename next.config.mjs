// /** @type {import('next').NextConfig} */
// const nextConfig = {

// };

// export default nextConfig;






/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
      ignoreDuringBuilds: true,
    },
    async redirects() {
      return [
        {
          source: '/',
          destination: '/admin/dashboard',
          permanent: false, // use true if you want a permanent 308 redirect
        },
      ];
    },
  };
  
  export default nextConfig;
  