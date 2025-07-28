"use client";
import { useAllProducts } from "@/lib/product";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function ProductDetail() {
	const { gender, id } = useParams();
	const { data, isLoading, error } = useAllProducts();

	const product = data?.find((u) => u.id === id);

	if (isLoading) return <h1>Loading....</h1>;
	if (!product) return <h1>Product not found</h1>;
	return (
		<div>
			<Image src={product.image} alt={product.name} width={282} height={370} />
		</div>
	);
}
