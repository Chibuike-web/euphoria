import { CartItemType } from "@/lib/types";
import { create } from "zustand";

type CartItemStoreType = {
	cartItems: CartItemType[];
	updateCartItems: (newItem: CartItemType) => void;
	increaseItemQuantity: (id: string, size: string, color: string) => void;
	decreaseItemQuantity: (id: string, size: string, color: string) => void;
	removeItemFromCart: (id: string, size: string, color: string) => void;
	getCartTotal: () => number;
	getShippingTotal: () => number;
};

const useCartItemStore = create<CartItemStoreType>((set, get) => ({
	cartItems: [],
	updateCartItems: (newItem) => {
		const itemExist = get().cartItems.some(
			(item) => item.id === newItem.id && item.size === newItem.size && item.color === newItem.color
		);

		if (itemExist) return;
		set((state) => ({ cartItems: [...state.cartItems, newItem] }));
	},

	increaseItemQuantity: (id: string, size: string, color: string) => {
		const items = get().cartItems;
		set({
			cartItems: items.map((item) =>
				item.id === id && item.size === size && item.color === color
					? { ...item, quantity: item.quantity + 1 }
					: item
			),
		});
	},
	decreaseItemQuantity: (id: string, size: string, color: string) => {
		const items = get().cartItems;
		set({
			cartItems: items.map((item) =>
				item.id === id && item.size === size && item.color === color
					? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
					: item
			),
		});
	},
	removeItemFromCart: (id: string, size: string, color: string) => {
		const items = get().cartItems;
		const updated = items.filter(
			(item) => !(item.id === id && item.size === size && item.color === color)
		);
		set({ cartItems: updated });
	},
	getCartTotal: () => {
		return get().cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
	},
	getShippingTotal: () => {
		return get().cartItems.reduce(
			(acc, item) => acc + (typeof item.shipping === "number" ? item.shipping : 0),
			0
		);
	},
}));

export const useCartItems = () => {
	const cartItems = useCartItemStore((state) => state.cartItems);
	const updateCartItems = useCartItemStore((state) => state.updateCartItems);
	const increaseItemQuantity = useCartItemStore((state) => state.increaseItemQuantity);
	const decreaseItemQuantity = useCartItemStore((state) => state.decreaseItemQuantity);
	const removeItemFromCart = useCartItemStore((state) => state.removeItemFromCart);
	const getCartTotal = useCartItemStore((state) => state.getCartTotal);
	const getShippingTotal = useCartItemStore((state) => state.getShippingTotal);

	return {
		cartItems,
		updateCartItems,
		increaseItemQuantity,
		decreaseItemQuantity,
		removeItemFromCart,
		getCartTotal,
		getShippingTotal,
	};
};
