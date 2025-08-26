"use client";

import { v4 as uuidv4 } from "uuid";
import { useUserValue } from "../store/useUserValue";
import { Dispatch, SetStateAction, useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

type MyInfoType = {
	id: string;
	label: string;
	value: string | null;
};

type Address = {
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

	const handleAddAddress = useCallback(() => {
		setIsAddingAddress(true);
	}, []);

	return (
		<div>
			<h1 className="text-[28px] font-semibold">My Info</h1>
			{isAddingAddress ? (
				<AddAddress setAddressList={setAddressList} setIsAddingAddress={setIsAddingAddress} />
			) : (
				<ContactDetails addressList={addressList} handleAddAddress={handleAddAddress} />
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
	const [checked, setChecked] = useState(false);
	const [checkedId, setCheckedId] = useState("");
	const [firstName, setFirstName] = useState("");
	const [firstNameError, setFirstNameError] = useState("");
	const [lastName, setLastName] = useState("");
	const [lastNameError, setLastNameError] = useState("");
	const [country, setCountry] = useState("");
	const [countryError, setCountryError] = useState("");
	const [companyName, setCompanyName] = useState("");
	const [street, setStreet] = useState("");
	const [streetError, setStreetError] = useState("");
	const [apartment, setApartment] = useState("");
	const [apartmentError, setApartmentError] = useState("");
	const [city, setCity] = useState("");
	const [cityError, setCityError] = useState("");
	const [state, setState] = useState("");
	const [stateError, setStateError] = useState("");
	const [phone, setPhone] = useState("");
	const [phoneError, setPhoneError] = useState("");
	const [postalCode, setPostalCode] = useState("");
	const [postalCodeError, setPostalCodeError] = useState("");
	const [deliveryInstruction, setDeliveryInstruction] = useState("");
	const [deliveryInstructionError, setDeliveryInstructionError] = useState("");

	const handleCheck = (value: boolean, id: string) => {
		setChecked(value);
		setCheckedId(id);
	};

	const handleChange = (id: string, value: string) => {
		switch (id) {
			case "firstName":
				setFirstName(value);
				if (firstNameError && value.trim() !== "") setFirstNameError("");
				break;
			case "lastName":
				setLastName(value);
				if (lastNameError && value.trim() !== "") setLastNameError("");
				break;
			case "country":
				setCountry(value);
				if (countryError && value.trim() !== "") setCountryError("");
				break;
			case "companyName":
				setCompanyName(value);
				break;
			case "street":
				setStreet(value);
				if (streetError && value.trim() !== "") setStreetError("");
				break;
			case "apartment":
				setApartment(value);
				if (apartmentError && value.trim() !== "") setApartmentError("");
				break;
			case "city":
				setCity(value);
				if (cityError && value.trim() !== "") setCityError("");
				break;
			case "state":
				setState(value);
				if (stateError && value.trim() !== "") setStateError("");
				break;
			case "phone":
				setPhone(value);
				if (phoneError && value.trim() !== "") setPhoneError("");
				break;
			case "postalCode":
				setPostalCode(value);
				if (postalCodeError && value.trim() !== "") setPostalCodeError("");
				break;
			case "deliveryInstruction":
				setDeliveryInstruction(value);
				if (deliveryInstruction && value.trim() !== "") setDeliveryInstructionError("");
				break;
			default:
				console.log("Not available");
		}
	};

	const handleSave = () => {
		let hasError = false;

		if (!firstName.trim()) {
			setFirstNameError("First name is required");
			hasError = true;
		} else {
			setFirstNameError("");
		}

		if (!lastName.trim()) {
			setLastNameError("Last name is required");
			hasError = true;
		} else {
			setLastNameError("");
		}

		if (!country.trim()) {
			setCountryError("Country/Region is required");
			hasError = true;
		} else {
			setCountryError("");
		}

		if (!street.trim()) {
			setStreetError("Street address is required");
			hasError = true;
		} else {
			setStreetError("");
		}

		if (!apartment.trim()) {
			setApartmentError("Apartment/Suite is required");
			hasError = true;
		} else {
			setApartmentError("");
		}

		if (!city.trim()) {
			setCityError("City is required");
			hasError = true;
		} else {
			setCityError("");
		}

		if (!state.trim()) {
			setStateError("State is required");
			hasError = true;
		} else {
			setStateError("");
		}

		if (!phone.trim()) {
			setPhoneError("Phone is required");
			hasError = true;
		} else {
			setPhoneError("");
		}

		if (!postalCode.trim()) {
			setPostalCodeError("Postal Code is required");
			hasError = true;
		} else {
			setPostalCodeError("");
		}

		if (!deliveryInstruction.trim()) {
			setDeliveryInstructionError("Delivery instruction is required");
			hasError = true;
		} else {
			setDeliveryInstructionError("");
		}

		if (hasError) {
			console.log("error");
			return;
		}

		const newAddress: Address = {
			id: uuidv4(),
			firstName,
			lastName,
			phoneNumber: phone,
			address: `${street} ${apartment} ${city} ${state} ${country} ${postalCode}`,
			type: "home",
			isDefaultBilling: checked && checkedId === "defaultBillingAddress",
			isDefaultShipping: checked && checkedId === "defaultShippingAddress",
		};

		setAddressList((prev) => [...prev, newAddress]);
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
							value={firstName}
							onChange={(e) => handleChange(e.target.id, e.target.value)}
						/>
						{firstNameError && <span className="text-sm text-red-500">{firstNameError}</span>}
					</div>

					<div className="flex flex-col gap-2">
						<Label htmlFor="lastName">
							Last Name <span className="text-red-500">*</span>
						</Label>
						<Input
							id="lastName"
							placeholder="Last Name"
							className="bg-accent border-transparent h-12 shadow-none"
							value={lastName}
							onChange={(e) => handleChange(e.target.id, e.target.value)}
						/>
						{lastNameError && <span className="text-sm text-red-500">{lastNameError}</span>}
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
							value={country}
							onChange={(e) => handleChange(e.target.id, e.target.value)}
						/>
						{countryError && <span className="text-sm text-red-500">{countryError}</span>}
					</div>
					<div className="flex flex-col gap-2">
						<Label htmlFor="companyName">Company Name</Label>
						<Input
							id="companyName"
							placeholder="Company (optional)"
							type="text"
							className="bg-accent border-transparent h-12 shadow-none"
							value={companyName}
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
							value={street}
							onChange={(e) => handleChange(e.target.id, e.target.value)}
						/>
						{streetError && <span className="text-sm text-red-500">{streetError}</span>}
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
							value={apartment}
							onChange={(e) => handleChange(e.target.id, e.target.value)}
						/>
						{apartmentError && <span className="text-sm text-red-500">{apartmentError}</span>}
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
							value={city}
							onChange={(e) => handleChange(e.target.id, e.target.value)}
						/>
						{cityError && <span className="text-sm text-red-500">{cityError}</span>}
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
							value={state}
							onChange={(e) => handleChange(e.target.id, e.target.value)}
						/>
						{stateError && <span className="text-sm text-red-500">{stateError}</span>}
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
							value={phone}
							onChange={(e) => handleChange(e.target.id, e.target.value)}
						/>
						{phoneError && <span className="text-sm text-red-500">{phoneError}</span>}
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
							value={postalCode}
							onChange={(e) => handleChange(e.target.id, e.target.value)}
						/>
						{postalCodeError && <span className="text-sm text-red-500">{postalCodeError}</span>}
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
						value={deliveryInstruction}
						onChange={(e) => handleChange(e.target.id, e.target.value)}
					/>
					{deliveryInstructionError && (
						<span className="text-sm text-red-500">{deliveryInstructionError}</span>
					)}
				</div>

				<div className="flex flex-col gap-2 mt-4">
					{[
						{ id: "defaultShippingAddress", value: "Set as default shipping address" },
						{ id: "defaultBillingAddress", value: "Set as default billing address" },
					].map((item) => (
						<Checkbox key={item.id} id={item.id} checkedId={checkedId} handleCheck={handleCheck}>
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

function Checkbox({
	id,
	children,
	checkedId,
	handleCheck,
}: {
	id: string;
	children: React.ReactNode;
	checkedId: string;
	handleCheck: (value: boolean, id: string) => void;
}) {
	return (
		<label htmlFor={id} className="relative flex items-center gap-2 cursor-pointer select-none">
			<input
				type="checkbox"
				id={id}
				className="sr-only"
				onChange={(e) => handleCheck(e.target.checked, e.target.id)}
			/>
			<span
				className={cn(
					"size-4 flex items-center justify-center border rounded-[4px] transition-colors",
					checkedId === id ? "bg-primary border-primary" : "bg-transparent border-input"
				)}
			>
				{checkedId === id && <Check className="text-white w-3 h-3" />}
			</span>

			<span>{children}</span>
		</label>
	);
}

const ContactDetails = ({
	addressList,
	handleAddAddress,
}: {
	addressList: Address[];
	handleAddAddress: () => void;
}) => {
	const [info, setInfo] = useState<MyInfoType[] | null>(null);
	const [editingLabel, setEditingLabel] = useState<string | null>(null);
	const [formValue, setFormValue] = useState("");
	const { user } = useUserValue();

	useEffect(() => {
		const myInfo = [
			{ id: uuidv4(), label: "Name", value: null },
			{ id: uuidv4(), label: "Email Address", value: user?.email ?? null },
			{ id: uuidv4(), label: "Phone Number", value: null },
			{
				id: uuidv4(),
				label: "Password",
				value: user?.provider === "email" ? user?.password ?? null : "",
			},
		];
		setInfo(myInfo);
	}, [user]);

	const handleChange = (item: MyInfoType) => {
		setEditingLabel(item.label);
		setFormValue(item.value ?? "");
	};

	const handleSave = (id: string) => {
		setInfo((prev) =>
			prev
				? prev.map((item) => (item.id === id ? { ...item, value: formValue || null } : item))
				: prev
		);
		setEditingLabel(null);
		setFormValue("");
	};

	return (
		<>
			<p className="font-semibold text-[22px] my-5">Contact Details</p>
			<div className="flex flex-col gap-6">
				{info?.map((item) => (
					<div
						key={item.id}
						className="flex flex-col items-start gap-y-4 w-full md:flex-row md:items-end justify-between pb-[20px] border-b border-black/15"
					>
						<div className="flex flex-col text-[18px] w-full">
							<span className="text-black/50">{item.label}</span>
							{editingLabel === item.label ? (
								<Input
									type={item.label === "Password" ? "password" : "text"}
									placeholder={`Enter your ${item.label}`}
									value={formValue}
									onChange={(e) => setFormValue(e.target.value)}
									className="w-full md:w-[350px]"
								/>
							) : (
								<span className={cn("font-medium", !item.value && "text-accent-foreground/25")}>
									{item.value || `${item.label}`}
								</span>
							)}
						</div>
						{editingLabel === item.label ? (
							<button
								onClick={() => handleSave(item.id)}
								className="bg-primary text-white px-3 py-1 rounded-[8px]"
							>
								Save
							</button>
						) : (
							<button onClick={() => handleChange(item)}>Change</button>
						)}
					</div>
				))}
			</div>

			<div>
				<div className="flex items-center justify-between w-full my-5">
					<p className="font-semibold text-[22px]">Address</p>
					<button onClick={handleAddAddress}>Add New</button>
				</div>

				<div className="grid md:grid-cols-2 gap-6">
					{addressList.map((item) => (
						<div key={item.id} className="bg-accent px-6 py-4 rounded-[14px]">
							<div className="flex items-center gap-1.5 mb-[20px] font-semibold ">
								<span>{item.firstName}</span>
								<span>{item.lastName}</span>
							</div>
							<div className="font-medium mb-[18px]">{item.phoneNumber}</div>
							<div>{item.address}</div>
							<div className="flex items-center gap-4 my-4">
								<span className="border border-accent-foreground/50 px-[10px] py-1 rounded-[6px]">
									{item.type}
								</span>

								{item.isDefaultBilling ? (
									<span className="border border-accent-foreground/50 px-[10px] py-1 rounded-[6px]">
										Default billing address
									</span>
								) : item.isDefaultShipping ? (
									<span className="border border-accent-foreground/50 px-[10px] py-1 rounded-[6px]">
										Default shipping address
									</span>
								) : null}
							</div>
							<div className="flex items-center gap-1.5 font-semibold">
								<button>Remove</button> | <button>Edit</button>
								{!item.isDefaultBilling && !item.isDefaultShipping && (
									<>
										| <span>Set as Default</span>
									</>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};
