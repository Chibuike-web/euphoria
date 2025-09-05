"use client";

import { GoogleLogo, TwitterLogo } from "@/app/assets/icons";
import signupImage from "@/app/assets/auth/signup.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { usePassword } from "@/lib/Hooks";
import { useForm } from "react-hook-form";
import type { FormData } from "@/lib/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { emailSignupSchema } from "@/lib/authSchema";
import { useEffect, useLayoutEffect, useState } from "react";
import { useRouter } from "next/navigation";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export default function Signup() {
	const { showPassword, handleShowPassword } = usePassword();
	const [loading, setLoading] = useState(true);
	const [signupError, setSignupError] = useState("");
	const {
		register,
		setValue,
		watch,
		reset,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<FormData>({ resolver: zodResolver(emailSignupSchema) });

	const router = useRouter();

	useEffect(() => {
		setValue("provider", "email");
	}, [setValue]);

	const onSubmit = async (data: FormData) => {
		console.log("click");
		try {
			const res = await fetch("/api/signup", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			});

			const resData = await res.json();
			if (!res.ok) {
				if (res.status === 400) {
					setSignupError(resData.error);
				} else if (res.status === 409) {
					setSignupError(resData.error);
					router.replace("/login");
				}
				throw new Error(resData.error);
			}

			console.log(resData.message);
			router.push("/login");
			reset();
		} catch (err) {
			console.error(err);
		}
	};

	const handleGoogleAuth = () => {
		window.location.href = `${siteUrl}/api/google`;
	};

	useLayoutEffect(() => {
		const storedUserInfo = sessionStorage.getItem("userInfo");
		if (storedUserInfo) {
			router.replace("/");
		} else {
			setLoading(false);
		}
	}, [router]);

	if (loading) return null;
	return (
		<main className="flex w-full justify-center items-center gap-6">
			<section className="w-full max-w-[1240px]">
				<div className="flex w-full gap-6 xl:gap-[77px] flex-col lg:flex-row lg:justify-end">
					<div className="w-full xl:min-w-[694px] h-[400px] sm:h-[600px] lg:h-[952px]">
						<Image
							src={signupImage}
							alt="Image of Fashionistas"
							width={694}
							height={952}
							className="w-full h-full object-cover object-top"
						/>
					</div>
					<div className="w-full xl:min-w-[567px] px-6 xl:px-0 lg:mt-16">
						<h1 className="font-bold text-[24px] md:text-[40px]">Sign Up</h1>
						<p className="font-medium mb-12 text-secondary-foreground">
							Sign up for free to access to in any of our products{" "}
						</p>
						<div className="flex flex-col gap-[20px] mb-12">
							<Button variant="outline" size="lg" className="w-full" onClick={handleGoogleAuth}>
								<GoogleLogo />
								<span>Continue With Google</span>
							</Button>
							<Button variant="outline" size="lg" className="w-full">
								<TwitterLogo />
								<span>Continue With Twitter</span>
							</Button>
						</div>
						{signupError && (
							<p className="inline-block bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full">
								{signupError}
							</p>
						)}
						<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
							<div>
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
												{" "}
												<Eye className="size-5" /> <span>Show</span>
											</>
										)}
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
							</div>

							<div className="flex flex-col gap-4">
								<div>
									<div className="flex items-center gap-2">
										<Checkbox id="terms" name="terms" register={register} watch={watch} />
										<label htmlFor="terms">Agree to our Terms of use and Privacy Policy </label>
									</div>
									{errors.terms && (
										<p className="mt-[10px] text-sm text-red-500">{errors.terms.message}</p>
									)}
								</div>
								<div className="flex items-center gap-2">
									<Checkbox id="subscribe" name="subscribe" register={register} watch={watch} />
									<label htmlFor="subscribe"> Subscribe to our monthly newsletter</label>
								</div>
							</div>

							<Button
								size="lg"
								className="w-full mt-12 mb-[10px] disabled:opacity-50 "
								disabled={isSubmitting}
							>
								{isSubmitting ? (
									<span className="flex gap-2 items-center justify-center">
										<div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
										Signing up...
									</span>
								) : (
									"Sign up"
								)}
							</Button>
						</form>

						<p className="flex justify-self-center items-center gap-[8px] mb-8">
							Already have an account{" "}
							<Link href="/login" className="underline">
								Login
							</Link>
						</p>
					</div>
				</div>
			</section>
		</main>
	);
}
