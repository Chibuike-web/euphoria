import { loginSchema } from "@/lib/authSchema";
import { NextRequest, NextResponse } from "next/server";
import { users } from "@/app/api/lib/fakeDB";
import bcrypt from "bcryptjs";

export async function POST(request: NextRequest) {
	const data = await request.json();

	const validatedData = loginSchema.safeParse(data);

	if (!validatedData.success) {
		return NextResponse.json({ error: "Invalid data" }, { status: 400 });
	}

	const { email, password } = validatedData.data;

	const user = users.find((u) => u.email === email);

	if (!user) {
		return NextResponse.json({ error: "User does not exist" }, { status: 404 });
	}

	const isMatch = await bcrypt.compare(password, user?.password);

	if (!isMatch) {
		return NextResponse.json({ error: "Wrong password" }, { status: 401 });
	}

	return NextResponse.json({ message: "Success", user }, { status: 200 });
}
