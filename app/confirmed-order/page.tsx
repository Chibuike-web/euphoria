import Image from "next/image";
import confirmedOrderImage from "../assets/order-confirmed 1.svg";

export default function COnfirmOrder() {
	return (
		<main className="flex gap-12 max-w-[1240px] mx-auto px-6 xl:px-0 mb-[100px]">
			<Image
				src={confirmedOrderImage}
				width={967}
				height={726}
				alt="Illustration of a woman and a 'Your Order is Confirmed' pop up"
			/>
		</main>
	);
}
