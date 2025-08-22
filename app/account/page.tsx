import React, { Suspense } from "react";
import AccountPageContent from "./AccountPageConten";

export default function Account() {
	return (
		<Suspense fallback={null}>
			<AccountPageContent />
		</Suspense>
	);
}
