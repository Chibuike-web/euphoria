import { NextRequest, NextResponse } from "next/server";
import { allProducts } from "../../products";

export async function GET(req: NextRequest, context: { params: Promise<{ id: string }> }) {
	const { id } = await context.params;
	const product = allProducts.find((p) => p.id === id);

	if (!product) {
		return NextResponse.json({ error: "Product not found" }, { status: 404 });
	}

	return NextResponse.json({ data: product });
}
