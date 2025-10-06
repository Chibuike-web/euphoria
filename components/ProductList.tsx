"use client";

import ProductCard from "@/components/ProductCard";
import { useProductsByGender } from "@/lib/api/fetchData";
import { AllProductsType } from "@/lib/types";

export default function ProductList({ gender }: { gender: string }) {
	const { data: products, isPending, error } = useProductsByGender(gender);

	if (isPending) return <p>Loading....</p>;
	if (error) return <p className="mt-20 text-center">Something went wrong</p>;

	return (
		<div className="grid grid-cols-[repeat(auto-fill,minmax(270px,1fr))] gap-6">
			{products.map((item: AllProductsType) => (
				<ProductCard key={item.id} {...item} />
			))}
		</div>
	);
}
