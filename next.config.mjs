// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   /* config options here */
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        pathname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
        pathname: "**",
      },
    ],
  },

  // async redirects() {
  //   return [
  //     {
  //       source: '/food-details/:id',
  //       destination: '/foods/:id',
  //       permanent: true,
  //     },
  //   ]
  // },
};

export default nextConfig;

