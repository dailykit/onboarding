const state = {
	step: 0,
	user_data: {
		email: '',
		password: '',
		company: '',
		employees_count: '5',
		name: '',
		designation: '',
		phone: '',
		phone_code: '+91',
		hosting: {
			type: 'cloud',
			plan: 1000
		},
		onboard: true,
		custom: {
			required: true,
			plan: 135
		},
		billing_info: {
			card_no: '',
			expiry: '',
			cvv: '',
			name: ''
		},
		billing_address: {
			address: '',
			city: '',
			zip: '',
			name: '',
			phone_code: '+91',
			phone_no: ''
		}
	}
}

export default state
