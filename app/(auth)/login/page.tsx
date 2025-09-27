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
import { loginSchema, LoginType } from "@/lib/authSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
	const { showPassword, handleShowPassword } = usePassword();
	const [loginError, setLoginError] = useState("");
	const router = useRouter();

	const {
		register,
		reset,
		setError,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm({ resolver: zodResolver(loginSchema) });

	const onSubmit = async (data: LoginType) => {
		const { email, password } = data;
		try {
			const res = await fetch("/api/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email, password }),
			});

			const data = await res.json();
			if (!res.ok) {
				if (res.status === 404) {
					setLoginError(data.error);
				}
				if (res.status === 401) {
					setError("password", { message: data.error });
				}
				throw new Error(data.error || "Login failed");
			}
			sessionStorage.setItem("userInfo", JSON.stringify(data.user));
			reset();
			router.push("/");
		} catch (err) {
			console.error(err);
		}
	};
	return (
		<main className="flex w-full justify-center items-center gap-6">
			<section className="w-full max-w-[1240px]">
				<div className="flex w-full gap-6 xl:gap-[77px]  flex-col lg:flex-row lg:justify-end">
					<div className="w-full xl:min-w-[694px] h-[400px] sm:h-[600px] lg:h-[952px]">
						<Image
							src={signinImage}
							alt="Image of Fashionistas"
							width={694}
							height={952}
							className="w-full h-full object-cover object-top"
						/>
					</div>
					<div className="w-full xl:min-w-[567px] px-6 xl:px-0 lg:mt-16">
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

						<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
							{loginError && (
								<p className="inline-block bg-red-100 text-red-800 font-medium px-3 py-2 text-center rounded-[4px]">
									{loginError}
								</p>
							)}
							<div>
								<Label htmlFor="email" className="mb-[10px]">
									Email Address
								</Label>
								<Input
									type="email"
									{...register("email")}
									id="email"
									placeholder="Enter your email address"
									aria-describedby="email-error"
									aria-invalid={errors.email ? true : false}
									className="h-12"
								/>
								{errors.email && (
									<p id="email-error" className="mt-[10px] text-sm text-red-500">
										{errors.email.message}
									</p>
								)}
							</div>
							<div>
								<div>
									<div className="flex items-center justify-between w-full mb-[10px]">
										<Label htmlFor="password">Password</Label>
										<button
											type="button"
											className="flex items-center gap-2"
											aria-label={showPassword ? "Hide password" : "Show password"}
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
										{...register("password")}
										id="password"
										placeholder="Enter your password"
										aria-describedby="password-error"
										aria-invalid={errors.password ? true : false}
										className="h-12"
									/>
									{errors.password && (
										<p id="password-error" className="mt-[10px] text-sm text-red-500">
											{errors.password.message}
										</p>
									)}
								</div>
								<Link href="/reset-password" className="mt-[10px] flex justify-self-end underline">
									Forgot Password{" "}
								</Link>
							</div>
							<Button
								size="lg"
								className="w-full mt-12 mb-[10px] disabled:opacity-50"
								disabled={isSubmitting}
							>
								{isSubmitting ? (
									<span className="flex gap-2 items-center justify-center">
										<div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
										Signing in...
									</span>
								) : (
									"Sign in"
								)}
							</Button>
						</form>

						<p className="flex justify-self-center items-center gap-[8px] mb-8">
							Don’t have an account?
							<Link href="/signup" className="underline">
								Sign up
							</Link>
						</p>
					</div>
				</div>
			</section>
		</main>
	);
}
