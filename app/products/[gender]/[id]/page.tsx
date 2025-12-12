import { Suspense } from "react";
import ProductDetail from "./ProductDetails";

export default function GenderPage() {
	return (
		<Suspense fallback={null}>
			<ProductDetail />
		</Suspense>
	);
}
