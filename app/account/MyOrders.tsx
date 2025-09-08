"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Fragment, useState } from "react";

export default function MyOrders() {
	const [isActive, setIsActive] = useState("active");
	return (
		<div>
			<h2 className="font-semibold text-[28px]">My Orders</h2>
			<div className="flex items-center gap-20 mt-4">
				{["Active", "Cancelled", "Completed"].map((item) => (
					<button
						key={item}
						className={cn(
							"px-12 py-[12px]",
							isActive === item.toLowerCase() &&
								"bg-[#f6f6f6] rounded-t-[8px] border-b border-black font-semibold"
						)}
						onClick={() => setIsActive(item.toLowerCase())}
					>
						{item}
					</button>
				))}
			</div>

			{isActive === "active" ? (
				<ActiveOrder />
			) : isActive === "cancelled" ? (
				<CancelledOrder />
			) : (
				<CompletedOrder />
			)}
		</div>
	);
}

const ActiveOrder = () => {
	return (
		<div className="flex flex-col gap-10 mt-10">
			{orders.map((order, index) => {
				const date = new Date(order.orderDate);
				const estDate = new Date(order.estDeliveryDate);
				return (
					<Fragment key={order.orderNo}>
						<div className="flex flex-col gap-8">
							<div className="flex flex-col gap-3.5 px-8 py-4 bg-muted rounded-[14px]">
								<p className="font-semibold text-[20px]">Order no: #{order.orderNo}</p>
								<div className="flex flex-col lg:flex-row gap-3 lg:items-center lg:justify-between w-full">
									<div className="text-muted-foreground flex flex-col gap-1.5">
										<p>
											<span className="font-semibold">Order Date:</span> {date.toLocaleString()}
										</p>
										<p>
											<span className="font-semibold">Estimated Delivery Date:</span>{" "}
											{estDate.toLocaleDateString()}
										</p>
									</div>
									<div className="text-muted-foreground flex flex-col gap-1.5 lg:items-end">
										<p>
											<span className="font-semibold">Order Status:</span> {order.orderStatus}
										</p>
										<p>
											<span className="font-semibold">Payment Method:</span> {order.paymentMethod}
										</p>
									</div>
								</div>
							</div>

							<div className="flex flex-col gap-4">
								{order.items.map((item) => {
									return (
										<div
											key={item.itemName}
											className="flex flex-col sm:flex-row gap-6 sm:justify-between w-full sm:items-center"
										>
											<div className="flex items-center gap-2">
												<Image
													src={item.itemImage}
													alt={item.itemName}
													width={96}
													height={96}
													className="size-[96px] rounded-[4px] object-cover "
												/>

												<div>
													<p>{item.itemName}</p>
													<p>Colour: {item.itemColour}</p>
													<p>Qty: {item.itemQty}</p>
													<p>Total: ${item.itemPrice.toFixed(2)}</p>
												</div>
											</div>
											<Button>View Details</Button>
										</div>
									);
								})}
							</div>
						</div>
						{index <= orders.length && <span className="h-[1px] w-full bg-muted" />}
					</Fragment>
				);
			})}
		</div>
	);
};

const CancelledOrder = () => {
	return <div></div>;
};

const CompletedOrder = () => {
	return <div></div>;
};

const orders = [
	{
		orderNo: "123456789",
		orderDate: 1717344000000,
		orderStatus: "In Progress",
		estDeliveryDate: 1717948800000,
		paymentMethod: "Cash on Delivery",
		items: [
			{
				itemId: "",
				itemName: "Men's Activewear",
				itemColour: "Black",
				itemImage: "/assets/men/activewear.png",
				itemQty: 2,
				itemPrice: 45,
			},
			{
				itemId: "",
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
				itemId: "",
				itemName: "Men's Activewear",
				itemColour: "Black",
				itemImage: "/assets/men/activewear.png",
				itemQty: 2,
				itemPrice: 45,
			},
			{
				itemId: "",
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
				itemId: "",
				itemName: "Men's Activewear",
				itemColour: "Black",
				itemImage: "/assets/men/activewear.png",
				itemQty: 2,
				itemPrice: 45,
			},
			{
				itemId: "",
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
