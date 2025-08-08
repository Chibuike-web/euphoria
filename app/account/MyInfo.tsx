"use client";

import { v4 as uuidv4 } from "uuid";
import { useUserValue } from "../store/useUserValue";
import { useEffect, useState } from "react";

type MyInfoType = {
	id: string;
	label: string;
	value: string;
};

export default function MyInfo() {
	const { user } = useUserValue();
	const [info, setInfo] = useState<MyInfoType[] | null>(null);

	useEffect(() => {
		console.log(user);
		const myInfo = [
			{
				id: uuidv4(),
				label: "Your Name",
				value: "",
			},
			{
				id: uuidv4(),
				label: "Email Address",
				value: `${user?.email}`,
			},
			{
				id: uuidv4(),
				label: "Phone Number",
				value: "",
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
			<p>Contact Details</p>
			<div>
				{info?.map((item) => (
					<div key={item.id}>
						<div>
							<span>{item.label}</span>
							<span>{item.value}</span>
						</div>
						<button>Change</button>
					</div>
				))}
			</div>
		</div>
	);
}
