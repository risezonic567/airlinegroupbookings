// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//         remotePatterns: [
//             {
//                 protocol: 'https',
//                 hostname: 'images.unsplash.com',
//             },
//         ],
//     },
// }

// export default nextConfig


/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    images: {
        qualities: [75, 90],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
        ],
    },
}

export default nextConfig