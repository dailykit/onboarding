export const NEXT_PAGE = 'NEXT_PAGE'
export const PREV_PAGE = 'PREV_PAGE'
export const SET_EMAIL = 'SET_EMAIL'
export const SET_PASSWORD = 'SET_PASSWORD'
export const SET_COMPANY = 'SET_COMPANY'
export const SET_EMPLOYEES_COUNT = 'SET_EMPLOYEES_COUNT'
export const SET_NAME = 'SET_NAME'
export const SET_DESIGNATION = 'SET_DESIGNATION'
export const SET_PHONE_CODE = 'SET_PHONE_CODE'
export const SET_PHONE = 'SET_PHONE'
export const SET_HOSTING_TYPE = 'SET_HOSTING_TYPE'
export const SET_HOSTING_PLAN = 'SET_HOSTING_PLAN'
export const SET_ONBOARD_SUPPORT = 'SET_ONBOARD_SUPPORT'
export const SET_CUSTOMIZE_REQUEST = 'SET_CUSTOMIZE_REQUEST'
export const SET_CUSTOM_SUPPORT_PLAN = 'SET_CUSTOM_SUPPORT_PLAN'
export const SET_BILLING_CARD = 'SET_BILLING_CARD'
export const SET_BILLING_EXPIRY = 'SET_BILLING_EXPIRY'
export const SET_BILLING_CVV = 'SET_BILLING_CVV'
export const SET_BILLING_CARD_NAME = 'SET_BILLING_CARD_NAME'
export const SET_BILLING_ADDRESS = 'SET_BILLING_ADDRESS'
export const SET_BILLING_CITY = 'SET_BILLING_CITY'
export const SET_BILLING_ZIP = 'SET_BILLING_ZIP'
export const SET_BILLING_ADDRESS_NAME = 'SET_BILLING_ADDRESS_NAME'
export const SET_BILLING_ADDRESS_PHONE_CODE = 'SET_BILLING_ADDRESS_PHONE_CODE'
export const SET_BILLING_ADDRESS_PHONE_NO = 'SET_BILLING_ADDRESS_PHONE_NO'

const reducers = (state, action) => {
	switch (action.type) {
		case NEXT_PAGE:
			return {
				...state,
				step: state.step === 6 ? 6 : state.step + 1
			}
		case PREV_PAGE:
			return {
				...state,
				step: state.step === 0 ? 0 : state.step - 1
			}

		case SET_EMAIL:
			return {
				...state,
				user_data: {
					...state.user_data,
					email: action.payload
				}
			}
		case SET_PASSWORD:
			return {
				...state,
				user_data: {
					...state.user_data,
					password: action.payload
				}
			}
		case SET_COMPANY:
			return {
				...state,
				user_data: {
					...state.user_data,
					company: action.payload
				}
			}
		case SET_EMPLOYEES_COUNT:
			return {
				...state,
				user_data: {
					...state.user_data,
					employees_count: action.payload
				}
			}
		case SET_NAME:
			return {
				...state,
				user_data: {
					...state.user_data,
					name: action.payload
				}
			}
		case SET_DESIGNATION:
			return {
				...state,
				user_data: {
					...state.user_data,
					designation: action.payload
				}
			}
		case SET_PHONE_CODE:
			return {
				...state,
				user_data: {
					...state.user_data,
					phone_code: action.payload
				}
			}
		case SET_PHONE:
			return {
				...state,
				user_data: {
					...state.user_data,
					phone: action.payload
				}
			}
		case SET_HOSTING_TYPE:
			return {
				...state,
				user_data: {
					...state.user_data,
					hosting: {
						...state.user_data.hosting,
						type: action.payload
					}
				}
			}
		case SET_HOSTING_PLAN:
			return {
				...state,
				user_data: {
					...state.user_data,
					hosting: {
						...state.user_data.hosting,
						plan: action.payload
					}
				}
			}
		case SET_ONBOARD_SUPPORT:
			return {
				...state,
				user_data: {
					...state.user_data,
					onboard: !state.user_data.onboard
				}
			}
		case SET_CUSTOMIZE_REQUEST:
			return {
				...state,
				user_data: {
					...state.user_data,
					custom: {
						...state.user_data.custom,
						required: !state.user_data.custom.required
					}
				}
			}
		case SET_CUSTOM_SUPPORT_PLAN:
			return {
				...state,
				user_data: {
					...state.user_data,
					custom: {
						...state.user_data.custom,
						plan: action.payload
					}
				}
			}
		case SET_BILLING_CARD:
			return {
				...state,
				user_data: {
					...state.user_data,
					billing_info: {
						...state.user_data.billing_info,
						card_no: action.payload
					}
				}
			}
		case SET_BILLING_EXPIRY:
			return {
				...state,
				user_data: {
					...state.user_data,
					billing_info: {
						...state.user_data.billing_info,
						expiry: action.payload
					}
				}
			}
		case SET_BILLING_CVV:
			return {
				...state,
				user_data: {
					...state.user_data,
					billing_info: {
						...state.user_data.billing_info,
						cvv: action.payload
					}
				}
			}
		case SET_BILLING_CARD_NAME:
			return {
				...state,
				user_data: {
					...state.user_data,
					billing_info: {
						...state.user_data.billing_info,
						name: action.payload
					}
				}
			}
		case SET_BILLING_ADDRESS:
			return {
				...state,
				user_data: {
					...state.user_data,
					billing_address: {
						...state.user_data.billing_address,
						address: action.payload
					}
				}
			}
		case SET_BILLING_CITY:
			return {
				...state,
				user_data: {
					...state.user_data,
					billing_address: {
						...state.user_data.billing_address,
						city: action.payload
					}
				}
			}
		case SET_BILLING_ZIP:
			return {
				...state,
				user_data: {
					...state.user_data,
					billing_address: {
						...state.user_data.billing_address,
						zip: action.payload
					}
				}
			}
		case SET_BILLING_ADDRESS_NAME:
			return {
				...state,
				user_data: {
					...state.user_data,
					billing_address: {
						...state.user_data.billing_address,
						name: action.payload
					}
				}
			}
		case SET_BILLING_ADDRESS_PHONE_CODE:
			return {
				...state,
				user_data: {
					...state.user_data,
					billing_address: {
						...state.user_data.billing_address,
						phone_code: action.payload
					}
				}
			}
		case SET_BILLING_ADDRESS_PHONE_NO:
			return {
				...state,
				user_data: {
					...state.user_data,
					billing_address: {
						...state.user_data.billing_address,
						phone_no: action.payload
					}
				}
			}
		default:
			return state
	}
}

export default reducers
