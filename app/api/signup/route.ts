import { authSchema } from "@/lib/authSchema";
import { NextRequest, NextResponse } from "next/server";
import { users } from "@/app/api/lib/fakeDB";

export async function POST(request: NextRequest) {
	const data = await request.json();

	const validatedData = authSchema.safeParse(data);

	if (!validatedData.success) {
		return NextResponse.json({ error: "Invalid data" }, { status: 400 });
	}

	const { email, password, terms } = validatedData.data;
	const user = users.find((u) => u.email === email);

	if (user) {
		return NextResponse.json({ error: "User already exist" }, { status: 409 });
	}
	console.log(email, password, terms);
	return NextResponse.json({ message: "User successfully registered" }, { status: 200 });
}
