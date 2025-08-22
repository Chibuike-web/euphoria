import { NextRequest, NextResponse } from "next/server";
import { allProducts } from "../../products";

export async function GET(req: NextRequest, context: { params: Promise<{ gender: string }> }) {
	const { gender } = await context.params;
	const filtered = allProducts.filter((p) => p.gender === gender);

	return NextResponse.json({ data: filtered });
}
