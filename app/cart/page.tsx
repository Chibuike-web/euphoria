"use client";

import Image from "next/image";
import { useCartItems } from "../store/useCart";
import { Button } from "@/components/ui/button";
import emptyCart from "@/app/assets/empty-cart.svg";

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
	return <div>Cart</div>;
}
