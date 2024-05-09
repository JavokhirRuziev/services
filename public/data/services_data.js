import Sell from "../icons/Sell";
import Rent from "../icons/Rent";
import ForBusiness from "../icons/ForBusiness";
import DropDownContent from "@/pages/services/components/DropDownContent";

export const services_data = [
	{
		name: "Rent",
		category: [
			{ name: "Sell", icon: <Sell /> },
			{ name: "For Business", icon: <ForBusiness /> },
			{ name: "Rent", icon: <Rent /> }
		]
	}
];

export const filters = [
	{
		name: "Universities",
		content: (
			<DropDownContent
				arr={[
					{ name: "Shared Room", key: 1 },
					{ name: "Private Room", key: 2 },
					{ name: "Entire Place", key: 3 }
				]}
			/>
		)
	},
	{
		name: "Room type",
		content: (
			<DropDownContent
				arr={[
					{ name: "Shared Room", key: 1 },
					{ name: "Private Room", key: 2 },
					{ name: "Entire Place", key: 3 }
				]}
			/>
		)
	},
	{
		name: "Sort",
		content: (
			<DropDownContent
				arr={[
					{ name: "Shared Room", key: 1 },
					{ name: "Private Room", key: 2 },
					{ name: "Entire Place", key: 3 }
				]}
			/>
		)
	}
];
