import { useState, useEffect, useCallback } from "react";
import { useUserValue } from "@/app/store/useUserValue";
import { useFormState } from "@/app/store/useFormStore";

export const usePassword = () => {
	const [showPassword, setShowPassword] = useState(false);

	const handleShowPassword = () => {
		setShowPassword((prev) => !prev);
	};

	return {
		showPassword,
		handleShowPassword,
	};
};

type UseMobileNavReturn = {
	isOpen: boolean;
	handleClick: () => void;
	close: () => void;
};

export function useMobileNav(): UseMobileNavReturn {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		return () => {
			document.body.style.overflow = "";
		};
	}, [isOpen]);

	const handleClick = useCallback(() => {
		setIsOpen((prev) => !prev);
	}, []);

	const close = useCallback(() => {
		setIsOpen(false);
	}, []);

	return {
		isOpen,
		handleClick,
		close,
	};
}

export const useDropdown = () => {
	const [isShow, setIsShow] = useState(false);
	return {
		isShow,
		setIsShow,
	};
};

export const useActive = (value: number | boolean | string | null) => {
	const [active, setActive] = useState(value);

	return {
		active,
		setActive,
	};
};

export const useMediaQuery = (query: string): boolean => {
	const [matches, setMatches] = useState<boolean>(() =>
		typeof window === "undefined" ? false : window.matchMedia(query).matches
	);

	useEffect(() => {
		if (typeof window === "undefined") return;

		const media = window.matchMedia(query);
		const listener = (e: MediaQueryListEvent) => setMatches(e.matches);

		setMatches(media.matches);
		media.addEventListener("change", listener);

		return () => media.removeEventListener("change", listener);
	}, [query]);

	return matches;
};

export const useUser = () => {
	const { user, setUser } = useUserValue();

	useEffect(() => {
		const storedUserInfo = sessionStorage.getItem("userInfo");
		if (storedUserInfo) {
			try {
				const parsed = JSON.parse(storedUserInfo);
				setUser(parsed);
			} catch (e) {
				console.error("Invalid user data in sessionStorage", e);
			}
		}
	}, []);

	return user;
};

export const useForm = () => {
	const store = useFormState();

	const handleCheck = (checked: boolean, id: string) => {
		store.setChecked(checked);
		store.setCheckedId(checked ? id : "");
	};

	const handleChange = (id: string, value: string) => {
		switch (id) {
			case "firstName":
				store.setFirstName(value);
				if (store.firstNameError && value.trim() !== "") store.setFirstNameError("");
				break;
			case "lastName":
				store.setLastName(value);
				if (store.lastNameError && value.trim() !== "") store.setLastNameError("");
				break;
			case "country":
				store.setCountry(value);
				if (store.countryError && value.trim() !== "") store.setCountryError("");
				break;
			case "companyName":
				store.setCompanyName(value);
				break;
			case "street":
				store.setStreet(value);
				if (store.streetError && value.trim() !== "") store.setStreetError("");
				break;
			case "apartment":
				store.setApartment(value);
				if (store.apartmentError && value.trim() !== "") store.setApartmentError("");
				break;
			case "city":
				store.setCity(value);
				if (store.cityError && value.trim() !== "") store.setCityError("");
				break;
			case "state":
				store.setState(value);
				if (store.stateError && value.trim() !== "") store.setStateError("");
				break;
			case "phone":
				store.setPhone(value);
				if (store.phoneError && value.trim() !== "") store.setPhoneError("");
				break;
			case "postalCode":
				store.setPostalCode(value);
				if (store.postalCodeError && value.trim() !== "") store.setPostalCodeError("");
				break;
			case "deliveryInstruction":
				store.setDeliveryInstruction(value);
				if (store.deliveryInstruction && value.trim() !== "") store.setDeliveryInstructionError("");
				break;
			default:
				console.log("Not available");
		}
	};

	return {
		store,
		handleCheck,
		handleChange,
	};
};
