import { allProducts } from "../../products";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
	const { id } = await params;
	const product = allProducts.find((p) => p.id === id);

	if (!product) {
		return NextResponse.json({ error: "Product not found" }, { status: 404 });
	}

	return NextResponse.json({ data: product });
}
