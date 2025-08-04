import { useQuery } from "@tanstack/react-query";
import { AllProductsType } from "@/app/types";

export const useProductsByGender = (gender: string) =>
	useQuery({
		queryKey: ["product", gender],
		queryFn: async () => {
			const res = await fetch(`/api/products/gender/${gender}`);
			if (!res.ok) throw new Error("Failed to fetch products");
			const json = await res.json();
			return json.data;
		},
		enabled: !!gender,
	});

export const useProductById = (id: string) =>
	useQuery({
		queryKey: ["product", id],
		queryFn: async () => {
			const res = await fetch(`/api/products/id/${id}`);
			if (!res.ok) throw new Error("Failed to fetch product");
			const json = await res.json();
			return json.data;
		},
		enabled: !!id,
	});
