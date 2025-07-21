import { NextResponse } from "next/server";
import { allProducts } from "./products";

export async function GET() {
	return NextResponse.json({ data: allProducts });
}
