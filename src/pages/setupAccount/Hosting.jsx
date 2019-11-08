import React from 'react'
import styled from 'styled-components'

import BulbEmoji from '../../assets/svgs/bulb'
import { Context } from '../../state'

const Hosting = () => {
	const { state, dispatch } = React.useContext(Context)
	return (
		<Wrapper>
			<h2>Hosting</h2>
			<RadioWrapper>
				<Label>
					<input
						type="radio"
						name="hosting"
						id="cloud"
						checked={state.user_data.hosting.type === 'cloud'}
						onChange={e =>
							dispatch({
								type: 'SET_HOSTING_TYPE',
								payload: 'cloud'
							})
						}
					/>
					<span htmlFor="cloud">Cloud Hosting</span>
				</Label>
				<Label>
					<input
						type="radio"
						name="hosting"
						id="self"
						checked={state.user_data.hosting.type === 'self'}
						onChange={e =>
							dispatch({
								type: 'SET_HOSTING_TYPE',
								payload: 'self'
							})
						}
					/>
					<span htmlFor="self">Self Hosting</span>
				</Label>
			</RadioWrapper>
			{state.user_data.hosting.type === 'cloud' && (
				<>
					<h4>
						Choose your Plan <span>(First month free trial)</span>
					</h4>
					<RadioWrapper variant="rectangle">
						<Label variant="rectangle">
							<input
								type="radio"
								name="plan"
								id="100"
								checked={state.user_data.hosting.plan === 100}
								onChange={e =>
									dispatch({
										type: 'SET_HOSTING_PLAN',
										payload: 100
									})
								}
							/>
							<span htmlFor="100">$100/mo</span>
						</Label>
						<Label variant="rectangle">
							<input
								type="radio"
								name="plan"
								cloud="1000"
								checked={state.user_data.hosting.plan === 1000}
								onChange={e =>
									dispatch({
										type: 'SET_HOSTING_PLAN',
										payload: 1000
									})
								}
							/>
							<span htmlFor="1000">$1000/yr</span>
						</Label>
					</RadioWrapper>
				</>
			)}
			{state.user_data.hosting.type === 'self' && (
				<div>
					<Tip>
						<span>
							<BulbEmoji />
						</span>
						<p>
							Open URL:{' '}
							<a href="https://efdd.wkjdcm.fhdj">
								https://efdd;.wkjdcm.fhdj
							</a>{' '}
							>> Login with your registered email with us >> Click
							on domain name >> Add your server name [open control
							panel//copy DNS]
						</p>
					</Tip>
				</div>
			)}
		</Wrapper>
	)
}

export default Hosting

const Wrapper = styled.div`
	width: 640px;
	h2 {
		font-size: 24px;
		font-weight: 400;
		color: #555b6e;
		margin-bottom: 24px;
	}
	h4 {
		margin-top: 48px;
		font-size: 16px;
		font-weight: 500;
		color: #555b6e;
		margin-bottom: 24px;
		span {
			font-weight: 400;
			font-size: 14px;
			color: #888d9d;
		}
	}
`

const RadioWrapper = styled.div(
	({ variant }) => `
		margin-bottom: 48px;
		width: 294px;
		height: ${variant === 'rectangle' ? '64px' : '48px'};
		border-radius: ${variant === 'rectangle' ? '8px' : '48px'};
		background: #fafafa;
		border: 1px solid #ececec;
		padding-left: 4px;
		display: flex;
		align-items: center;
	`
)

const Label = styled.label(
	({ variant }) => `
		&:first-child {
			margin-right: 4px;
		}
		span {
			cursor: pointer;
			display: block;
			width: 140px;
			height: ${variant === 'rectangle' ? '56px' : '40px'};
			border-radius: ${variant === 'rectangle' ? '8px' : '40px'};
			line-height: ${variant === 'rectangle' ? '56px' : '40px'};
			text-align: center;
			color: #888d9d;
			transition: 0.3s ease-in-out;
		}
		input {
			position: absolute;
			visibility: hidden;
		}
		input:checked ~ span {
			background: #00a7e1;
			color: #fff;
		}
	`
)

const Tip = styled.div`
	display: flex;
	span {
		margin-right: 16px;
	}
	p {
		font-size: 14px;
		color: #888d9d;
		font-weight: 100;
		font-style: italic;
		a {
			color: #00a7e1;
			text-decoration: none;
		}
	}
`
