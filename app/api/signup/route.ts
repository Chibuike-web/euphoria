import { authSchema } from "@/lib/authSchema";
import { NextRequest, NextResponse } from "next/server";
import { users } from "@/app/api/lib/fakeDB";
import bcrypt from "bcryptjs";

export async function POST(request: NextRequest) {
	const data = await request.json();

	const validatedData = authSchema.safeParse(data);

	if (!validatedData.success) {
		return NextResponse.json({ error: "Invalid data" }, { status: 400 });
	}

	const { email, password, terms } = validatedData.data;

	const existingUser = users.find((u) => u.email === email);
	if (existingUser) {
		return NextResponse.json({ error: "User already exists" }, { status: 409 });
	}

	const hashedPassword = await bcrypt.hash(password, 10);
	const newUser = {
		email,
		password: hashedPassword,
		terms,
	};

	users.push(newUser);
	return NextResponse.json({ message: "User successfully registered" }, { status: 200 });
}
