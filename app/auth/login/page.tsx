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

export default function Login() {
	return (
		<main className="flex w-screen justify-center  items-center gap-6">
			<section className="max-w-[1240px]">
				<div className="flex gap-[77px] justify-end">
					<Image src={signupImage} alt="" width={694} height={952} className="w-[694px]" />
					<aside className="min-w-[567px]">
						<h1>Sign In Page</h1>
						<p>Sign up for free to access to in any of our products </p>
						<div>
							<Button variant="outline" size="lg" className="w-full">
								<GoogleLogo />
								<span>Continue With Google</span>
							</Button>
							<Button variant="outline" size="lg" className="w-full">
								<TwitterLogo />
								<span>Continue With Twitter</span>
							</Button>
						</div>

						<form action="">
							<fieldset>
								<Label htmlFor="email">Email Address</Label>
								<Input type="email" name="email" id="email" className="h-12" />
							</fieldset>
							<fieldset>
								<div className="flex items-center justify-between w-full">
									{" "}
									<Label htmlFor="password">Password</Label>
									<div className="flex items-center gap-4">
										<EyeOff /> <span>Hide</span>
									</div>
								</div>
								<Input type="password" name="password" id="password" className="h-12" />
								<p>Use 8 or more characters with a mix of letters, numbers & symbols</p>
							</fieldset>
							<div className="flex items-center space-x-2">
								<Checkbox id="terms1" />
								<Label htmlFor="terms1">Agree to our Terms of use and Privacy Policy</Label>
							</div>
							<div className="flex items-center space-x-2">
								<Checkbox id="terms2" />
								<Label htmlFor="terms2">Agree to our Terms of use and Privacy Policy</Label>
							</div>
						</form>

						<Button size="lg" className="w-full">
							Sign up
						</Button>
						<p>
							Already have an account <Link href="/auth/login">Login</Link>
						</p>
					</aside>
				</div>
			</section>
		</main>
	);
}
