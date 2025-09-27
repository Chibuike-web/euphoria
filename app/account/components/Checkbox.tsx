import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

type CheckboxPropsType = {
	id: string;
	children: React.ReactNode;
	isChecked?: boolean;
	name?: string;
	onChange?: (checked: boolean) => void;
	className?: string;
};

export const Checkbox = ({
	children,
	id,
	isChecked,
	name,
	className,
	onChange,
}: CheckboxPropsType) => {
	console.log(isChecked);
	return (
		<label
			htmlFor={id}
			className={cn("relative flex items-center gap-2 cursor-pointer select-none group", className)}
		>
			<input
				type="checkbox"
				id={id}
				name={name}
				checked={isChecked}
				className="sr-only"
				onChange={(e) => onChange && onChange(e.target.checked)}
			/>
			<span className="size-4 flex items-center justify-center border rounded-[4px] transition-colors bg-transparent border-input group-has-[:checked]:bg-primary group-has-[:checked]:border-primary">
				<Check className="text-white w-3 h-3" />
			</span>

			<span>{children}</span>
		</label>
	);
};
