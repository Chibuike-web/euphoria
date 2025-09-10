import { toSentenceCase } from "../../utils";
import { Suspense } from "react";
import ProductList from "@/components/ProductList";

export async function generateStaticParams() {
	return [{ gender: "men" }, { gender: "women" }];
}
export default async function Page({ params }: { params: { gender: string } }) {
	const { gender } = await params;

	return (
		<div className="w-full">
			<div className="w-full flex items-center justify-between my-[50px]">
				<h1 className="text-2xl font-bold capitalize">{toSentenceCase(gender)}'s Clothing</h1>
				<div className="flex items-center gap-4 text-[18px]">
					<p className="font-semibold">New</p>
					<p>Recommended</p>
				</div>
			</div>

			<Suspense fallback={<p>Loading products...</p>}>
				<ProductList gender={gender} />
			</Suspense>
		</div>
	);
}
