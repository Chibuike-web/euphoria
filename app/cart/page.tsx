"use client";

import React from "react";
import Image from "next/image";
import { useCartItems } from "../store/useCart";
import { Button } from "@/components/ui/button";
import emptyCart from "@/app/assets/empty-cart.svg";
import { ChevronRight, MinusIcon, PlusIcon, Trash2 } from "lucide-react";
import Link from "next/link";
import { CartItemType } from "../types";
import { toSentenceCase } from "../utils";
import { Input } from "@/components/ui/input";
import { useUserValue } from "../store/useUserValue";
import { useMediaQuery } from "@/lib/Hooks";

export default function Cart() {
	const { cartItems, getCartTotal, getShippingTotal } = useCartItems();
	const { user } = useUserValue();
	const isDesktop = useMediaQuery("(min-width: 1024px)");

	if (cartItems.length === 0) {
		return (
			<main className="grid place-items-center py-[104px]">
				<div className="flex flex-col items-center px-6 xl:px-0">
					<Image src={emptyCart} alt="Illustration of an empty cart" />
					<h1 className="text-[28px] md:text-[34px] font-semibold text-center mt-6">
						Your cart is empty and sad :(
					</h1>
					<p className="text-muted-foreground mt-2 mb-6 md:text-[20px]">
						Add something to make it happy!
					</p>

					<Button asChild>
						<Link href="/">Continue Shopping</Link>
					</Button>
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
				{!user && (
					<p className="text-muted-foreground mt-4">
						Already Registered?{" "}
						<Link href="/auth/login" className="text-primary">
							Please Login here
						</Link>
					</p>
				)}
			</section>

			<div className=" text-white bg-primary mt-8">
				<div className="hidden lg:flex items-center py-5 max-w-[1240px] mx-auto px-6 xl:px-0">
					<div className="w-[600px]">PRODUCT DETAILS</div>
					<div className="flex items-center w-full">
						<div className="w-full text-center">PRICE</div>
						<div className="w-full text-center">QUANTITY</div>
						<div className="w-full text-center">SHIPPING</div>
						<div className="w-full text-center">SUBTOTAL</div>
						<div className="w-full text-right">ACTION</div>
					</div>
				</div>
			</div>
			<section className="mt-4 max-w-[1240px] mx-auto px-6 xl:px-0">
				<div>
					{cartItems.map((item, index) => (
						<React.Fragment key={`${item.id}-${item.size}-${item.color}`}>
							{isDesktop ? (
								<DesktopCartItemDisplay {...item} />
							) : (
								<MobileCartItemDisplay {...item} />
							)}
							{index !== cartItems.length - 1 && (
								<span className="w-full h-[2px] my-4 block bg-muted" />
							)}
						</React.Fragment>
					))}
				</div>
			</section>
			<section className="bg-muted mt-20 lg:mt-0 py-10">
				<div className="flex flex-col gap-y-9 lg:flex-row lg:items-center w-full justify-between max-w-[1240px] mx-auto px-6 xl:px-0">
					<div>
						<p className="text-[24px] mb-2 font-semibold">Discount Codes</p>
						<p className="mb-8">Enter your coupon code if you have one</p>
						<div className="flex mb-8">
							<Input className="rounded-bl-[14px] w-full md:w-max rounded-tl-[14px] rounded-r-[0px]" />
							<Button className="rounded-l-[0px]">Apply Coupon</Button>
						</div>
						<Button className="bg-white border border-muted-foreground w-[232px] h-[45px] rounded-[8px] text-primary hover:bg-white hover:text-primary hover:border-muted-foreground">
							Continue Shopping
						</Button>
					</div>
					<div className="lg:text-[22px] lg:w-[450px] flex flex-col lg:items-center">
						<div className="lg:w-[350px]">
							<div className="flex justify-between lg:wmax md:justify-start">
								<span className="lg:w-60">Sub Total:</span>{" "}
								<span>${getCartTotal().toFixed(2)}</span>
							</div>
							<div className="mt-4 flex w-full justify-between lg:wmax md:justify-start">
								<span className="lg:w-60 block">Shipping:</span>
								<span> ${getShippingTotal().toFixed(2)}</span>
							</div>
							<div className="font-bold mt-10 flex justify-between lg:wmax md:justify-start">
								<span className="lg:w-60 block">Grand Total:</span>
								<span>${(getCartTotal() + getShippingTotal()).toFixed(2)}</span>
							</div>
						</div>
						<span className="w-full h-[1px] my-12 block bg-muted-foreground/25" />
						<Link href="/checkout">
							<Button className="text-[18px] h-[47px] w-[232px]">Proceed To Checkout</Button>
						</Link>
					</div>
				</div>
			</section>
		</main>
	);
}

const DesktopCartItemDisplay = (item: CartItemType) => {
	const { increaseItemQuantity, decreaseItemQuantity, removeItemFromCart } = useCartItems();

	const subTotal = (item.price * item.quantity).toFixed(2);
	return (
		<div className="flex items-center py-5 ">
			<div className="w-[600px] flex gap-3">
				<Link
					href={`/products/${item.gender!}/${item.id}`}
					className="rounded-[12px] overflow-hidden h-[120px] w-[105px]"
				>
					<Image
						src={item.image}
						alt={item.name}
						width={105}
						height={120}
						className="w-full h-full object-cover"
					/>{" "}
				</Link>
				<div className="flex flex-col">
					<p className="font-bold text-[18px]">{item.name}</p>
					<span className="text-muted-foreground font-medium text-[14px]">
						Color: {toSentenceCase(item.color)}
					</span>
					<span className="text-muted-foreground font-medium text-[14px]">Size: {item.size}</span>
				</div>
			</div>
			<div className="flex items-center w-full">
				<div className="w-full font-bold text-[18px] text-center">${item.price.toFixed(2)}</div>
				<div className="w-full items-center text-muted-foreground flex justify-center">
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
				<div className="w-full flex items-center justify-center">
					<span className="text-muted-foreground font-bold text-[18px]">{item.shipping}</span>
				</div>
				<div className="w-full flex items-center justify-center">
					<span className="font-bold text-[18px]">${subTotal}</span>
				</div>
				<div className="w-full flex justify-end">
					<button onClick={() => removeItemFromCart(item.id, item.size, item.color)}>
						<Trash2 />
					</button>
				</div>
			</div>
		</div>
	);
};

function MobileCartItemDisplay(item: CartItemType) {
	const { increaseItemQuantity, decreaseItemQuantity, removeItemFromCart } = useCartItems();

	return (
		<div className="w-full flex justify-between gap-x-4 h-[120px]">
			<div className="flex gap-3">
				<Link
					href={`/products/${item.gender!}/${item.id}`}
					className="rounded-[12px] overflow-hidden h-full w-[105px]"
				>
					<Image
						src={item.image}
						alt={item.name}
						width={105}
						height={120}
						className="w-full h-full object-cover"
					/>{" "}
				</Link>
				<div className="flex flex-col h-full">
					<div className="flex flex-col">
						<p className="font-bold text-[16px]">{item.name}</p>
						<span className="text-muted-foreground font-medium text-[12px]">
							Color: {toSentenceCase(item.color)}
						</span>
						<span className="text-muted-foreground font-medium text-[12px]">Size: {item.size}</span>
					</div>
					<div className="w-full font-bold text-[14px] mt-auto">${item.price.toFixed(2)}</div>
				</div>
			</div>
			<div className="flex flex-col gap-2 items-center h-full">
				<div className="flex flex-col w-max items-center bg-muted rounded-[16px] px-3 gap-1.5 py-2 text-[14px] mb-auto">
					<button onClick={() => decreaseItemQuantity(item.id, item.size, item.color)}>
						<MinusIcon className="size-[16px]" />
					</button>
					<span>{item.quantity}</span>
					<button onClick={() => increaseItemQuantity(item.id, item.size, item.color)}>
						<PlusIcon className="size-[16px]" />
					</button>
				</div>
				<button onClick={() => removeItemFromCart(item.id, item.size, item.color)}>
					<Trash2 className="size-[16px]" />
				</button>
			</div>
		</div>
	);
}
