import { create } from "zustand";
import { CartItemType } from "../types";

type Wishlist = CartItemType & {};
type WishlistStoreType = {
	wishlist: Wishlist[];
	addToWishlist: (newItem: Wishlist) => void;
	removeFromWishlist: (id: string) => void;
};

const useWishlistStore = create<WishlistStoreType>((set, get) => ({
	wishlist: [],
	addToWishlist: (newItem) => {
		const itemExist = get().wishlist.some((item) => item.id === newItem.id);

		if (itemExist) {
			get().removeFromWishlist(newItem.id);
			return;
		}
		set((state) => ({ wishlist: [...state.wishlist, newItem] }));
	},
	removeFromWishlist: (id) => {
		const updated = get().wishlist.filter((item) => !(item.id === id));
		set({ wishlist: updated });
		console.log("click");
	},
}));

export const useWishlist = () => {
	const wishlist = useWishlistStore((state) => state.wishlist);
	const addToWishlist = useWishlistStore((state) => state.addToWishlist);
	const removeFromWishlist = useWishlistStore((state) => state.removeFromWishlist);

	return {
		wishlist,
		addToWishlist,
		removeFromWishlist,
	};
};
