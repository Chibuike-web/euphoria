import { NextResponse } from "next/server";

export function GET() {
	const redirectUrl = process.env.REDIRECT_URL;
	const clientId = process.env.GOOGLE_CLIENT_ID;
	const scope = "openid profile email";
	const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${encodeURIComponent(
		scope
	)}`;
	return NextResponse.redirect(authUrl);
}
