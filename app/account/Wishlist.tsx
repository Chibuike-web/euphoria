"use client";

import Image from "next/image";
import { useCartItems } from "../store/useCart";
import { useWishlist } from "../store/useWishlist";
import { Fragment, useState } from "react";
import { X } from "lucide-react";
import { toSentenceCase } from "../utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { EmptyWishlist } from "../assets/icons";

export default function Wishlist() {
	const { wishlist, removeFromWishlist } = useWishlist();
	const { cartItems, updateCartItems } = useCartItems();
	const [status, setStatus] = useState<"idle" | "added">("idle");

	if (wishlist.length === 0) {
		return (
			<main className="grid place-items-center py-[104px]">
				<div className="flex flex-col items-center">
					<EmptyWishlist />
					<h1 className="text-[34px] font-semibold mt-6 text-center">Your wishlist is empty.</h1>
					<p className="text-muted-foreground mt-2 mb-6 text-[20px] w-full max-w-[550px] text-center">
						You don’t have any products in the wishlist yet. You will find a lot of interesting
						products on our Shop page.
					</p>

					<Button asChild>
						<Link href="/">Continue Shopping</Link>
					</Button>
				</div>
			</main>
		);
	}

	return (
		<div>
			<h1 className="text-[28px] font-semibold">Wishlist</h1>
			<div className="flex flex-col mt-4 w-full">
				{wishlist.map((item) => {
					const handleAddToCart = () => {
						if (isExist) return;
						updateCartItems({
							id: item.id,
							image: item.image,
							name: item.name,
							color: item.color,
							size: item.size,
							price: item.price,
							quantity: 1,
							shipping: "FREE",
						});
						setStatus("added");

						setTimeout(() => {
							setStatus("idle");
						}, 2000);
					};
					const isExist = cartItems.some(
						(i) => i.id === item.id && i.size === item.size && i.color === item.color
					);

					let cartButtonLabel = null;

					if (isExist) {
						if (status === "added") {
							cartButtonLabel = "Added to cart";
						} else {
							cartButtonLabel = "Already in cart";
						}
					} else {
						cartButtonLabel = "Add to cart";
					}
					return (
						<Fragment key={item.id}>
							<Link href={`products/${item.gender}/${item.id}`} className="flex gap-4 items-center">
								<button
									onClick={(e) => {
										e.preventDefault();
										e.stopPropagation();
										removeFromWishlist(item.id);
									}}
								>
									<X />{" "}
								</button>
								<div className="flex gap-9 items-center w-full">
									<Image
										src={item.image}
										alt={item.name}
										width={110}
										height={110}
										className="w-[110px] h-[110px] object-cover rounded-[8px]"
									/>
									<div className="flex text-[22px] justify-between items-center w-full">
										<div className="flex flex-col gap-2">
											{" "}
											<span className="font-bold">{item.name}</span>
											<div>
												<span className="font-bold">Color:</span>
												<span>{toSentenceCase(item.color)}</span>
											</div>
											<div>
												<span className="font-bold">Quantity:</span> <span>{item.quantity}</span>
											</div>
										</div>
										<div className="flex items-center gap-4" onClick={(e) => e.stopPropagation()}>
											<span className="text-muted-foreground font-bold">${item.price}</span>
											<Button
												disabled={isExist}
												onClick={(e) => {
													e.preventDefault();
													e.stopPropagation();
													handleAddToCart();
												}}
												className="text-[18px]"
											>
												{cartButtonLabel}
											</Button>
										</div>
									</div>
								</div>
							</Link>
							<span className="w-full h-[2px] my-8 block bg-muted" />
						</Fragment>
					);
				})}
			</div>
		</div>
	);
}
