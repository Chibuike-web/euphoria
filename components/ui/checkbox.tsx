import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { UseFormWatch } from "react-hook-form";
import { FormData } from "@/lib/authSchema";

type CheckboxProps = {
	id: string;
	name: keyof FormData;
	register: any;
	watch: UseFormWatch<FormData>;
};

export function Checkbox({ id, name, register, watch }: CheckboxProps) {
	const checked = watch(name);

	return (
		<label htmlFor={id} className="relative flex items-center gap-2 cursor-pointer select-none">
			<input type="checkbox" id={id} {...register(name)} className="sr-only" />
			<span
				className={cn(
					"size-4 flex items-center justify-center border rounded-[4px] transition-colors",
					checked ? "bg-primary border-primary" : "bg-transparent border-input"
				)}
			>
				{checked && <Check className="text-white w-3 h-3" />}
			</span>
		</label>
	);
}
