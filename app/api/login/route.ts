import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
	// const body = await request.json();
	return NextResponse.json(
		{ message: "Success" },
		{ status: 200, headers: { "Content-Type": "text/plain" } }
	);
}
