import React from 'react'
import styled from 'styled-components'

import { Footer, Main, Wrapper } from '../basicInfo/Styles'

import BulbEmoji from '../../assets/svgs/bulb'
import { Context } from '../../state'

const CustomSupport = () => {
	const { state, dispatch } = React.useContext(Context)
	const [required, setRequired] = React.useState(
		state.user_data.custom.required
	)
	const [plan, setPlan] = React.useState(state.user_data.custom.plan)

	const nextPage = () => {
		dispatch({
			type: 'SET_FORM6',
			payload: {
				required,
				plan
			}
		})
		dispatch({ type: 'NEXT_PAGE' })
	}
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
							checked={required}
							onChange={() => setRequired(!required)}
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
					<RadioWrapper checked={required}>
						<Label>
							<input
								type="radio"
								name="plan"
								id="first"
								disabled={!required}
								checked={plan === 135}
								onChange={() => setPlan(135)}
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
								disabled={!required}
								checked={plan === 150}
								onChange={() => setPlan(150)}
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
								disabled={!required}
								checked={plan === 100}
								onChange={() => setPlan(100)}
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

const ExtMain = styled(Main)`
	> div {
		width: 640px;
	}
	h4 {
		margin-top: 48px;
		font-size: 16px;
		font-weight: 400;
		color: #555b6e;
		margin-bottom: 16px;
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

const RadioWrapper = styled.div`
	margin-bottom: 48px;
	width: 558px;
	height: 68px;
	border-radius: 8px;
	background: #fafafa;
	border: 1px solid #ececec;
	padding-left: 4px;
	display: flex;
	align-items: center;
	position: relative;
	&::after {
		content: '';
		position: absolute;
		border-radius: 8px;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(251, 251, 251, 0.65);
		display: ${props => (props.checked ? 'none' : 'block')};
	}
`

const Label = styled.label`
	&:first-child,
	&:nth-child(2) {
		margin-right: 4px;
	}
	> span {
		cursor: pointer;
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 180px;
		height: 56px;
		border-radius: 6px;
		color: #888d9d;
		font-weight: 500;
		padding-left: 16px;
		transition: 0.3s ease-in-out;
		span {
			display: block;
			&:last-child {
				font-size: 12px;
				opacity: 0.7;
				margin-top: 4px;
				font-weight: 400;
			}
		}
	}
	input {
		position: absolute;
		visibility: hidden;
	}
	input:checked ~ span {
		background: #00a7e1;
		span {
			color: #fff;
		}
	}
`

const Tip = styled.div`
	display: flex;
	margin-top: 32px;
	padding-top: 24px;
	border-top: 1px solid rgba(0, 0, 0, 0.1);
	span {
		margin-right: 16px;
	}
	p {
		font-size: 14px;
		color: #555b6e;
		opacity: 0.5;
		font-style: italic;
	}
`
