import Image from "next/image";
import React from "react";
import verification from "@/app/assets/auth/verification.png";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Verification() {
	return (
		<main className="flex w-full justify-center items-center gap-6">
			<section className="w-full max-w-[1240px]">
				<div className="flex w-full gap-6 xl:gap-[77px] flex-col lg:flex-row lg:justify-end">
					<figure className="w-full xl:min-w-[694px] h-[400px] sm:h-[600px] lg:h-[952px]">
						<Image
							src={verification}
							alt="Image of Fashionistas"
							width={694}
							height={952}
							className="w-full h-full object-cover object-top"
						/>
					</figure>
					<aside className="w-full xl:min-w-[567px] px-6 xl:px-0 lg:mt-16">
						<h1 className="font-bold text-[24px] md:text-[40px]">Verification</h1>
						<p className="font-medium mb-12 text-secondary-foreground">Verify your code</p>

						<form action="">
							<div>
								<Label htmlFor="code" className="mb-[10px]">
									Verification Code
								</Label>
								<Input type="text" name="code" id="code" className="h-12" />
							</div>

							<Button size="lg" className="w-full mt-12 mb-[10px]">
								Verify Code
							</Button>
						</form>
					</aside>
				</div>
			</section>
		</main>
	);
}
