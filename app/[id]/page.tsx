"use client";

import ProductCard from "@/components/ProductCard";
import { useParams } from "next/navigation";
import { toSentenceCase } from "../utils";
import { useAllProducts } from "@/lib/product";
import { useMemo } from "react";

export default function Page() {
	const { id } = useParams() as { id: string };

	const { data, isLoading, error } = useAllProducts();

	const filtered = useMemo(() => data?.filter((item) => item.gender === id) || [], [data, id]);

	if (isLoading) return;
	if (error) return <p className="mt-20 text-center">Something went wrong</p>;

	return (
		<section className="flex flex-col gap-6 w-full max-w-[1240px] mx-auto mt-[130px] px-6 xl:px-0">
			<div>
				<h1 className="text-2xl font-bold capitalize">{toSentenceCase(id)}'s Clothing</h1>
			</div>
			<div className="grid grid-cols-[repeat(auto-fill,minmax(270px,1fr))] gap-12">
				{filtered.map((item) => (
					<ProductCard key={item.id} {...item} />
				))}
			</div>
		</section>
	);
}
