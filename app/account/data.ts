import { Heart, LogOut, LucideIcon, ShoppingBag, UserRound } from "lucide-react";

import { v4 as uuidv4 } from "uuid";

type TabItem = {
	id: string;
	label: string;
	icon: LucideIcon;
	tabKey: string;
};
export const tabs: TabItem[] = [
	{
		id: uuidv4(),
		label: "My orders",
		icon: ShoppingBag,
		tabKey: "my-orders",
	},
	{
		id: uuidv4(),
		label: "Wishlist",
		icon: Heart,
		tabKey: "wishlist",
	},
	{
		id: uuidv4(),
		label: "My Info",
		icon: UserRound,
		tabKey: "my-info",
	},
];

type OrderItem = {
	itemId: string;
	itemName: string;
	itemColour: string;
	itemImage: string;
	itemQty: number;
	itemPrice: number;
};

type Order = {
	orderNo: string;
	orderDate: number;
	orderStatus: "In Progress" | "Delivered" | "Cancelled";
	estDeliveryDate: number;
	paymentMethod: "Cash on Delivery" | "Credit Card" | "PayPal";
	items: OrderItem[];
	total: number;
};

export const orders: Order[] = [
	{
		orderNo: "123456789",
		orderDate: 1717344000000,
		orderStatus: "In Progress",
		estDeliveryDate: 1717948800000,
		paymentMethod: "Cash on Delivery",
		items: [
			{
				itemId: uuidv4(),
				itemName: "Men's Activewear",
				itemColour: "Black",
				itemImage: "/assets/men/activewear.png",
				itemQty: 2,
				itemPrice: 45,
			},
			{
				itemId: uuidv4(),
				itemName: "Running Shoes",
				itemColour: "Blue",
				itemImage: "/assets/men/boxers.png",
				itemQty: 1,
				itemPrice: 60,
			},
		],
		total: 150.0,
	},
	{
		orderNo: "12345678",
		orderDate: 1717344000000,
		orderStatus: "In Progress",
		estDeliveryDate: 1717948800000,
		paymentMethod: "Cash on Delivery",
		items: [
			{
				itemId: uuidv4(),
				itemName: "Men's Activewear",
				itemColour: "Black",
				itemImage: "/assets/men/activewear.png",
				itemQty: 2,
				itemPrice: 45,
			},
			{
				itemId: uuidv4(),
				itemName: "Running Shoes",
				itemColour: "Blue",
				itemImage: "/assets/men/boxers.png",
				itemQty: 1,
				itemPrice: 60,
			},
		],
		total: 150.0,
	},
	{
		orderNo: "1234567",
		orderDate: 1717344000000,
		orderStatus: "In Progress",
		estDeliveryDate: 1717948800000,
		paymentMethod: "Cash on Delivery",
		items: [
			{
				itemId: uuidv4(),
				itemName: "Men's Activewear",
				itemColour: "Black",
				itemImage: "/assets/men/activewear.png",
				itemQty: 2,
				itemPrice: 45,
			},
			{
				itemId: uuidv4(),
				itemName: "Running Shoes",
				itemColour: "Blue",
				itemImage: "/assets/men/boxers.png",
				itemQty: 1,
				itemPrice: 60,
			},
		],
		total: 150.0,
	},
];
