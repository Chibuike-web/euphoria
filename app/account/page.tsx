import React, { Suspense } from "react";
import AccountPageContent from "./AccountPageContent";

export default function Account() {
	return (
		<Suspense fallback={null}>
			<AccountPageContent />
		</Suspense>
	);
}
