"use client";

import { v4 as uuidv4 } from "uuid";
import { useUserValue } from "../store/useUserValue";
import { useEffect, useState } from "react";

type MyInfoType = {
	id: string;
	label: string;
	value: string | null;
};

export default function MyInfo() {
	const { user } = useUserValue();
	const [info, setInfo] = useState<MyInfoType[] | null>(null);

	useEffect(() => {
		const myInfo = [
			{
				id: uuidv4(),
				label: "Your Name",
				value: null,
			},
			{
				id: uuidv4(),
				label: "Email Address",
				value: `${user?.email}`,
			},
			{
				id: uuidv4(),
				label: "Phone Number",
				value: null,
			},
			{
				id: uuidv4(),
				label: "Password",
				value: `${user?.password}`,
			},
		];
		setInfo(myInfo);
	}, [user]);
	return (
		<div>
			<h1 className="text-[28px] font-semibold">My Info</h1>
			<p className="font-semibold text-[22px] my-5">Contact Details</p>
			<div className="flex flex-col gap-6">
				{info?.map((item) => (
					<div
						key={item.id}
						className="flex w-full items-center justify-between pb-[20px] border-b border-black/15"
					>
						<div className="flex flex-col text-[18px]">
							<span className="text-black/50">{item.label}</span>
							<span className="font-medium">{item.value || `Enter your ${item.label}`}</span>
						</div>
						<button>Change</button>
					</div>
				))}
			</div>
		</div>
	);
}
