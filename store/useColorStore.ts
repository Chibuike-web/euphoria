import { create } from "zustand";

export type ColorType = {
	colorIndex: number | null;
	setColorIndex: (value: number) => void;
};

const useColorStore = create<ColorType>((set) => ({
	colorIndex: 0,
	setColorIndex: (index) => set({ colorIndex: index }),
}));

export const useColor = (value?: number) => {
	const colorIndex = useColorStore((state) => (value ? value : state.colorIndex));
	const setColorIndex = useColorStore((state) => state.setColorIndex);

	return {
		colorIndex,
		setColorIndex,
	};
};
