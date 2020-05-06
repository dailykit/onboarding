import * as yup from 'yup'

const schema = yup.object().shape({
	company: yup
		.string()
		.trim()
		.required('Company is required'),
	employeesCount: yup.string()
})

export default schema
