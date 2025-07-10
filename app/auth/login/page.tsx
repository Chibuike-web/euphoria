"use client";

import { GoogleLogo, TwitterLogo } from "@/app/assets/icons";
import signinImage from "@/app/assets/auth/signin.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { EyeOff } from "lucide-react";
import Link from "next/link";

export default function Login() {
	return (
		<main className="flex w-screen justify-center items-center gap-6">
			<section className="w-full max-w-[1240px]">
				<div className="flex w-full gap-[77px] flex-col lg:flex-row lg:justify-end items-center">
					<figure className="w-full xl:min-w-[694px] h-[400px] sm:h-[600px] lg:h-[952px]">
						<Image
							src={signinImage}
							alt="Image of Fashionistas"
							width={694}
							height={952}
							className="w-full h-full object-cover object-top"
						/>
					</figure>
					<aside className="w-full xl:min-w-[567px] px-6 xl:px-0">
						<h1 className="font-bold text-[40px]">Sign In Page</h1>

						<div className="flex flex-col gap-[20px] mb-12">
							<Button variant="outline" size="lg" className="w-full">
								<GoogleLogo />
								<span>Continue With Google</span>
							</Button>
							<Button variant="outline" size="lg" className="w-full">
								<TwitterLogo />
								<span>Continue With Twitter</span>
							</Button>
						</div>

						<form action="" className="flex flex-col gap-8">
							<fieldset>
								<Label htmlFor="email" className="mb-[10px]">
									Email Address
								</Label>
								<Input type="email" name="email" id="email" className="h-12" />
							</fieldset>
							<fieldset>
								<div className="flex items-center justify-between w-full">
									<Label htmlFor="password" className="mb-[10px]">
										Password
									</Label>
									<div className="flex items-center gap-4">
										<EyeOff /> <span>Hide</span>
									</div>
								</div>
								<Input type="password" name="password" id="password" className="h-12" />
								<p className="mt-[10px] flex justify-self-end">Forgot Password </p>
							</fieldset>
							<Button size="lg" className="w-full mt-12 mb-[10px]">
								Sign in
							</Button>
						</form>

						<p className="flex justify-self-center items-center gap-[8px]">
							Don’t have an account?
							<Link href="/auth/signup" className="underline">
								Sign up
							</Link>
						</p>
					</aside>
				</div>
			</section>
		</main>
	);
}
