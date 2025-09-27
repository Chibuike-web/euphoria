import { create } from "zustand";

type FormState = {
	checked: boolean;
	setChecked: (value: boolean) => void;
	checkedId: string;
	setCheckedId: (value: string) => void;
	firstName: string;
	setFirstName: (value: string) => void;
	firstNameError: string;
	setFirstNameError: (value: string) => void;
	lastName: string;
	lastNameError: string;
	setLastName: (value: string) => void;
	setLastNameError: (value: string) => void;
	country: string;
	countryError: string;
	setCountry: (value: string) => void;
	setCountryError: (value: string) => void;
	companyName: string;
	setCompanyName: (value: string) => void;
	street: string;
	streetError: string;
	setStreet: (value: string) => void;
	setStreetError: (value: string) => void;
	apartment: string;
	apartmentError: string;
	setApartment: (value: string) => void;
	setApartmentError: (value: string) => void;
	city: string;
	cityError: string;
	setCity: (value: string) => void;
	setCityError: (value: string) => void;
	state: string;
	stateError: string;
	setState: (value: string) => void;
	setStateError: (value: string) => void;
	phone: string;
	phoneError: string;
	setPhone: (value: string) => void;
	setPhoneError: (value: string) => void;
	postalCode: string;
	postalCodeError: string;
	setPostalCode: (value: string) => void;
	setPostalCodeError: (value: string) => void;
	deliveryInstruction: string;
	deliveryInstructionError: string;
	setDeliveryInstruction: (value: string) => void;
	setDeliveryInstructionError: (value: string) => void;
	resetForm: () => void;
};

export const useFormState = create<FormState>((set) => ({
	checked: false,
	setChecked: (value: boolean) => set((state) => ({ checked: value })),
	checkedId: "",
	setCheckedId: (value) => set({ checkedId: value }),
	firstName: "",
	setFirstName: (value) => set({ firstName: value }),
	firstNameError: "",
	setFirstNameError: (value) => set({ firstNameError: value }),
	lastName: "",
	lastNameError: "",
	setLastName: (value) => set({ lastName: value }),
	setLastNameError: (value) => set({ lastNameError: value }),
	country: "",
	countryError: "",
	setCountry: (value) => set({ country: value }),
	setCountryError: (value) => set({ countryError: value }),
	companyName: "",
	setCompanyName: (value) => set({ companyName: value }),
	street: "",
	streetError: "",
	setStreet: (value) => set({ street: value }),
	setStreetError: (value) => set({ streetError: value }),
	apartment: "",
	apartmentError: "",
	setApartment: (value) => set({ apartment: value }),
	setApartmentError: (value) => set({ apartmentError: value }),
	city: "",
	cityError: "",
	setCity: (value) => set({ city: value }),
	setCityError: (value) => set({ cityError: value }),
	state: "",
	stateError: "",
	setState: (value) => set({ state: value }),
	setStateError: (value) => set({ stateError: value }),
	phone: "",
	phoneError: "",
	setPhone: (value) => set({ phone: value }),
	setPhoneError: (value) => set({ phoneError: value }),
	postalCode: "",
	postalCodeError: "",
	setPostalCode: (value) => set({ postalCode: value }),
	setPostalCodeError: (value) => set({ postalCodeError: value }),
	deliveryInstruction: "",
	deliveryInstructionError: "",
	setDeliveryInstruction: (value) => set({ deliveryInstruction: value }),
	setDeliveryInstructionError: (value) => set({ deliveryInstructionError: value }),

	resetForm: () =>
		set({
			checked: false,
			checkedId: "",
			firstName: "",
			lastName: "",
			country: "",
			companyName: "",
			street: "",
			apartment: "",
			city: "",
			state: "",
			phone: "",
			postalCode: "",
			deliveryInstruction: "",
		}),
}));
