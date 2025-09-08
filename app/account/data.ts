import { Heart, LogOut, LucideIcon, ShoppingBag, UserRound } from "lucide-react";

import { v4 as uuidv4 } from "uuid";

type TabItem = {
	id: string;
	label: string;
	icon: LucideIcon;
	link: string;
	tabKey: string;
};
export const tabs: TabItem[] = [
	{
		id: uuidv4(),
		label: "My orders",
		icon: ShoppingBag,
		link: "/account?tab=my-orders",
		tabKey: "my-orders",
	},
	{
		id: uuidv4(),
		label: "Wishlist",
		icon: Heart,
		link: "/account?tab=wishlist",
		tabKey: "wishlist",
	},
	{
		id: uuidv4(),
		label: "My Info",
		icon: UserRound,
		link: "/account?tab=my-info",
		tabKey: "my-info",
	},
];
