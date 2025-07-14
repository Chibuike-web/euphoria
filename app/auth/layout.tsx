import Navbar from "./Navbar";

export default function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<>
			<Navbar />
			{children}
		</>
	);
}
