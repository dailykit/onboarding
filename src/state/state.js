const state = {
	step: 1,
	user_data: {
		subdomain: '',
		email: '',
		password: '',
		company: '',
		employeesCount: '5',
		firstName: '',
		lastName: '',
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
