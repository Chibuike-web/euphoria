"use client";

import createNewPassowrdImage from "@/app/assets/auth/create-new-password.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { EyeOff } from "lucide-react";
import Link from "next/link";
import { usePassword } from "@/Hooks";

export default function CreateNewPassword() {
	const { showPassword, handleShowPassword } = usePassword();
	return (
		<main className="flex w-full justify-center items-center gap-6">
			<section className="w-full max-w-[1240px]">
				<div className="flex w-full gap-6 xl:gap-[77px]  flex-col lg:flex-row lg:justify-end">
					<figure className="w-full xl:min-w-[694px] h-[400px] sm:h-[600px] lg:h-[952px]">
						<Image
							src={createNewPassowrdImage}
							alt="Image of Fashionistas"
							width={694}
							height={952}
							className="w-full h-full object-cover object-top"
						/>
					</figure>
					<aside className="w-full xl:min-w-[567px] px-6 xl:px-0 lg:mt-16">
						<h1 className="font-bold text-[40px]">Create New Password</h1>
						<p className="font-medium mb-12">
							Your new password must be different from previous used passwords.
						</p>

						<form action="" className="w-full">
							<fieldset className="mb-8">
								<div className="flex items-center justify-between w-full mb-[10px]">
									<Label htmlFor="password">Password</Label>
									<button
										type="button"
										className="flex items-center gap-2"
										onClick={handleShowPassword}
									>
										<EyeOff className="w-5 h-5" /> <span>Hide</span>
									</button>
								</div>
								<Input
									type={showPassword ? "text" : "password"}
									name="password"
									id="password"
									className="h-12"
								/>
								<p>Must be at least 8 characters.</p>
							</fieldset>
							<fieldset>
								<div className="flex items-center justify-between w-full mb-[10px]">
									<Label htmlFor="confirmPassword">Confirm password</Label>
									<button
										type="button"
										className="flex items-center gap-2"
										onClick={handleShowPassword}
									>
										<EyeOff className="w-5 h-5" /> <span>Hide</span>
									</button>
								</div>
								<Input
									type={showPassword ? "text" : "password"}
									name="confirmPassword"
									id="confirmPassword"
									className="h-12"
								/>
							</fieldset>
							<Button size="lg" className="w-full mt-12 mb-[10px]">
								Reset Password
							</Button>
						</form>
					</aside>
				</div>
			</section>
		</main>
	);
}
