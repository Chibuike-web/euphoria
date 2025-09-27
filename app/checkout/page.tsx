"use client";

import { ChevronRight } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { toSentenceCase } from "../utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "../account/components/Checkbox";
import React, { Suspense } from "react";

export default function Checkout() {
	const pathname = usePathname();
	return (
		<main>
			<div className=" max-w-[1240px] mx-auto px-6 xl:px-0 my-8 flex items-center gap-2">
				<span className="text-muted-foreground">Home</span>
				<span className="text-muted-foreground">
					<ChevronRight />
				</span>
				<span className="text-muted-foreground">My Account</span>
				<span className="text-muted-foreground">
					<ChevronRight />
				</span>
				<span className="font-medium">{toSentenceCase(pathname.split("/")[1])}</span>
			</div>
			<section className="flex flex-col gap-12 max-w-[1240px] mx-auto px-6 xl:px-0 mb-[100px]">
				<div className="w-full flex gap-[38xpx] items-end">
					<div className=" w-full max-w-[802px]">
						<h3 className="flex items-center gap-[20px] mb-2 text-[clamp(1.25rem,2vh,1.5rem)]">
							<span className="block h-[30px] w-[6px] rounded-full bg-[#8a33fd]" />
							<span className="font-semibold">Checkout</span>
						</h3>
						<BillingDetails />
					</div>
					<div></div>
				</div>
				<div className="w-full max-w-[802px] flex flex-col gap-8">
					<ShippingAddress />
					<span className="block h-[1px] w-full bg-foreground/4" />
					<ShippingMethod />
					<span className="block h-[1px] w-full bg-foreground/4" />
					<Suspense>
						<PaymentMethod />
					</Suspense>
				</div>
			</section>
		</main>
	);
}

