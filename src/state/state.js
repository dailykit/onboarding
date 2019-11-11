const state = {
	step: 0,
	user_data: {
		email: '',
		password: '',
		company: '',
		employeesCount: '5',
		name: '',
		designation: '',
		phoneNo: '',
		phoneCode: '+91',
		hosting: {
			type: 'cloud',
			plan: 100
		},
		onboard: true,
		custom: {
			required: true,
			plan: 135
		},
		billing_info: {
			cardNo: '',
			expiry: '',
			cvv: '',
			cardName: ''
		},
		billing_address: {
			address: '',
			city: '',
			zip: '',
			name: '',
			phoneCode: '+91',
			phoneNo: ''
		}
	}
}

export default state
