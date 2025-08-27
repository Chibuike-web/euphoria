import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export default function Checkbox({
	id,
	children,
	checkedId,
	handleCheck,
}: {
	id: string;
	children: React.ReactNode;
	checkedId: string;
	handleCheck: (value: boolean, id: string) => void;
}) {
	return (
		<label htmlFor={id} className="relative flex items-center gap-2 cursor-pointer select-none">
			<input
				type="checkbox"
				id={id}
				className="sr-only"
				onChange={(e) => handleCheck(e.target.checked, e.target.id)}
			/>
			<span
				className={cn(
					"size-4 flex items-center justify-center border rounded-[4px] transition-colors",
					checkedId === id ? "bg-primary border-primary" : "bg-transparent border-input"
				)}
			>
				{checkedId === id && <Check className="text-white w-3 h-3" />}
			</span>

			<span>{children}</span>
		</label>
	);
}