const BillingDetails = () => {
	return (
		<>
			<p className="font-semibold text-[22px] mb-4">Billing Details</p>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-[38px]">
				<div className="w-full">
					<Label htmlFor="firstName" className="mb-2">
						First Name<span aria-hidden>*</span>
					</Label>
					<Input
						id="firstName"
						name="firstName"
						type="text"
						placeholder="First Name"
						className="bg-accent border-transparent h-12 shadow-none"
					/>
				</div>
				<div>
					<Label htmlFor="lastName" className="mb-2">
						Last Name<span aria-hidden>*</span>
					</Label>
					<Input
						id="lastName"
						name="lastName"
						type="text"
						placeholder="Last Name"
						className="bg-accent border-transparent h-12 shadow-none"
					/>
				</div>
				<div>
					<Label htmlFor="country" className="mb-2">
						Country / Region<span aria-hidden>*</span>
					</Label>
					<Input
						id="country"
						name="country"
						type="text"
						placeholder="Country  Region"
						className="bg-accent border-transparent h-12 shadow-none"
					/>
				</div>
				<div>
					<Label htmlFor="companyName" className="mb-2">
						Company Name<span aria-hidden>*</span>
					</Label>
					<Input
						id="companyName"
						name="companyName"
						type="text"
						placeholder="Company(optional)"
						className="bg-accent border-transparent h-12 shadow-none"
					/>
				</div>
				<div>
					<Label htmlFor="streetAddress" className="mb-2">
						Street Address<span aria-hidden>*</span>
					</Label>
					<Input
						id="streetAddress"
						name="streetAddress"
						type="text"
						placeholder="House number and street name"
						className="bg-accent border-transparent h-12 shadow-none"
					/>
				</div>
				<div>
					<Label htmlFor="apartment" className="mb-2">
						Apt, suite, unit
					</Label>
					<Input
						id="apartment"
						name="apartment"
						type="text"
						placeholder="apartment, suite, unit, etc. (optional)"
						className="bg-accent border-transparent h-12 shadow-none"
					/>
				</div>
			</div>
			{/* City */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[38px] mt-[38px] mb-[38px]">
				<div>
					<Label htmlFor="city" className="mb-2">
						City<span aria-hidden>*</span>
					</Label>
					<Input
						id="city"
						name="city"
						type="text"
						placeholder="City"
						className="bg-accent border-transparent h-12 shadow-none"
					/>
				</div>
				<div>
					<Label htmlFor="state" className="mb-2">
						State<span aria-hidden>*</span>
					</Label>
					<Input
						id="state"
						name="state"
						type="text"
						placeholder="State"
						className="bg-accent border-transparent h-12 shadow-none"
					/>
				</div>
				<div>
					<Label htmlFor="postalCode" className="mb-2">
						Postal Code<span aria-hidden>*</span>
					</Label>
					<Input
						id="postalCode"
						name="postalCode"
						type="text"
						placeholder="Postal Code"
						className="bg-accent border-transparent h-12 shadow-none"
					/>
				</div>
			</div>
			<div className="max-w-[382px]">
				<Label htmlFor="phoneNumber" className="mb-2">
					Phone<span aria-hidden>*</span>
				</Label>
				<Input
					id="phoneNumber"
					name="phoneNumber"
					type="text"
					placeholder="Phone Number"
					className="bg-accent border-transparent h-12 shadow-none"
				/>
			</div>
			<div className="mt-10">
				<Button className="h-12">Continue to delivery</Button>
				<Checkbox id="save" name="save" className="mt-4">
					Save my information for a faster checkout
				</Checkbox>
			</div>
		</>
	);
};

const ShippingAddress = () => {
	return (
		<div>
			<p className="font-semibold text-[22px] mb-4">Shipping Address</p>
			<p>Select the address that matches your card or payment method.</p>
			<div className="flex flex-col gap-5 bg-foreground/6 rounded-2xl px-6 py-8 mt-6">
				<RadioButton id="sameBillingAddress" name="shippingAdress">
					<span className="text-[20px] font-bold">Same as Billing addresss</span>
				</RadioButton>
				<span className="block h-[1px] w-full bg-[#bebcbd]" />
				<RadioButton id="differentBillingAddress" name="shippingAdress">
					<span className="text-[20px] font-bold">Use a different shipping address</span>
				</RadioButton>
			</div>
		</div>
	);
};

const ShippingMethod = () => {
	return (
		<div>
			<p className="font-semibold text-[22px] mb-4">Shipping Method</p>
			<div className="flex flex-col gap-5 bg-foreground/6 rounded-2xl px-6 py-8 mt-6">
				<p className="font-bold text-[20px]">Arrives by Monday, June 7</p>
				<span className="block h-[1px] w-full bg-[#bebcbd]" />
				<div className="flex items-start justify-between">
					<div className="flex flex-col">
						<p className="font-bold text-[20px]">Delivery Charges</p>
						<p>Additional Fees may apply</p>
					</div>
					<p className="font-bold text-[20px]">$5.00</p>
				</div>
			</div>
		</div>
	);
};

const PaymentMethod = () => {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const paymentMethod = searchParams.get("payment-method");
	const router = useRouter();

	return (
		<div>
			<p className="font-semibold text-[22px] mb-4">Payment Method</p>
			<p>All transactions are secure and encrypted.</p>

			<div className="flex flex-col gap-5 bg-foreground/6 rounded-2xl px-6 py-8 mt-6">
				{paymentMethods.map((p, index) => (
					<React.Fragment key={p.id}>
						<div key={p.id}>
							<RadioButton
								key={p.id}
								id={p.id}
								value={p.id}
								isChecked={paymentMethod === p.id}
								onChange={() => {
									const params = new URLSearchParams(searchParams);
									params.set("payment-method", `${p.id}`);
									router.replace(`${pathname}?${params.toString()}`, { scroll: false });
								}}
								name="paymentMethod"
							>
								<div>
									<p className="text-[20px] font-bold">{p.text}</p>
									<p>{p.subText}</p>
								</div>
							</RadioButton>
							{paymentMethod === p.id && (
								<div className="ml-6 mt-2">
									{p.id === "credit-card" && <CreditCard />}
									{p.id === "cash-on-delivery" && <CashOnDelivery />}
									{p.id === "paypal" && <PayPal />}
								</div>
							)}
						</div>
						{index < paymentMethods.length - 1 && (
							<span className="block h-[1px] w-full bg-foreground/10" />
						)}
					</React.Fragment>
				))}
			</div>
			<Button className="h-12 mt-8">Pay Now</Button>
		</div>
	);
};

const CreditCard = () => {
	return (
		<div>
			<div className="grid grid-cols-2 gap-8 pr-8">
				<Label>
					<Input className="h-12 border-foreground" placeholder="Card number" />
				</Label>
				<Label>
					<Input className="h-12 border-foreground" placeholder="Name of card" />
				</Label>
				<Label>
					<Input className="h-12 border-foreground" placeholder="Expiration date (MM/YY)" />
				</Label>
				<Label>
					<Input className="h-12 border-foreground" placeholder="Security Code" />
				</Label>
			</div>
		</div>
	);
};

const CashOnDelivery = () => {
	return <div>Ebube</div>;
};
const PayPal = () => {
	return <div>Ebuka</div>;
};

const paymentMethods = [
	{
		id: "credit-card",
		text: "Credit Card",
		subText: "All transactions are secure and encrypted.",
	},
	{
		id: "cash-on-delivery",
		text: "Cash on delivery",
		subText: "Pay with cash upon delivery.",
	},
	{
		id: "paypal",
		text: "PayPal",
		subText: "All transactions ae secure and encrypted.",
	},
];

type RadioButtonPropsType = {
	id: string;
	isChecked?: boolean;
	name: string;
	value?: string;
	children: React.ReactNode;
	onChange?: (value: string) => void;
};

const RadioButton = ({ children, id, value, isChecked, name, onChange }: RadioButtonPropsType) => {
	return (
		<label className="flex items-center gap-2 cursor-pointer group" htmlFor={id}>
			<input
				type="radio"
				id={id}
				name={name}
				value={value}
				checked={isChecked}
				className="sr-only"
				onChange={(e) => onChange && onChange(e.target.value)}
			/>
			<div className="border border-foreground rounded-full size-[18px] flex items-center justify-center">
				<span className="block size-[10px] rounded-full bg-transparent group-has-[:checked]:bg-foreground/60 " />
			</div>
			{children}
		</label>
	);
};
