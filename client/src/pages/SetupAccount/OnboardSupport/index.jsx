import React from 'react'

// State
import { context } from '../../../state'

// Styled Components
import { Footer, Wrapper } from '../../styles'
import { ExtMain, CheckBoxWrapper, Info, Tip, Card } from './styles'

// Assets
import { BulbEmoji } from '../../../assets/svgs'

const OnboardSupport = () => {
	const { state, dispatch } = React.useContext(context)
	const [onboard, setOnboard] = React.useState(state.user_data.onboard)

	const nextPage = () => {
		dispatch({
			type: 'SET_FORM5',
			payload: {
				onboard
			}
		})
		dispatch({ type: 'NEXT_PAGE' })
	}
	const prevPage = () => dispatch({ type: 'PREV_PAGE' })

	return (
		<Wrapper>
			<ExtMain>
				<div>
					<h2>Installation and Onboarding Support</h2>
					<CheckBoxWrapper>
						<input
							type="checkbox"
							id="support"
							checked={onboard}
							onChange={e => setOnboard(!onboard)}
						/>
						<label htmlFor="support">
							I want installation and onboard support
						</label>
					</CheckBoxWrapper>
					<Info>
						<div>
							<Tip>
								<span>
									<BulbEmoji />
								</span>
								<p>
									Dailykit is here to help! With simplified
									intallation and onboarding support, we will
								</p>
							</Tip>
							<ul>
								<li>Setup your software</li>
								<li>Import your data</li>
								<li>Train your staff</li>
								<li>
									Provide 3 months of 24x7 world class support
								</li>
							</ul>
						</div>
						<Card>
							<h4>We have a plan for you</h4>
							<span id="strike">$3000</span>
							<span id="discount">70% off (limited)</span>
							<span id="price">$1000</span>
						</Card>
					</Info>
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

export default OnboardSupport
