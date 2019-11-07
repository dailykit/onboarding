export const NEXT_PAGE = 'NEXT_PAGE'
export const PREV_PAGE = 'PREV_PAGE'

const reducers = (state, action) => {
	switch (action.type) {
		case NEXT_PAGE:
			return {
				step: state.step + 1
			}
		case PREV_PAGE:
			return {
				step: state.step === 0 ? 0 : state.step - 1
			}
		default:
			return state
	}
}

export default reducers
