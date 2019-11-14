const isValid = errors => {
	let result = []
	Object.keys(errors).map(key => {
		return errors[key] === '' ? result.push(true) : result.push(false)
	})
	return !result.some(value => value === false)
}

export default isValid
