import { toSentenceCase } from "../../utils";
import { Suspense } from "react";
import ProductList from "@/components/ProductList";
import { SideBar, ClothingForWomenOnline, BuyWomensClothing } from "./SidebarAndInfo";

export async function generateStaticParams() {
	return [{ gender: "men" }, { gender: "women" }];
}
export default async function Page({ params }: { params: { gender: string } }) {
	const { gender } = await params;

	return (
		<section className="max-w-[1240px] mx-auto px-6 xl:px-0 mb-[100px]">
			<div className="flex flex-col items-center md:flex-row gap-x-6 md:items-start w-full">
				<SideBar />
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
			</div>

			{gender === "women" && <ClothingForWomenOnline />}
			{gender === "women" && <BuyWomensClothing />}
		</section>
	);
}
