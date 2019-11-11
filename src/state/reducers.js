export const NEXT_PAGE = 'NEXT_PAGE'
export const PREV_PAGE = 'PREV_PAGE'
const SET_FORM1 = 'SET_FORM1'
const SET_FORM2 = 'SET_FORM2'
const SET_FORM3 = 'SET_FORM3'
const SET_FORM4 = 'SET_FORM4'
const SET_FORM5 = 'SET_FORM5'
const SET_FORM6 = 'SET_FORM6'
const SET_FORM7 = 'SET_FORM7'

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
						...action.payload
					}
				}
			}
		case SET_FORM5:
			return {
				...state,
				user_data: {
					...state.user_data,
					...action.payload
				}
			}
		case SET_FORM6:
			return {
				...state,
				user_data: {
					...state.user_data,
					custom: {
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
		default:
			return state
	}
}

export default reducers
