import { BuyWomensClothing, ClothingForWomenOnline, SideBar } from "./SidebarAndInfo";

export default async function Layout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: { gender: "men" | "women" };
}) {
	const { gender } = await params;

	return (
		<section className="max-w-[1240px] mx-auto px-6 xl:px-0 mb-[100px]">
			<div className="flex flex-col items-center md:flex-row gap-x-6 md:items-start w-full">
				<SideBar />
				{children}
			</div>
			{gender === "women" && <ClothingForWomenOnline />}
			{gender === "women" && <BuyWomensClothing />}
		</section>
	);
}
