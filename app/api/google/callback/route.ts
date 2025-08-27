import { NextRequest, NextResponse } from "next/server";
import { users } from "@/app/api/lib/fakeDB";
export async function GET(req: NextRequest) {
	const code = req.nextUrl.searchParams.get("code");

	if (!code) {
		return NextResponse.json({ error: "Missing authorization code" }, { status: 400 });
	}

	const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
		method: "POST",
		headers: { "Content-Type": "application/x-www-form-urlencoded" },
		body: new URLSearchParams({
			client_id: process.env.GOOGLE_CLIENT_ID!,
			client_secret: process.env.GOOGLE_CLIENT_SECRET!,
			redirect_uri: process.env.REDIRECT_URL!,
			grant_type: "authorization_code",
			code,
		}),
	});

	const tokens = await tokenRes.json();
	const userRes = await fetch("https://openidconnect.googleapis.com/v1/userinfo", {
		headers: { Authorization: `Bearer ${tokens.access_token}` },
	});

	const user = await userRes.json();
	const newUser = {
		name: user.name,
		email: user.email,
		terms: true,
		provider: "google" as const,
	};
	const exists = users.find((u) => u.email === newUser.email);
	if (!exists) {
		users.push(newUser);
	}
	const encodedUser = encodeURIComponent(JSON.stringify(newUser));

	return NextResponse.redirect(`http://localhost:3000/google-auth-success?user=${encodedUser}`);
}
