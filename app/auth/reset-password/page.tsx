import Image from "next/image";
import React from "react";
import resetPassword from "@/app/assets/auth/reset-password.png";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ResetPassword() {
	return (
		<main className="flex w-full justify-center items-center gap-6">
			<section className="w-full max-w-[1240px]">
				<div className="flex w-full gap-6 xl:gap-[77px] flex-col lg:flex-row lg:justify-end">
					<figure className="w-full xl:min-w-[694px] h-[400px] sm:h-[600px] lg:h-[952px]">
						<Image
							src={resetPassword}
							alt="Image of Fashionistas"
							width={694}
							height={952}
							className="w-full h-full object-cover object-top"
						/>
					</figure>
					<aside className="w-full xl:min-w-[567px] px-6 xl:px-0 lg:mt-16">
						<h1 className="font-bold text-[24px] md:text-[40px]">Reset Your Password</h1>
						<p className="font-medium mb-12">
							Enter your email and we'll send you a link to reset your password.
						</p>

						<form action="" className="flex flex-col gap-8">
							<fieldset>
								<Label htmlFor="email" className="mb-[10px]">
									Email Address
								</Label>
								<Input type="email" name="email" id="email" className="h-12" />
							</fieldset>

							<Button size="lg" className="w-full mt-12 mb-[10px]">
								Send
							</Button>
						</form>

						<p className="flex justify-self-center items-center gap-[8px] mb-8">
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
