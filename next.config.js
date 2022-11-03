/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "bookworm-light-nextjs.vercel.app",
				port: "",
				pathname: "/_next/**",
			},
		],
	},
};

module.exports = nextConfig;
