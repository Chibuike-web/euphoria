"use client";

import createNewPassowrdImage from "@/app/assets/auth/create-new-password.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { EyeOff } from "lucide-react";
import { usePassword } from "@/lib/Hooks";
import { passwordSchema } from "../../../lib/authSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

export default function CreateNewPassword() {
	const { showPassword, handleShowPassword } = usePassword();

	const newPasswordSchema = z
		.object({
			password: passwordSchema,
			confirmPassword: z.string().min(1, { message: "Please confirm your password" }),
		})
		.refine((data) => data.password === data.confirmPassword, {
			message: "Passwords do not match",
			path: ["confirmPassword"],
		});

	type NewPasswordFormData = z.infer<typeof newPasswordSchema>;

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<NewPasswordFormData>({ resolver: zodResolver(newPasswordSchema) });

	const onSubmit = (data: NewPasswordFormData) => {};
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
						<h1 className="font-bold text-[24px] md:text-[40px]">Create New Password</h1>
						<p className="font-medium mb-12 text-secondary-foreground">
							Your new password must be different from previous used passwords.
						</p>

						<form onSubmit={handleSubmit(onSubmit)} className="w-full">
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
									{...register("password")}
									id="password"
									className="h-12"
								/>
								{errors.password ? (
									<p className="mt-[10px] text-sm text-red-500">{errors.password.message}</p>
								) : (
									<p className="mt-[10px]">
										Use 8 or more characters with a mix of letters, numbers & symbols
									</p>
								)}
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
									{...register("confirmPassword")}
									id="confirmPassword"
									className="h-12"
								/>
								{errors.confirmPassword && (
									<p className="mt-[10px] text-sm text-red-500">{errors.confirmPassword.message}</p>
								)}
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
