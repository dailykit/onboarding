import * as yup from 'yup'

import formSchema1 from './formSchema1'

const validate = (value, field, form, setErrors) => {
	let schema = {}
	switch (form) {
		case 'form1':
			schema = formSchema1
			break
		default:
			break
	}
	yup.reach(schema, field)
		.validate(value)
		.then(() =>
			setErrors(errs => ({
				...errs,
				[field]: ''
			}))
		)
		.catch(({ errors }) =>
			setErrors(errs => ({
				...errs,
				[field]: errors[0]
			}))
		)
}

export default validate
