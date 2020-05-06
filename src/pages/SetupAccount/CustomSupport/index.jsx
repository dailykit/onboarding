import React from 'react'

// State
import { context } from '../../../state'

// Styled Components
import { Footer, Wrapper } from '../../styles'
import { ExtMain, CheckBoxWrapper, RadioWrapper, Label, Tip } from './styles'

// Assets
import { BulbEmoji } from '../../../assets/svgs'

const CustomSupport = () => {
	const { state, dispatch } = React.useContext(context)

	const nextPage = () => dispatch({ type: 'NEXT_PAGE' })
	const prevPage = () => dispatch({ type: 'PREV_PAGE' })
	return (
		<Wrapper>
			<ExtMain>
				<div>
					<h2>Custom Support</h2>
					<CheckBoxWrapper>
						<input
							type="checkbox"
							id="support"
							checked={state.user_data.custom.required}
							onChange={() =>
								dispatch({
									type: 'SET_FORM6',
									payload: {
										required: !state.user_data.custom
											.required
									}
								})
							}
						/>
						<label htmlFor="support">
							I have customization request
						</label>
					</CheckBoxWrapper>
					<Tip>
						<span>
							<BulbEmoji />
						</span>
						<p>
							Send us your customization requests and our
							Magicians will be all over it in a jiffy. You can
							choose from the below affordable plans to get the
							feature you want in the software.
						</p>
					</Tip>
					<h4>Choose your plan</h4>
					<RadioWrapper checked={state.user_data.custom.required}>
						<Label>
							<input
								type="radio"
								name="plan"
								id="first"
								disabled={!state.user_data.custom.required}
								checked={state.user_data.custom.plan === 135}
								onChange={() =>
									dispatch({
										type: 'SET_FORM6',
										payload: { plan: 135 }
									})
								}
							/>
							<span htmlFor="first">
								<span className="price">$135/hr</span>
								<span className="support">
									for 50 hours of support
								</span>
							</span>
						</Label>
						<Label>
							<input
								type="radio"
								name="plan"
								id="second"
								disabled={!state.user_data.custom.required}
								checked={state.user_data.custom.plan === 150}
								onChange={() =>
									dispatch({
										type: 'SET_FORM6',
										payload: { plan: 150 }
									})
								}
							/>
							<span htmlFor="self">
								<span className="price">$150/hr</span>
								<span className="support">
									for 10 hours of support
								</span>
							</span>
						</Label>
						<Label>
							<input
								type="radio"
								name="plan"
								id="third"
								disabled={!state.user_data.custom.required}
								checked={state.user_data.custom.plan === 100}
								onChange={() =>
									dispatch({
										type: 'SET_FORM6',
										payload: { plan: 100 }
									})
								}
							/>
							<span htmlFor="third">
								<span className="price">$100/hr</span>
								<span className="support">
									for 100 hours of support
								</span>
							</span>
						</Label>
					</RadioWrapper>
				</div>
			</ExtMain>

			<Footer>
				<button onClick={() => prevPage()}>Back</button>
				<button
					onClick={() => nextPage()}
					style={{
						background: '#04a777'
					}}>
					Next
				</button>
			</Footer>
		</Wrapper>
	)
}

export default CustomSupport
