/** @type {import('next').NextConfig} */

// https://nextjs.org/docs/pages/building-your-application/deploying/static-exports
const nextConfig = {
    // trailingSlash: true,
    // output: 'export',


    // From CHAT GPT answer
    // ... other configurations ...
    // Add the following export configuration
    exportPathMap: async function (
        defaultPathMap,
        { dev, dir, outDir, distDir, buildId }
    ) {
        return {
            // Your path mapping goes here
            '/': { page: '/' },
            // Add other paths as needed
        };
    },
}

module.exports = nextConfig
