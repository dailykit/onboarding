import React from 'react'
import styled from 'styled-components'

import BulbEmoji from '../../assets/svgs/bulb'
import { Context } from '../../state'

const OnboardSupport = () => {
	const { state, dispatch } = React.useContext(Context)
	return (
		<Wrapper>
			<h2>Installation and Onboarding Support</h2>
			<CheckBoxWrapper>
				<input
					type="checkbox"
					id="support"
					checked={state.user_data.onboard}
					onChange={e =>
						dispatch({
							type: 'SET_ONBOARD_SUPPORT'
						})
					}
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
						<li>Provide 3 months of 24x7 world class support</li>
					</ul>
				</div>
				<Card>
					<h4>We have a plan for you</h4>
					<span id="strike">$3000</span>
					<span id="discount">70% off (limited)</span>
					<span id="price">$1000</span>
				</Card>
			</Info>
		</Wrapper>
	)
}

export default OnboardSupport

const Wrapper = styled.div`
	width: 640px;
	h2 {
		font-size: 24px;
		font-weight: 400;
		color: #555b6e;
		margin-bottom: 24px;
	}
`

const CheckBoxWrapper = styled.div`
	margin-top: 32px;
	label {
		font-size: 16px;
		color: #555b6e;
		margin-left: 8px;
	}
`

const Info = styled.div`
	display: flex;
	border-top: 1px solid rgba(0, 0, 0, 0.1);
	margin-top: 32px;
	padding-top: 32px;
	ul {
		padding-left: 32px;
		margin-top: 24px;
		li {
			font-size: 14px;
			color: #555b6e;
			line-height: 24px;
		}
	}
`

const Tip = styled.div`
	display: flex;
	span {
		margin-right: 16px;
	}
	p {
		font-size: 14px;
		color: #555b6e;
	}
`

const Card = styled.div`
	width: 260px;
	height: 180px;
	display: flex;
	padding: 16px;
	border-radius: 4px;
	text-align: center;
	flex-direction: column;
	border: 1px solid rgba(0, 0, 0, 0.1);
	h4 {
		font-size: 14px;
		font-weight: 400;
		color: #888d9d;
		padding-bottom: 12px;
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	}
	#strike {
		font-size: 12px;
		text-decoration-line: line-through;
		color: #888d9d;
		margin-top: 16px;
	}
	#discount {
		font-size: 12px;
		font-feature-settings: 'cpsp' on;
		color: #ff8484;
		margin: 8px 0 24px 0;
	}
	#price {
		font-weight: 500;
		font-size: 20px;
		line-height: 23px;
		color: #555b6e;
	}
`
