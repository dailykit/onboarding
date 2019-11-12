import * as yup from 'yup'

const schema = yup.object().shape({
	cardNo: yup
		.string()
		.matches(
			/4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35\d{3})\d{11}/g,
			'Invalid Card No.'
		),
	expiry: yup
		.string()
		.matches(
			/^([0-2][0-9]|(3)[0-1])(\/)(((0)[1-9])|((1)[0-2]))(\/)\d{4}$/i,
			'Invalid date format'
		),
	cvv: yup.string().matches(/^[0-9]{3,4}$/, 'Invalid CVV'),
	cardName: yup
		.string()
		.required('Card name is required')
		.min(2, 'Card name is too short')
		.max(50, 'Card name is too long'),
	address: yup.string().required('Address is required'),
	city: yup.string().required('City is required'),
	zip: yup
		.string()
		.max(10, 'Invalid zip code')
		.required('Zip is required'),
	name: yup
		.string()
		.required('Name is required')
		.min(2, 'Name is too short')
		.max(50, 'Name is too long'),
	phoneCode: yup.string(),
	phoneNo: yup
		.string()
		.min(10, 'Invalid phone no')
		.max(10, 'Invalid phone no')
})

export default schema
