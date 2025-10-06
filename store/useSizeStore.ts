import { create } from "zustand";

export type SizeType = {
	sizeIndex: number | null;
	setSizeIndex: (value: number) => void;
};

const useSizeStore = create<SizeType>((set) => ({
	sizeIndex: 2,
	setSizeIndex: (value) => set({ sizeIndex: value }),
}));

export const useSize = (sizes?: string[]) => {
	const sizeIndex = useSizeStore((state) => (sizes?.length === 0 ? null : state.sizeIndex));
	const setSizeIndex = useSizeStore((state) => state.setSizeIndex);

	return {
		sizeIndex,
		setSizeIndex,
	};
};
