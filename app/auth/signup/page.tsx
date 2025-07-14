"use client";

import { GoogleLogo, TwitterLogo } from "@/app/assets/icons";
import signupImage from "@/app/assets/auth/signup.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import { EyeOff } from "lucide-react";
import Link from "next/link";
import { usePassword } from "@/lib/Hooks";
import { useForm } from "react-hook-form";
import type { FormData } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "@/lib/schema";

export default function Signup() {
	const { showPassword, handleShowPassword } = usePassword();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({ resolver: zodResolver(schema) });

	const onSubmit = (data: FormData) => {
		console.log(data);
	};
	return (
		<main className="flex w-full justify-center items-center gap-6">
			<section className="w-full max-w-[1240px]">
				<div className="flex w-full gap-6 xl:gap-[77px]  flex-col lg:flex-row lg:justify-end">
					<figure className="w-full xl:min-w-[694px] h-[400px] sm:h-[600px] lg:h-[952px]">
						<Image
							src={signupImage}
							alt="Image of Fashionistas"
							width={694}
							height={952}
							className="w-full h-full object-cover object-top"
						/>
					</figure>
					<aside className="w-full xl:min-w-[567px] px-6 xl:px-0 lg:mt-16">
						<h1 className="font-bold text-[24px] md:text-[40px]">Sign Up</h1>
						<p className="font-medium mb-12 text-secondary-foreground">
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

						<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
							<fieldset>
								<Label htmlFor="email" className="mb-[10px]">
									Email Address
								</Label>
								<Input
									type="email"
									id="email"
									{...register("email")}
									className={`h-12 ${errors.email ? "border-red-500" : ""}`}
									placeholder="Enter your email address"
								/>
								{errors.email && (
									<p className="mt-[10px] text-sm text-red-500">{errors.email.message}</p>
								)}
							</fieldset>
							<fieldset>
								<div className="flex items-center justify-between w-full mb-[10px]">
									<Label htmlFor="password">Password</Label>
									<button
										type="button"
										className="flex items-center gap-2"
										onClick={handleShowPassword}
									>
										<EyeOff className="size-5" /> <span>Hide</span>
									</button>
								</div>
								<Input
									type={showPassword ? "text" : "password"}
									{...register("password")}
									id="password"
									placeholder="Enter your password"
									className={`h-12 ${errors.password ? "border-red-500" : ""}`}
								/>
								{errors.password ? (
									<p className="mt-[10px] text-sm text-red-500">{errors.password.message}</p>
								) : (
									<p className="mt-[10px]">
										Use 8 or more characters with a mix of letters, numbers & symbols
									</p>
								)}
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

							<Button size="lg" className="w-full mt-12 mb-[10px]">
								Sign up
							</Button>
						</form>

						<p className="flex justify-self-center items-center gap-[8px] mb-8">
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
