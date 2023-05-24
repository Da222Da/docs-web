import React from 'react';
import Form from "./from.js"
import Picture from "./picture"
import FeedbackForm from "./feedbackForm"
import Fullname from "./fullname"
import SelectSnack from "./selectSnack"
import TravelPlan from "./travelPlan"

import "./main.css"


export default function ManagingState() {
	return (
		<>
			<TravelPlan />
			<SelectSnack />
			<Fullname />
			<FeedbackForm />
			<Picture />
			<Form />
		</>
	)
}
