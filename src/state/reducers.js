const NEXT_PAGE = 'NEXT_PAGE'
const PREV_PAGE = 'PREV_PAGE'
const SET_FORM1 = 'SET_FORM1'
const SET_FORM2 = 'SET_FORM2'
const SET_FORM3 = 'SET_FORM3'
const SET_FORM4 = 'SET_FORM4'
const SET_FORM5 = 'SET_FORM5'
const SET_FORM6 = 'SET_FORM6'
const SET_FORM7 = 'SET_FORM7'
const SET_SUBDOMAIN = 'SET_SUBDOMAIN'

const reducers = (state, action) => {
	switch (action.type) {
		case NEXT_PAGE:
			return {
				...state,
				step: state.step === 7 ? 7 : state.step + 1
			}
		case PREV_PAGE:
			return {
				...state,
				step: state.step === 1 ? 1 : state.step - 1
			}
		case SET_FORM1:
			return {
				...state,
				user_data: {
					...state.user_data,
					...action.payload
				}
			}

		case SET_FORM2:
			return {
				...state,
				user_data: {
					...state.user_data,
					...action.payload
				}
			}

		case SET_FORM3:
			return {
				...state,
				user_data: {
					...state.user_data,
					...action.payload
				}
			}

		case SET_FORM4:
			return {
				...state,
				user_data: {
					...state.user_data,
					hosting: {
						...state.user_data.hosting,
						...action.payload
					}
				}
			}
		case SET_FORM5:
			return {
				...state,
				user_data: {
					...state.user_data,
					onboard: !state.user_data.onboard
				}
			}
		case SET_FORM6:
			return {
				...state,
				user_data: {
					...state.user_data,
					custom: {
						...state.user_data.custom,
						...action.payload
					}
				}
			}
		case SET_FORM7:
			return {
				...state,
				user_data: {
					...state.user_data,
					billing_info: {
						cardNo: action.payload.cardNo,
						expiry: action.payload.expiry,
						cvv: action.payload.cvv,
						cardName: action.payload.cardName
					},
					billing_address: {
						address: action.payload.address,
						city: action.payload.city,
						zip: action.payload.zip,
						name: action.payload.name,
						phoneCode: action.payload.phoneCode,
						phoneNo: action.payload.cardNo
					}
				}
			}
		case SET_SUBDOMAIN:
			return {
				...state,
				user_data: {
					...state.user_data,
					subdomain: action.payload
				}
			}
		default:
			return state
	}
}

export default reducers
