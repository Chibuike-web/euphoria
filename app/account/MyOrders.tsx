"use client";

import { Button } from "@/components/ui/button";
import { cn, formatTime } from "@/lib/utils";
import Image from "next/image";
import { Fragment, useState } from "react";

import { orders } from "./data";
import { useRouter, useSearchParams } from "next/navigation";
import { X } from "lucide-react";

export default function MyOrders() {
	const [isActive, setIsActive] = useState("active");
	const searchParams = useSearchParams();
	const orderNo = searchParams.get("order");

	if (!orderNo)
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

	return <OrderDetail orderNo={orderNo} />;
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

const OrderDetail = ({ orderNo }: { orderNo: string }) => {
	const order = orders.find((o) => o.orderNo === orderNo);
	if (!order) return;
	return (
		<div>
			<h2 className="font-semibold text-[28px]">Order Details</h2>

			<div className="mt-4">
				<div className="flex flex-col lg:flex-row gap-3 lg:items-center lg:justify-between w-full px-12 py-6 rounded-2xl bg-muted">
					<div className="text-muted-foreground flex flex-col gap-1.5">
						<p>
							<span className="font-semibold"> Order No:</span>#{order.orderNo}
						</p>
						<p>
							Placed On
							{formatTime(Number(order.orderDate))}
						</p>
					</div>
					<p>
						<span className="font-semibold">Total:</span> ${order.total.toFixed(2)}
					</p>
				</div>
				<div className="relative flex justify-between justify-self-center w-full items-center my-12 max-w-[630px]">
					<span className="absolute top-1/2 left-10 right-8 h-[4px] bg-muted-foreground/50 -translate-y-4 z-[-1]" />
					<Stepper />
				</div>
				<div className="relative flex gap-10 justify-self-center w-full items-center my-12 max-w-[748px] bg-muted px-12 py-6 rounded-[16px]">
					<p className="text-muted-foreground">{formatTime(Number(order.estDeliveryDate))}</p>
					<p className="font-semibold">Your order has been successfully verified</p>
				</div>
				<div className="flex flex-col gap-6 max-w-[895px] p-5 sm:p-10 bg-muted rounded-[16px]">
					{order.items.map((item, index) => (
						<Fragment key={item.itemId}>
							<div className="flex gap-x-4 sm:gap-x-8 w-full items-start">
								<Image
									src={item.itemImage}
									alt={item.itemName}
									width={100}
									height={100}
									className="size-[100px] object-cover rounded-[8px]"
								/>
								<div className="flex flex-col md:flex-row sm:text-[22px] gap-x-8 text-muted-foreground font-medium">
									<div className="flex flex-col">
										<span className="font-bold text-primary">{item.itemName}</span>
										<div className="flex items-center gap-2">
											<span className="font-bold text-primary">Color:</span>
											<span>{item.itemColour}</span>
										</div>
									</div>
									<div className="flex gap-4">
										<div className="flex gap-2">
											<span className="font-bold text-primary">Qty:</span>
											<span>{item.itemQty}</span>
										</div>
										<span>${item.itemPrice.toFixed(2)}</span>
									</div>
								</div>
								<button className="ml-auto">
									<X />
								</button>
							</div>
							{index < order.items.length - 1 && (
								<span className="h-[1px] w-full bg-muted-foreground/20 block" />
							)}
						</Fragment>
					))}
				</div>
			</div>
		</div>
	);
};

const Stepper = () => {
	const [active, setActive] = useState(1);
	return (
		<>
			{["Order Placed", "In Progress", "Shipped", "Delivered"].map((label, index) => (
				<div key={label} className="flex flex-col items-center gap-2">
					<span className={cn("size-5 bg-primary rounded-full", active === index && "border-4")} />
					<p className="text-sm font-semibold">{label}</p>
				</div>
			))}
		</>
	);
};
