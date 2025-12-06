import { Suspense } from "react";
import ProductDetail from "./ProductDetails";

export default function Page() {
	return (
		<Suspense fallback={null}>
			<ProductDetail />
		</Suspense>
	);
}
