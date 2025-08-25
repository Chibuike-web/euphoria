"use client";

import { v4 as uuidv4 } from "uuid";
import { useUserValue } from "../store/useUserValue";
import { useCallback, useEffect, useState } from "react";
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
				<AddAddress setAddressList={setAddressList} />
			) : (
				<ContactDetails addressList={addressList} handleAddAddress={handleAddAddress} />
			)}
		</div>
	);
}

const AddAddress = ({ setAddressList }: { setAddressList: (address: Address[]) => void }) => {
	const [checked, setChecked] = useState(false);
	const [checkedId, setCheckedId] = useState("");

	const handleCheck = (value: boolean, id: string) => {
		setChecked(value);
		setCheckedId(id);
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
						/>
					</div>

					<div className="flex flex-col gap-2">
						<Label htmlFor="lastName">
							Last Name <span className="text-red-500">*</span>
						</Label>
						<Input
							id="lastName"
							placeholder="Last Name"
							className="bg-accent border-transparent h-12 shadow-none"
						/>
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
						/>
					</div>
					<div className="flex flex-col gap-2">
						<Label htmlFor="companyName">Company Name</Label>
						<Input
							id="companyName"
							placeholder="Company (optional)"
							type="text"
							className="bg-accent border-transparent h-12 shadow-none"
						/>
					</div>
					<div className="flex flex-col gap-2">
						<Label htmlFor="streetAddress">
							Street Address <span className="text-red-500">*</span>
						</Label>
						<Input
							id="streetAddress"
							placeholder="House number and street name"
							type="text"
							className="bg-accent border-transparent h-12 shadow-none"
						/>
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
						/>
					</div>
					<div className="flex flex-col gap-2">
						<Label htmlFor="town">
							City <span className="text-red-500">*</span>
						</Label>
						<Input
							id="town"
							placeholder="Town / City"
							type="text"
							className="bg-accent border-transparent h-12 shadow-none"
						/>
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
						/>
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
						/>
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
						/>
					</div>
				</div>

				<div className="flex flex-col gap-2 mt-6">
					<Label htmlFor="instruction">
						Delivery Instruction <span className="text-red-500">*</span>
					</Label>
					<Textarea
						id="instruction"
						placeholder="Delivery Instruction"
						className="bg-accent border-transparent h-12 shadow-none"
					/>
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
					<Button className="px-8 py-[12px] font-semibold">Save</Button>
					<Button className="px-8 py-[12px] text-accent-foreground/50 font-semibold bg-accent">
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
