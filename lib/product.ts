import { useQuery } from "@tanstack/react-query";
import { AllProductsType } from "@/app/types";

const fetchAllProducts = async (): Promise<AllProductsType[]> => {
	const res = await fetch("/api/products");
	if (!res.ok) throw new Error("Failed to fetch products");
	const json = await res.json();
	return json.data;
};

export const useAllProducts = () =>
	useQuery<AllProductsType[]>({
		queryKey: ["products"],
		queryFn: fetchAllProducts,
		staleTime: 1000 * 60 * 5,
	});
