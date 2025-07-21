import React from "react";
import hero from "@/app/assets/home/hero-image.jpg";
import { ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";
import { brandLogos, feedback, getStars, promoCardItems } from "./utils";
import type { AllProductsType, Feedback, PromoCardType } from "./types";
import Image from "next/image";
import { cn } from "@/lib/utils";
import ctaFirstImage from "@/app/assets/home/first-cta/cta-first-image.png";
import ctaSecondImage from "@/app/assets/home/first-cta/cta-second-image.png";
import ProductCard from "@/components/ProductCard";
import { Star, StarHalf } from "lucide-react";

const categories = [
	{ id: "shirts", label: "Shirts" },
	{ id: "printed-tees", label: "Printed T-shirts" },
	{ id: "plain-tees", label: "Plain T-shirts" },
	{ id: "polo", label: "Polo Shirts" },
	{ id: "hoodies", label: "Hoodies & Sweatshirtss" },
	{ id: "shorts", label: "Shorts" },
	{ id: "jeans", label: "Jeans" },
	{ id: "activewear", label: "Activewear" },
	{ id: "coats", label: "Coats & Jackets" },
	{ id: "tees", label: "Tees & T-shirts " },
	{ id: "boxers", label: "Boxers" },
	{ id: "joggers", label: "Joggers" },
];

export default async function Home() {
	const res = await fetch("http://localhost:3000/api/products");
	const json = await res.json();
	const allProducts: AllProductsType[] = json.data;
	return (
		<main>
			<section
				className="w-full relative bg-cover bg-center bg-no-repeat h-[450px] lg:h-[750px] flex items-center"
				style={{ backgroundImage: `url(${hero.src})` }}
			>
				<div className="w-full relative max-w-[1386px] mx-auto flex pl-10 lg:pl-[153px]">
					<button className="absolute left-2 lg:left-6 top-1/2 -translate-y-1/2">
						<ArrowLeft className="size-5 lg:size-10 text-white" />
					</button>
					<button className="absolute right-2 lg:right-6 top-1/2 -translate-y-1/2">
						<ArrowRight className="size-5 lg:size-10 text-white" />
					</button>
					<div className="w-full max-w-[300px] lg:max-w-[440px]">
						<p className="text-white text-[16px] lg:text-[32px] mb-4">T-shirt / Tops</p>
						<h1 className="text-white font-extrabold text-[48px] lg:text-[78px] leading-[1.2] mb-4">
							Summer Value Pack
						</h1>
						<p className="text-white text-[16px] lg:text-[32px] mb-10">cool/colorful/comfy</p>
						<button className="py-2 px-[32px] lg:py-4 lg:px-[72px] rounded-[8px] bg-white text-[16px] lg:text-[24px] font-bold">
							Shop Now
						</button>
					</div>
				</div>
				<div className="w-[126px] h-[8px] rounded-full bg-white/40 absolute bottom-6 lg:bottom-10 left-1/2 -translate-x-1/2 overflow-hidden">
					<span className="block h-full w-1/2 bg-white" />
				</div>
			</section>

			<section className="flex gap-6 flex-wrap w-full max-w-[1240px] mx-auto mt-[130px] px-6 xl:px-0">
				{promoCardItems.map((item) => (
					<PromoCard
						key={item.id}
						id={item.id}
						image={item.image}
						label={item.label}
						title={item.title}
						promo={item.promo}
						cta={item.cta}
					/>
				))}
			</section>
			<section className="flex flex-col gap-6 w-full max-w-[1240px] mx-auto mt-[130px] px-6 xl:px-0">
				<h3 className="flex items-center gap-[20px]">
					<span className="block h-[30px] w-[6px] rounded-full bg-[#8a33fd]" />{" "}
					<span className=" text-[24px] md:text-[34px] font-semibold">New Arrival</span>
				</h3>
				<div className="w-full relative">
					<ArrowLeft className="flex-shrink-0 absolute left-0 top-[120px]" />
					<div className="flex w-full gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth px-8">
						{allProducts
							.filter((item) => item.tags?.[0].section === "NewArrival")
							.map((i) => (
								<NewArrivalCard key={i.id} id={i.id} name={i.name} image={i.image} />
							))}
					</div>
					<ArrowRight className="flex-shrink-0 absolute right-0 top-[120px]" />
				</div>
			</section>
			<section className="flex flex-col gap-6 w-full max-w-[1240px] mx-auto mt-[130px] px-6 xl:px-0">
				<h3 className="flex items-center gap-[20px]">
					<span className="block h-[30px] w-[6px] rounded-full bg-[#8a33fd]" />{" "}
					<span className=" text-[24px] md:text-[34px] font-semibold">Big Saving Zone</span>
				</h3>

				<div className="flex flex-wrap gap-6">
					{allProducts
						.filter((item) => item.tags?.[0].section === "BigSavingZone")
						.map((i, index) => (
							<BigSavingZoneCard key={i.id} {...i} index={index} />
						))}
				</div>
			</section>

			<section className=" max-w-[1240px] mx-auto mt-[130px] px-6 xl:px-0 ">
				<div className="flex flex-col lg:flex-row w-full rounded-[16px] overflow-hidden">
					<figure
						className=" w-full py-20 md:py-[160px] px-9 md:px-18 lg:max-w-[614px] text-white bg-cover bg-center bg-no-repeat"
						style={{ backgroundImage: `url(${ctaFirstImage.src})` }}
					>
						<div className=" h-full flex flex-col ">
							<h3 className="font-extrabold text-[24px] sm:text-[34px] mb-4 md:mb-8">
								WE MADE YOUR EVERYDAY FASHION BETTER!
							</h3>
							<p className="mb-6 md:mb-12">
								In our journey to improve everyday fashion, euphoria presents EVERYDAY wear range -
								Comfortable & Affordable fashion 24/7
							</p>
							<button className="px-[44px] py-[12px] rounded-[8px] w-max bg-white text-secondary-foreground">
								Shop Now
							</button>
						</div>
					</figure>
					<figure className="w-full lg:max-w-[626px]">
						<Image src={ctaSecondImage} alt="" className="w-full h-full object-cover" />
					</figure>
				</div>
			</section>
			<section className="flex flex-col gap-6 w-full max-w-[1240px] mx-auto mt-[130px] px-6 xl:px-0">
				<h3 className="flex items-center gap-[20px]">
					<span className="block h-[30px] w-[6px] rounded-full bg-[#8a33fd]" />{" "}
					<span className=" text-[24px] md:text-[34px] font-semibold">Categories For Men</span>
				</h3>

				<div className="grid grid-cols-[repeat(auto-fill,minmax(270px,1fr))] gap-12">
					{allProducts
						.filter((item) => item.gender === "men")
						.slice(0, 8)
						.map((i) => (
							<HomeProductCard key={i?.id} {...i} />
						))}
				</div>
			</section>
			<section className="flex flex-col gap-6 w-full max-w-[1240px] mx-auto mt-[130px] px-6 xl:px-0">
				<h3 className="flex items-center gap-[20px]">
					<span className="block h-[30px] w-[6px] rounded-full bg-[#8a33fd]" />{" "}
					<span className=" text-[24px] md:text-[34px] font-semibold">Categories For Women</span>
				</h3>

				<div className="grid grid-cols-[repeat(auto-fill,minmax(270px,1fr))] gap-12">
					{allProducts
						.filter((item) => item.gender === "women")
						.slice(0, 4)
						.map((i) => (
							<HomeProductCard key={i.id} {...i} />
						))}
				</div>
			</section>
			<section className="px-6 xl:px-0 overflow-hidden">
				<div className="flex flex-col gap-6 w-full max-w-[1240px] py-8 md:py-12 text-white bg-secondary-foreground rounded-[20px] mx-auto mt-[130px]">
					<div className="flex flex-col items-center">
						<h3 className="text-center gap-[20px] font-bold text-[48px]">Top Brand Deal</h3>
						<p className="text-center mt-6">
							Up to <span>60%</span> off on brands
						</p>

						<div className="flex items-center justify-center gap-6 mt-16 overflow-auto w-full">
							{brandLogos.map((item) => (
								<span
									key={item.id}
									className="flex items-center justify-center rounded-[10px] bg-white min-w-[176px] h-[86px]"
								>
									<Image src={item.image} alt="" />
								</span>
							))}
						</div>
					</div>
				</div>
			</section>
			<section className="flex flex-col gap-6 w-full max-w-[1240px] mx-auto mt-[130px] px-6 xl:px-0">
				<h3 className="flex items-center gap-[20px]">
					<span className="block h-[30px] w-[6px] rounded-full bg-[#8a33fd]" />{" "}
					<span className=" text-[24px] md:text-[34px] font-semibold">In The Limelight</span>
				</h3>

				<div className="grid grid-cols-[repeat(auto-fill,minmax(270px,1fr))] gap-12">
					{allProducts
						.filter((item) => item.tags?.[0].section === "InTheLimelight")
						.map((i) => (
							<ProductCard key={i.id} {...i} />
						))}
				</div>
			</section>
			<section className="flex flex-col gap-6 w-full max-w-[1240px] mx-auto my-[130px] px-6 xl:px-0">
				<h3 className="flex items-center gap-[20px]">
					<span className="block h-[30px] w-[6px] rounded-full bg-[#8a33fd]" />{" "}
					<span className=" text-[24px] md:text-[34px] font-semibold">Feedback</span>
				</h3>
				<div className="flex overflow-x-auto gap-x-5.5">
					{feedback.map((item) => (
						<Feedback key={item.id} {...item} />
					))}
				</div>
			</section>
		</main>
	);
}

function PromoCard({ image, label, title, promo, cta }: PromoCardType) {
	return (
		<article
			className="w-full md:flex-1 relative overflow-hidden rounded-[16px] py-12 px-8 text-white bg-cover bg-center bg-no-repeat"
			style={{ backgroundImage: `url(${typeof image === "string" ? image : image.src})` }}
		>
			<span className="block font-medium mb-4">{label}</span>
			<h3 className="text-[36px] font-bold mb-4 w-full max-w-[300px] leading-[1.2]">{title}</h3>
			<p className="font-medium mb-10">{promo}</p>
			<a className="underline font-semibold">{cta.label}</a>
		</article>
	);
}

function NewArrivalCard({ name, image }: AllProductsType) {
	return (
		<article className="w-full min-w-[220px] snap-center">
			<Image src={image} alt={name} className="rounded-[24px] w-full" width={262} height={262} />
			<p className="mt-5 font-semibold text-[16px] md:text-[20px]">{name}</p>
		</article>
	);
}

type BigSavingZoneProps = AllProductsType & {
	index: number;
};

function BigSavingZoneCard({ name, desc, image, promo, custom, index }: BigSavingZoneProps) {
	const articleStyles = [
		" px-8 text-white",
		"items-end  px-8 text-white",
		"items-end  px-8 text-black",
		"items-end px-8 md:px-16 text-black",
		"items-end px-8 md:px-16 text-black",
	];

	let styles = articleStyles[index];

	return (
		<article
			className={cn(
				"w-full relative flex flex-col justify-center flex-1 h-[393px] min-w-[200px] md:min-w-[300px] overflow-hidden rounded-[16px] bg-cover bg-center bg-no-repeat",
				styles
			)}
			style={{
				backgroundImage: `url(${typeof image === "string" ? image : image.src})`,
			}}
		>
			<div className="flex flex-col w-[164px]">
				{custom && (
					<span className="bg-foreground w-[104px] h-[34px] rounded-[4px] flex items-center text-[12px] justify-center mb-6">
						Limited Stock
					</span>
				)}
				<h3 className="font-semibold text-[28px] mb-[8px]">{name}</h3>
				<p className="font-semibold mb-[6px] text-[12px]">{desc}</p>
				<p className="font-bold text-[18px] mb-8">{promo}</p>
				<ArrowDown className="ml-12 " />
				<button
					className={cn(
						"w-[111px] h-[34px] rounded-[4px] border border-white mt-10",
						{
							"border-black": index === 2 || index === 3 || index === 4,
						},
						{
							"mt-6": custom,
						}
					)}
				>
					SHOP NOW
				</button>
			</div>
		</article>
	);
}

function HomeProductCard({ name, image, category }: AllProductsType) {
	let title = "";

	for (const c of categories) {
		if (c.id === category) {
			title = c.label;
			break;
		}
	}
	return (
		<article>
			<Image src={image} alt={name} className="w-full rounded-[16px]" width={270} height={393} />
			<div className="flex items-center justify-between w-full">
				<div className="flex flex-col gap-1 mt-2">
					<h4 className="font-bold text-[20px]">{title}</h4>
					<p className="font-medium text-muted-foreground">Explore Now!</p>
				</div>
				<ArrowRight />
			</div>
		</article>
	);
}

function Feedback({ name, image, star, review }: Feedback) {
	const { full, half, empty } = getStars(star);
	return (
		<article className="w-full min-w-[396px] border p-6 rounded-[16px]">
			<div className="w-full flex items-start justify-between">
				<div className="">
					<Image src={image} alt="" />
					<p className="text-[22px] font-medium mt-2">{name}</p>
				</div>
				<div className="flex items-center gap-1 text-yellow-500">
					{Array.from({ length: full }).map((_, i) => (
						<Star key={`full-${i}`} fill="currentColor" stroke="none" />
					))}
					{half === 1 && <StarHalf fill="currentColor" stroke="none" />}
					{Array.from({ length: empty }).map((_, i) => (
						<Star key={`empty-${i}`} />
					))}
				</div>
			</div>
			<p className="mt-4">{review}</p>
		</article>
	);
}
