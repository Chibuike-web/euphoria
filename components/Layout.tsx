import { SideBar } from "@/app/products/[gender]/Sidebar";
import { toSentenceCase } from "@/lib/utils";

export default function Layout({
	children,
	gender,
}: {
	children: React.ReactNode;
	gender: string;
}) {
	return (
		<div className="flex flex-col items-center md:flex-row gap-x-6 md:items-start w-full">
			<SideBar />
			<div className="w-full">
				<div className="w-full flex items-center justify-between my-[50px]">
					<h1 className="text-2xl font-bold capitalize">{toSentenceCase(gender)}'s Clothing</h1>
					<div className="flex items-center gap-4 text-[18px]">
						<p className="font-semibold">New</p>
						<p>Recommended</p>
					</div>
				</div>
				{children}
			</div>
		</div>
	);
}
