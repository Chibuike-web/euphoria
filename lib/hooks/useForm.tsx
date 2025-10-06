import { useFormState } from "@/store/useFormStore";

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
