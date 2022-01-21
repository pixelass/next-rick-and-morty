/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	/* config options here */
	reactStrictMode: true,
	async redirects() {
		return [
			{
				source: "/characters",
				destination: "/characters/1",
				permanent: true,
			},
		];
	},
};

module.exports = nextConfig;
