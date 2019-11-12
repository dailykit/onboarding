import * as yup from 'yup'

import formSchema1 from './formSchema1'
import formSchema2 from './formSchema2'
import formSchema3 from './formSchema3'
import formSchema4 from './formSchema4'

const validate = (value, field, form, setErrors) => {
	let schema = {}
	switch (form) {
		case 'form1':
			schema = formSchema1
			break
		case 'form2':
			schema = formSchema2
			break
		case 'form3':
			schema = formSchema3
			break
		case 'form4':
			schema = formSchema4
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
