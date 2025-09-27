import { v4 as uuidv4 } from "uuid";
import { useUserValue } from "@/app/store/useUserValue";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Address } from "../MyInfo";

type MyInfoType = {
	id: string;
	label: string;
	value: string | null;
};

export default function ContactDetails({
	addressList,
	handleAddAddress,
	handleRemoveAddress,
	setIsEditingAddress,
}: {
	addressList: Address[];
	handleAddAddress: () => void;
	handleRemoveAddress: (id: string) => void;
	setIsEditingAddress: (id: string) => void;
}) {
	const [info, setInfo] = useState<MyInfoType[] | null>(null);
	const [editingLabel, setEditingLabel] = useState<string | null>(null);
	const [formValue, setFormValue] = useState("");
	const { user } = useUserValue();

	useEffect(() => {
		const myInfo = [
			{ id: uuidv4(), label: "Name", value: user?.provider === "google" ? user?.name : null },
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
								<button onClick={() => handleRemoveAddress(item.id)}>Remove</button> |
								<button>Edit</button>
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
}
