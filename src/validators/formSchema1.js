import * as yup from 'yup'

const schema = yup.object().shape({
	email: yup
		.string()
		.trim()
		.lowercase()
		.required('Email is required')
		.email('Please enter a valid email'),
	password: yup
		.string()
		.required('Password is required')
		.min(8, 'Password must be atleast 8 characters long')
})

export default schema
