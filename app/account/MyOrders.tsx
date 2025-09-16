"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Fragment, useState } from "react";
import { formatTime } from "./utils";
import { orders } from "./data";
import { useRouter, useSearchParams } from "next/navigation";

export default function MyOrders() {
	const [isActive, setIsActive] = useState("active");
	const searchParams = useSearchParams();
	const orderId = searchParams.get("order");

	if (!orderId)
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

	return <OrderDetail />;
}

const ActiveOrder = () => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const orderId = searchParams.get("order");
	return (
		<div className="flex flex-col gap-10 mt-10">
			{orders.map((order, index) => {
				return (
					<Fragment key={order.orderNo}>
						<div className="flex flex-col gap-8">
							<div className="flex flex-col gap-3.5 px-8 py-4 bg-muted rounded-[14px]">
								<p className="font-semibold text-[20px]">Order no: #{order.orderNo}</p>
								<div className="flex flex-col lg:flex-row gap-3 lg:items-center lg:justify-between w-full">
									<div className="text-muted-foreground flex flex-col gap-1.5">
										<p>
											<span className="font-semibold">Order Date:</span>{" "}
											{formatTime(Number(order.orderDate))}
										</p>
										<p>
											<span className="font-semibold">Estimated Delivery Date:</span>{" "}
											{formatTime(order.estDeliveryDate)}
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

							<div className="flex justify-between items-center">
								<div className="flex flex-col gap-4">
									{order.items.slice(0, 1).map((item) => {
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

													<div className="flex flex-col gap-[2px]">
														<p className="font-semibold">{item.itemName}</p>
														<p>
															<span className="font-semibold text-[14px]">Colour: </span>
															<span className="text-muted-foreground">{item.itemColour}</span>
														</p>
														<p>
															<span className="font-semibold text-[14px]">Qty:</span>
															<span className="text-muted-foreground">{item.itemQty}</span>
														</p>
														<p className="font-semibold text-muted-foreground">
															Total: ${item.itemPrice.toFixed(2)}
														</p>
													</div>
												</div>
											</div>
										);
									})}
								</div>
								<Button
									onClick={() => {
										const params = new URLSearchParams(searchParams.toString());
										params.set("order", order.orderNo);
										router.push(`/account?${params.toString()}`);
									}}
								>
									View Details
								</Button>
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
	return <div>Cancelled Order</div>;
};

const CompletedOrder = () => {
	return <div>Completed Order</div>;
};

const OrderDetail = () => {
	return <div>Order</div>;
};
