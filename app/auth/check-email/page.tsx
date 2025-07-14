import Image from "next/image";
import Link from "next/link";
import checkEmail from "@/app/assets/auth/check-email.png";

export default function Verification() {
	return (
		<main className="flex w-full justify-center items-center gap-6">
			<section className="w-full max-w-[1240px]">
				<div className="flex w-full gap-6 xl:gap-[77px] flex-col lg:flex-row lg:justify-end">
					<figure className="w-full xl:min-w-[694px] h-[400px] sm:h-[600px] lg:h-[952px]">
						<Image
							src={checkEmail}
							alt="Image of Fashionistas"
							width={694}
							height={952}
							className="w-full h-full object-cover object-top"
						/>
					</figure>
					<aside className="w-full xl:min-w-[567px] px-6 xl:px-0 lg:mt-16">
						<h1 className="font-bold text-[24px] md:text-[40px]">Check Email</h1>
						<p className="font-medium mb-12 text-secondary-foreground">
							Please check your email inbox and click on the provided link to reset your password .
							If you don’t receive email,{" "}
							<span className="font-semibold">Click here to resend</span>
						</p>

						<p className="flex items-center gap-[8px] mb-8">
							Back to
							<Link href="/auth/login" className="underline">
								Login
							</Link>
						</p>
					</aside>
				</div>
			</section>
		</main>
	);
}
