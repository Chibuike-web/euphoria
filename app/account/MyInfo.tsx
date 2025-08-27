"use client";

import { v4 as uuidv4 } from "uuid";
import { Dispatch, SetStateAction, useCallback, useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from "@/lib/Hooks";
import ContactDetails from "./components/ContactDetails";
import Checkbox from "./components/Checkbox";

export type Address = {
	id: string;
	firstName: string;
	lastName: string;
	phoneNumber: string;
	address: string;
	type: string;
	isDefaultBilling: boolean;
	isDefaultShipping: boolean;
};

const defaultAddresses: Address[] = [
	{
		id: uuidv4(),
		firstName: "Chibuke",
		lastName: "Maduabuchi",
		phoneNumber: "8980252445",
		address: "1/4 Pragatinagar Flats, opp. Jain Derasar, near Jain Derasar, Vijaynagar road",
		type: "home",
		isDefaultBilling: true,
		isDefaultShipping: false,
	},
	{
		id: uuidv4(),
		firstName: "Chibuke",
		lastName: "Maduabuchi",
		phoneNumber: "8980252445",
		address: "1/4 Pragatinagar Flats, opp. Jain Derasar, near Jain Derasar, Vijaynagar road",
		type: "home",
		isDefaultBilling: false,
		isDefaultShipping: true,
	},
	{
		id: uuidv4(),
		firstName: "Chibuke",
		lastName: "Maduabuchi",
		phoneNumber: "8980252445",
		address: "1/4 Pragatinagar Flats, opp. Jain Derasar, near Jain Derasar, Vijaynagar road",
		type: "office",
		isDefaultBilling: false,
		isDefaultShipping: false,
	},
	{
		id: uuidv4(),
		firstName: "Chibuke",
		lastName: "Maduabuchi",
		phoneNumber: "8980252445",
		address: "1/4 Pragatinagar Flats, opp. Jain Derasar, near Jain Derasar, Vijaynagar road",
		type: "home2",
		isDefaultBilling: false,
		isDefaultShipping: false,
	},
];

export default function MyInfo() {
	const [addressList, setAddressList] = useState(defaultAddresses);
	const [isAddingAddress, setIsAddingAddress] = useState(false);
	const [isEditingAddress, setIsEditingAddress] = useState("");

	const handleAddAddress = useCallback(() => {
		setIsAddingAddress(true);
	}, [isAddingAddress]);

	const handleRemoveAddress = useCallback(
		(id: string) => {
			setAddressList((prev) => prev.filter((i) => i.id !== id));
		},
		[addressList]
	);

	return (
		<div>
			<h1 className="text-[28px] font-semibold">My Info</h1>
			{isAddingAddress ? (
				<AddAddress setAddressList={setAddressList} setIsAddingAddress={setIsAddingAddress} />
			) : (
				<ContactDetails
					addressList={addressList}
					handleAddAddress={handleAddAddress}
					handleRemoveAddress={handleRemoveAddress}
					setIsEditingAddress={setIsEditingAddress}
				/>
			)}
		</div>
	);
}

const AddAddress = ({
	setIsAddingAddress,
	setAddressList,
}: {
	setIsAddingAddress: (value: boolean) => void;
	setAddressList: Dispatch<SetStateAction<Address[]>>;
}) => {
	const { handleChange, handleCheck, store } = useForm();
	const handleSave = () => {
		let hasError = false;

		if (!store.firstName.trim()) {
			store.setFirstNameError("First name is required");
			hasError = true;
		} else {
			store.setFirstNameError("");
		}

		if (!store.lastName.trim()) {
			store.setLastNameError("Last name is required");
			hasError = true;
		} else {
			store.setLastNameError("");
		}

		if (!store.country.trim()) {
			store.setCountryError("Country/Region is required");
			hasError = true;
		} else {
			store.setCountryError("");
		}

		if (!store.street.trim()) {
			store.setStreetError("Street address is required");
			hasError = true;
		} else {
			store.setStreetError("");
		}

		if (!store.apartment.trim()) {
			store.setApartmentError("Apartment/Suite is required");
			hasError = true;
		} else {
			store.setApartmentError("");
		}

		if (!store.city.trim()) {
			store.setCityError("City is required");
			hasError = true;
		} else {
			store.setCityError("");
		}

		if (!store.state.trim()) {
			store.setStateError("State is required");
			hasError = true;
		} else {
			store.setStateError("");
		}

		if (!store.phone.trim()) {
			store.setPhoneError("Phone is required");
			hasError = true;
		} else {
			store.setPhoneError("");
		}

		if (!store.postalCode.trim()) {
			store.setPostalCodeError("Postal Code is required");
			hasError = true;
		} else {
			store.setPostalCodeError("");
		}

		if (!store.deliveryInstruction.trim()) {
			store.setDeliveryInstructionError("Delivery instruction is required");
			hasError = true;
		} else {
			store.setDeliveryInstructionError("");
		}

		if (hasError) {
			console.log("error");
			return;
		}

		const newAddress: Address = {
			id: uuidv4(),
			firstName: store.firstName,
			lastName: store.lastName,
			phoneNumber: store.phone,
			address: `${store.street} ${store.apartment} ${store.city} ${store.state} ${store.country} ${store.postalCode}`,
			type: "home",
			isDefaultBilling: store.checked && store.checkedId === "defaultBillingAddress",
			isDefaultShipping: store.checked && store.checkedId === "defaultShippingAddress",
		};

		setAddressList((prev) => [...prev, newAddress]);
		store.resetForm();
		setIsAddingAddress(false);
	};

	return (
		<>
			<p className="font-semibold text-[22px] my-5">Add Address</p>

			<div>
				<div className="grid md:grid-cols-2 gap-y-5 gap-x-10">
					<div className="flex flex-col gap-2">
						<Label htmlFor="firstName">
							First Name <span className="text-red-500">*</span>
						</Label>
						<Input
							id="firstName"
							placeholder="First Name"
							className="bg-accent border-transparent h-12 shadow-none"
							value={store.firstName}
							onChange={(e) => handleChange(e.target.id, e.target.value)}
						/>
						{store.firstNameError && (
							<span className="text-sm text-red-500">{store.firstNameError}</span>
						)}
					</div>

					<div className="flex flex-col gap-2">
						<Label htmlFor="lastName">
							Last Name <span className="text-red-500">*</span>
						</Label>
						<Input
							id="lastName"
							placeholder="Last Name"
							className="bg-accent border-transparent h-12 shadow-none"
							value={store.lastName}
							onChange={(e) => handleChange(e.target.id, e.target.value)}
						/>
						{store.lastNameError && (
							<span className="text-sm text-red-500">{store.lastNameError}</span>
						)}
					</div>

					<div className="flex flex-col gap-2">
						<Label htmlFor="country">
							Country/Region <span className="text-red-500">*</span>
						</Label>
						<Input
							id="country"
							placeholder="Country / Region"
							type="text"
							className="bg-accent border-transparent h-12 shadow-none"
							value={store.country}
							onChange={(e) => handleChange(e.target.id, e.target.value)}
						/>
						{store.countryError && (
							<span className="text-sm text-red-500">{store.countryError}</span>
						)}
					</div>
					<div className="flex flex-col gap-2">
						<Label htmlFor="companyName">Company Name</Label>
						<Input
							id="companyName"
							placeholder="Company (optional)"
							type="text"
							className="bg-accent border-transparent h-12 shadow-none"
							value={store.companyName}
							onChange={(e) => handleChange(e.target.id, e.target.value)}
						/>
					</div>
					<div className="flex flex-col gap-2">
						<Label htmlFor="street">
							Street Address <span className="text-red-500">*</span>
						</Label>
						<Input
							id="street"
							placeholder="House number and street name"
							type="text"
							className="bg-accent border-transparent h-12 shadow-none"
							value={store.street}
							onChange={(e) => handleChange(e.target.id, e.target.value)}
						/>
						{store.streetError && <span className="text-sm text-red-500">{store.streetError}</span>}
					</div>
					<div className="flex flex-col gap-2">
						<Label htmlFor="apartment">
							Apt, suite, unit <span className="text-red-500">*</span>
						</Label>
						<Input
							id="apartment"
							placeholder="Apartment suite, unit, etc (optional)"
							type="text"
							className="bg-accent border-transparent h-12 shadow-none"
							value={store.apartment}
							onChange={(e) => handleChange(e.target.id, e.target.value)}
						/>
						{store.apartmentError && (
							<span className="text-sm text-red-500">{store.apartmentError}</span>
						)}
					</div>
					<div className="flex flex-col gap-2">
						<Label htmlFor="city">
							City <span className="text-red-500">*</span>
						</Label>
						<Input
							id="city"
							placeholder="Town / City"
							type="text"
							className="bg-accent border-transparent h-12 shadow-none"
							value={store.city}
							onChange={(e) => handleChange(e.target.id, e.target.value)}
						/>
						{store.cityError && <span className="text-sm text-red-500">{store.cityError}</span>}
					</div>
					<div className="flex flex-col gap-2">
						<Label htmlFor="state">
							State <span className="text-red-500">*</span>
						</Label>
						<Input
							id="state"
							placeholder="State"
							type="text"
							className="bg-accent border-transparent h-12 shadow-none"
							value={store.state}
							onChange={(e) => handleChange(e.target.id, e.target.value)}
						/>
						{store.stateError && <span className="text-sm text-red-500">{store.stateError}</span>}
					</div>
					<div className="flex flex-col gap-2">
						<Label htmlFor="phone">
							Phone <span className="text-red-500">*</span>
						</Label>
						<Input
							id="phone"
							placeholder="Phone"
							type="text"
							className="bg-accent border-transparent h-12 shadow-none"
							value={store.phone}
							onChange={(e) => handleChange(e.target.id, e.target.value)}
						/>
						{store.phoneError && <span className="text-sm text-red-500">{store.phoneError}</span>}
					</div>
					<div className="flex flex-col gap-2">
						<Label htmlFor="postalCode">
							Postal Code <span className="text-red-500">*</span>
						</Label>
						<Input
							id="postalCode"
							placeholder="Postal Code"
							type="text"
							className="bg-accent border-transparent h-12 shadow-none"
							value={store.postalCode}
							onChange={(e) => handleChange(e.target.id, e.target.value)}
						/>
						{store.postalCodeError && (
							<span className="text-sm text-red-500">{store.postalCodeError}</span>
						)}
					</div>
				</div>

				<div className="flex flex-col gap-2 mt-6">
					<Label htmlFor="deliveryInstruction">
						Delivery Instruction <span className="text-red-500">*</span>
					</Label>
					<Textarea
						id="deliveryInstruction"
						placeholder="Delivery Instruction"
						className="bg-accent border-transparent h-12 shadow-none"
						value={store.deliveryInstruction}
						onChange={(e) => handleChange(e.target.id, e.target.value)}
					/>
					{store.deliveryInstructionError && (
						<span className="text-sm text-red-500">{store.deliveryInstructionError}</span>
					)}
				</div>

				<div className="flex flex-col gap-2 mt-4">
					{[
						{ id: "defaultShippingAddress", value: "Set as default shipping address" },
						{ id: "defaultBillingAddress", value: "Set as default billing address" },
					].map((item) => (
						<Checkbox
							key={item.id}
							id={item.id}
							checkedId={store.checkedId}
							handleCheck={handleCheck}
						>
							{item.value}
						</Checkbox>
					))}
				</div>

				<div className="flex items-center gap-4 mt-12">
					<Button className="px-8 py-[12px] font-semibold" onClick={handleSave}>
						Save
					</Button>
					<Button
						className="px-8 py-[12px] text-accent-foreground/50 font-semibold bg-accent hover:bg-accent"
						onClick={() => setIsAddingAddress(false)}
					>
						Cancel
					</Button>
				</div>
			</div>
		</>
	);
};
