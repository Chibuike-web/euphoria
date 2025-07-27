"use client";

import { GoogleLogo, TwitterLogo } from "@/app/assets/icons";
import signinImage from "@/app/assets/auth/signin.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { usePassword } from "@/lib/Hooks";

export default function Login() {
	const { showPassword, handleShowPassword } = usePassword();
	return (
		<main className="flex w-full justify-center items-center gap-6">
			<section className="w-full max-w-[1240px]">
				<div className="flex w-full gap-6 xl:gap-[77px]  flex-col lg:flex-row lg:justify-end">
					<figure className="w-full xl:min-w-[694px] h-[400px] sm:h-[600px] lg:h-[952px]">
						<Image
							src={signinImage}
							alt="Image of Fashionistas"
							width={694}
							height={952}
							className="w-full h-full object-cover object-top"
						/>
					</figure>
					<aside className="w-full xl:min-w-[567px] px-6 xl:px-0 lg:mt-16">
						<h1 className="font-bold text-[40px] mb-6">Sign In Page</h1>

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
							<div>
								<Label htmlFor="email" className="mb-[10px]">
									Email Address
								</Label>
								<Input
									type="email"
									name="email"
									id="email"
									placeholder="Enter your email address"
									className="h-12"
								/>
							</div>
							<div>
								<div className="flex items-center justify-between w-full mb-[10px]">
									<Label htmlFor="password">Password</Label>
									<button
										type="button"
										className="flex items-center gap-2"
										onClick={handleShowPassword}
									>
										{showPassword ? (
											<>
												<EyeOff className="size-5" /> <span>Hide</span>
											</>
										) : (
											<>
												<Eye className="size-5" /> <span>Show</span>
											</>
										)}
									</button>
								</div>
								<Input
									type={showPassword ? "text" : "password"}
									name="password"
									id="password"
									placeholder="Enter your password"
									className="h-12"
								/>
								<Link href="/reset-password" className="mt-[10px] flex justify-self-end underline">
									Forgot Password{" "}
								</Link>
							</div>
							<Button size="lg" className="w-full mt-12 mb-[10px]">
								Sign in
							</Button>
						</form>

						<p className="flex justify-self-center items-center gap-[8px] mb-8">
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
