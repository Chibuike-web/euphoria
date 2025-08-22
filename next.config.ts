import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	serverExternalPackages: [
		"zod",
		"bcryptjs",
		"uuid",
		"class-variance-authority",
		"clsx",
		"@hookform/resolvers",
	],
	reactStrictMode: true,

	eslint: {
		ignoreDuringBuilds: true,
	},
	typescript: {
		ignoreBuildErrors: true,
	},
};

export default nextConfig;
