"use client";
import { useParams } from "next/navigation";

export default function ProductDetail() {
	const { gender, id } = useParams();
	return (
		<div>
			{gender} - {id}
		</div>
	);
}
