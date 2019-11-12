import * as yup from 'yup'

const schema = yup.object().shape({
	name: yup
		.string()
		.trim()
		.required('Name is required')
		.min(2, 'Name is too short')
		.max(50, 'Name is to long'),
	designation: yup
		.string()
		.trim()
		.required('Designation is required')
		.min(2, 'Designation is too short')
		.max(50, 'Designation is to long'),
	phoneCode: yup.string(),
	phoneNo: yup
		.string()
		.matches(
			/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
			'Invalid phone no.'
		)
})

export default schema
