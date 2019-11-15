const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true
		},
		email: {
			type: String,
			required: true
		},
		company: {
			type: String,
			required: true
		},
		designation: {
			type: String,
			required: true
		},
		employeesCount: {
			type: String,
			required: true
		},
		phoneCode: {
			type: String,
			required: true
		},
		phoneNo: {
			type: String,
			required: true
		},
		hosting: {
			type: {
				type: String
			},
			plan: Number
		},
		onboard: Boolean,
		custom: {
			required: Boolean,
			plan: Number
		},
		billing_info: {
			cardNo: {
				type: String,
				required: true
			},
			expiry: {
				type: String,
				required: true
			},
			cvv: {
				type: String,
				required: true
			},
			cardName: {
				type: String,
				required: true
			}
		},
		billing_address: {
			address: {
				type: String,
				required: true
			},
			city: {
				type: String,
				required: true
			},
			zip: {
				type: String,
				required: true
			},
			name: {
				type: String,
				required: true
			},
			phoneCode: {
				type: String,
				required: true
			},
			phoneNo: {
				type: String,
				required: true
			}
		}
	},
	{
		timestamps: true
	}
)

module.exports = mongoose.model('user', UserSchema)
