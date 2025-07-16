import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterLogo } from "@/app/assets/icons";
import applestore from "@/app/assets/apple-playstore-badge.svg";
import googlestore from "@/app/assets/google-playstore-badge.svg";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
export default function Footer() {
	return (
		<footer className="bg-secondary-foreground text-white py-16">
			<div className="w-full max-w-[1240px] mx-auto flex flex-col gap-14 px-6 xl:px-0">
				<div className="w-full grid grid-cols-1 gap-y-16 md:grid-cols-2 lg:grid-cols-[max-content_max-content_max-content_1fr] lg:gap-x-20">
					{footerItems.map((item) => (
						<div key={item.id} className="flex flex-col gap-6">
							<h3 className="font-bold text-[24px] md:text-[32px]">{item.heading}</h3>
							<div className="flex flex-col gap-4 text-[16px] md:text-[18px] font-medium">
								{item.subheading.map((content) =>
									"link" in content ? (
										<Link key={content.id} href={content.link}>
											{content.text}
										</Link>
									) : (
										<p key={content.id}>{content.text}</p>
									)
								)}
							</div>
						</div>
					))}
				</div>
				<div className="flex flex-col md:flex-row w-full md:justify-between gap-y-12">
					<div className="flex items-center gap-4 ">
						<span className="bg-white size-10 flex items-center justify-center rounded-[12px] text-secondary-foreground">
							<FacebookIcon className="text-secondary-foreground" />
						</span>
						<span className="bg-white size-10 flex items-center justify-center rounded-[12px] text-secondary-foreground">
							<InstagramIcon className="text-secondary-foreground" />
						</span>
						<span className="bg-white size-10 flex items-center justify-center rounded-[12px] text-secondary-foreground">
							<TwitterLogo className="text-secondary-foreground" />
						</span>
						<span className="bg-white size-10 flex items-center justify-center rounded-[12px] text-secondary-foreground">
							<LinkedinIcon className="text-secondary-foreground" />
						</span>
					</div>

					<div className="flex flex-col gap-y-4">
						<h2 className="text-[32px] font-bold">Download the App</h2>
						<div className="flex gap-x-5">
							<Image src={googlestore} alt="Google Playstore badge" width={135} height={40} />
							<Image src={applestore} alt="Apple Playstore badge" width={135} height={40} />
						</div>
					</div>
				</div>
				<p className="text-center font-bold text-[18px]">
					Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.
				</p>
			</div>
		</footer>
	);
}
type LinkSubHeading = {
	id: string;
	text: string;
	link: string;
};

type TextOnlySubHeading = {
	id: string;
	text: string;
};

type SubHeading = LinkSubHeading | TextOnlySubHeading;

type Footertype = {
	id: string;
	heading: string;
	subheading: SubHeading[];
};
const footerItems = [
	{
		id: uuidv4(),
		heading: "Need Help",
		subheading: [
			{
				id: uuidv4(),
				text: "Contact Us",
				link: "/",
			},
			{
				id: uuidv4(),
				text: "Track Order",
				link: "/",
			},
			{
				id: uuidv4(),
				text: "Returns & Refunds",
				link: "/",
			},
			{
				id: uuidv4(),
				text: "FAQs",
				link: "/",
			},
			{
				id: uuidv4(),
				text: "Careers",
				link: "/",
			},
		],
	},
	{
		id: uuidv4(),
		heading: "Company",
		subheading: [
			{
				id: uuidv4(),
				text: "About Us",
				link: "/",
			},
			{
				id: uuidv4(),
				text: "Euphoria Blog",
				link: "/",
			},
			{
				id: uuidv4(),
				text: "Euporiastan",
				link: "/",
			},
			{
				id: uuidv4(),
				text: "Collaboration",
				link: "/",
			},
			{
				id: uuidv4(),
				text: "Media",
				link: "/",
			},
		],
	},
	{
		id: uuidv4(),
		heading: "More Info",
		subheading: [
			{
				id: uuidv4(),
				text: "Terms and Conditions",
				link: "/",
			},
			{
				id: uuidv4(),
				text: "Privacy Policy",
				link: "/",
			},
			{
				id: uuidv4(),
				text: "Shipping Policy",
				link: "/",
			},
			{
				id: uuidv4(),
				text: "Sitemap",
				link: "/",
			},
		],
	},
	{
		id: uuidv4(),
		heading: "Location",
		subheading: [
			{
				id: uuidv4(),
				text: "support@euphoria.in",
			},
			{
				id: uuidv4(),
				text: "Eklingpura Chouraha, Ahmedabad Main Road",
			},
			{
				id: uuidv4(),
				text: "(NH 8- Near Mahadev Hotel) Udaipur, India- 313002",
			},
		],
	},
];
