"use client";

import Image from "next/image";
import { useCartItems } from "../store/useCart";
import { Button } from "@/components/ui/button";
import emptyCart from "@/app/assets/empty-cart.svg";
import { ChevronRight, MinusIcon, PlusIcon, Trash2 } from "lucide-react";
import Link from "next/link";
import { CartItemType } from "../types";
import { toSentenceCase } from "../utils";

export default function Cart() {
	const { cartItems } = useCartItems();

	if (cartItems.length === 0) {
		return (
			<main className="grid place-items-center py-[104px]">
				<div className="flex flex-col items-center">
					<Image src={emptyCart} alt="Illustration of an empty cart" />
					<h1 className="text-[34px] font-semibold ">Your cart is empty and sad :(</h1>
					<p className="text-muted-foreground mt-2 mb-6 text-[20px]">
						Add something to make it happy!
					</p>

					<Button>Continue Shopping</Button>
				</div>
			</main>
		);
	}
	return (
		<main>
			<section className=" max-w-[1240px] mx-auto px-6 xl:px-0 mt-[24px] flex flex-col">
				<div className="flex items-center gap-1 text-[18px]">
					<span>Home</span>
					<ChevronRight />
					<span>Add To Cart</span>
				</div>
				<p className="text-muted-foreground mt-4">
					Already Registered?{" "}
					<Link href="/auth/login" className="text-primary">
						Please Login here
					</Link>
				</p>
			</section>

			<div className=" text-white  bg-primary">
				<div className="flex items-center py-5 max-w-[1240px] mx-auto px-6 xl:px-0">
					<div className="w-[450px]">PRODUCT DETAILS</div>
					<div className="flex items-center w-full">
						<div className="w-full">PRICE</div>
						<div className="w-full">QUANTITY</div>
						<div className="w-full">SHIPPING</div>
						<div className="w-full">SUBTOTAL</div>
						<div className="w-full">ACTION</div>
					</div>
				</div>
			</div>
			<section>
				<div className="mt-4">
					{cartItems.map((item, index) => (
						<>
							<DesktopCartItemDisplay key={`${item.id}-${item.size}-${item.color}`} {...item} />
							{index !== cartItems.length - 1 && (
								<span className="w-full h-[2px] my-4 block bg-muted" />
							)}
						</>
					))}
				</div>
			</section>
		</main>
	);
}

const DesktopCartItemDisplay = (item: CartItemType) => {
	const { increaseItemQuantity, decreaseItemQuantity, removeItemFromCart } = useCartItems();
	return (
		<div className="flex items-center py-5 max-w-[1240px] mx-auto px-6 xl:px-0">
			<div className="w-[450px] flex gap-3">
				<div className="rounded-[12px] overflow-hidden h-[120px] w-[105px]">
					<Image
						src={item.image}
						alt={item.name}
						width={105}
						height={120}
						className="w-full h-full object-cover"
					/>{" "}
				</div>
				<div className="flex flex-col">
					<p className="font-bold text-[18px]">{item.name}</p>
					<span className="text-muted-foreground font-medium text-[14px]">
						Color: {toSentenceCase(item.color)}
					</span>
					<span className="text-muted-foreground font-medium text-[14px]">Size: {item.size}</span>
				</div>
			</div>
			<div className="flex items-center w-full">
				<div className="w-full font-bold text-[18px]">${item.price.toFixed(2)}</div>
				<div className="w-full items-center text-muted-foreground ">
					<div className="flex w-max items-center bg-muted rounded-[16px] px-3 gap-4 py-2">
						<button onClick={() => decreaseItemQuantity(item.id, item.size, item.color)}>
							<MinusIcon className="size-[20px]" />
						</button>
						<span>{item.quantity}</span>
						<button onClick={() => increaseItemQuantity(item.id, item.size, item.color)}>
							<PlusIcon className="size-[20px]" />
						</button>
					</div>
				</div>
				<div className="w-full">
					<span className="text-muted-foreground font-bold text-[18px]">{item.shipping}</span>
				</div>
				<div className="w-full">
					<span className="font-bold text-[18px]">${(item.price * item.quantity).toFixed(2)}</span>
				</div>
				<div className="w-full">
					<button onClick={() => removeItemFromCart(item.id, item.size, item.color)}>
						<Trash2 />
					</button>
				</div>
			</div>
		</div>
	);
};

const MobileCartItemDisplay = () => {
	return <div></div>;
};
