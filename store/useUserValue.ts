import { UserType } from "@/lib/schema/userSchema";
import { create } from "zustand";

type UserStoreType = {
	user: UserType | null;
	setUser: (value: UserType) => void;
};

const useUserStore = create<UserStoreType>((set) => ({
	user: null,
	setUser: (value) => set({ user: value }),
}));

export function useUserValue() {
	const user = useUserStore((state) => state.user);
	const setUser = useUserStore((state) => state.setUser);

	return {
		user,
		setUser,
	};
}
