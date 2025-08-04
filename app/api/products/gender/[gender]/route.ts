import { allProducts } from "../../products";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { gender: string } }) {
	const { gender } = await params;
	const products = allProducts.filter((p) => p.gender === gender);

	return NextResponse.json({ data: products });
}
