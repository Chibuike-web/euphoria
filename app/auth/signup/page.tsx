"use client";

import { GoogleLogo, TwitterLogo } from "@/app/assets/icons";
import signupImage from "@/app/assets/signup/signup.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import { EyeOff } from "lucide-react";
import Link from "next/link";

export default function Signup() {
	return (
		<main className="flex w-screen justify-center items-center gap-6 px-6 xl:px-0">
			<section className="w-full max-w-[1240px]">
				<div className="flex w-full gap-[77px] flex-col lg:flex-row lg:justify-end items-center">
					<figure className="w-full xl:min-w-[694px] h-[600px] lg:h-[952px]">
						<Image
							src={signupImage}
							alt="Image of Fashionistas"
							width={694}
							height={952}
							className="w-full h-full object-cover object-top"
						/>
					</figure>
					<aside className="w-full xl:min-w-[567px]">
						<h1 className="font-bold text-[40px]">Sign Up</h1>
						<p className="font-medium mb-12">
							Sign up for free to access to in any of our products{" "}
						</p>
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
								<p className="mt-[10px]">
									Use 8 or more characters with a mix of letters, numbers & symbols
								</p>
							</fieldset>
							<div>
								<div className="flex items-center gap-2">
									<Checkbox id="terms1" />
									<Label htmlFor="terms1">Agree to our Terms of use and Privacy Policy</Label>
								</div>
								<div className="flex items-center gap-2 mt-[18px]">
									<Checkbox id="terms2" />
									<Label htmlFor="terms2">Subscribe to our monthly newsletter</Label>
								</div>
							</div>
						</form>

						<Button size="lg" className="w-full mt-12 mb-[10px]">
							Sign up
						</Button>
						<p className="text-center">
							Already have an account{" "}
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
