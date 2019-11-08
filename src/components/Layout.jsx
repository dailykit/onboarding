import React from 'react'
import styled from 'styled-components'

import { Context } from '../state/index'

import LogoMark from '../assets/images/logomark.png'

const Layout = ({ children }) => {
	const { state, dispatch } = React.useContext(Context)
	const nextPage = () => dispatch({ type: 'NEXT_PAGE' })
	const prevPage = () => dispatch({ type: 'PREV_PAGE' })

	const evalHeightFirst = step => {
		if (step === 0) {
			return 26
		} else if (step === 1) {
			return 52
		} else if (step >= 2) {
			return 77
		}
	}
	const evalHeightSecond = step => {
		if (step === 3) {
			return 22
		} else if (step === 4) {
			return 41
		} else if (step === 5) {
			return 62
		} else if (step >= 6) {
			return 83
		}
	}

	const submit = () => console.log('')
	return (
		<Step>
			<Header>
				<span>
					<img src={LogoMark} alt="DailyKit" />
				</span>
				<h1>Basic Information</h1>
			</Header>
			<Main>{children}</Main>
			<Aside>
				<Stage height={evalHeightFirst(state.step)}>
					Basic Information
					<li
						className={`${[0, 1, 2, 3, 4, 5, 6].includes(
							state.step
						) === true && 'active'}`}>
						Register with your work email
					</li>
					<li
						className={`${[1, 2, 3, 4, 5, 6].includes(state.step) &&
							'active'}`}>
						Tell us about your company
					</li>
					<li
						className={`${[2, 3, 4, 5, 6].includes(state.step) &&
							'active'}`}>
						Tell us about yourself
					</li>
				</Stage>
				<Stage height={evalHeightSecond(state.step)}>
					Setup your Account
					{state.step > 2 && (
						<>
							<li
								className={`${[3, 4, 5, 6].includes(
									state.step
								) === true && 'active'}`}>
								Hosting
							</li>
							<li
								className={`${[4, 5, 6].includes(state.step) ===
									true && 'active'}`}>
								Onboarding Support
							</li>
							<li
								className={`${[5, 6].includes(state.step) ===
									true && 'active'}`}>
								Custom Support
							</li>
							<li
								className={`${[6].includes(state.step) ===
									true && 'active'}`}>
								Billing Information
							</li>
						</>
					)}
				</Stage>
			</Aside>
			<Footer>
				<button onClick={() => prevPage()}>Back</button>
				{state.step < 6 && (
					<button onClick={() => nextPage()}>Next</button>
				)}
				{state.step === 6 && (
					<button onClick={() => submit()}>Checkout</button>
				)}
			</Footer>
		</Step>
	)
}

export default Layout

const Step = styled.div`
	background: #fafafa;
	height: 100vh;
	padding: 0 100px;
	display: grid;
	grid-template-columns: 2fr 1fr 1fr;
	grid-template-rows: 100px 1fr 100px;
	grid-template-areas:
		'head head head'
		'main main aside'
		'footer footer aside';
`

const Header = styled.header`
	grid-area: head;
	display: flex;
	align-items: center;
	span {
		display: flex;
		display: block;
		margin-right: 16px;
		padding-right: 16px;
		align-items: center;
		border-right: 1px solid rgba(0, 0, 0, 0.3);
	}
	h1 {
		font-size: 24px;
		font-weight: 400;
		color: #555b6e;
	}
`
const Main = styled.main`
	background: #fff;
	grid-area: main;
	border: 1px solid #ececec;
	padding-top: 80px;
	display: flex;
	justify-content: center;
`
const Aside = styled.aside`
	grid-area: aside;
	height: calc(100vh - 200px);
	padding: 32px 0 0 80px;
`

const Stage = styled.ul`
	font-size: 24px;
	line-height: 16px;
	color: #555b6e;
	margin-bottom: 48px;
	position: relative;
	&::before {
		content: '';
		position: absolute;
		top: 18px;
		left: -32px;
		width: 2px;
		height: ${props => `${props.height}%`};
		z-index: 100;
		background: #04a777;
	}
	&::after {
		content: '';
		position: absolute;
		top: -2px;
		left: -42px;
		width: 18px;
		height: 18px;
		border: ${props =>
			props.height > 0 ? '2px solid #04a777' : '2px solid #e1e1e1'};
		border-radius: 50%;
		background: #fafafa;
	}
	li {
		font-size: 14px;
		height: 48px;
		display: flex;
		align-items: center;
		list-style: none;
		&:first-child {
			margin-top: 24px;
		}
		position: relative;
		&::after {
			content: '';
			position: absolute;
			top: calc(100% - 26px);
			left: -35px;
			width: 8px;
			height: 8px;
			border-radius: 50%;
			background: #e1e1e1;
			z-index: 10;
		}
		&::before {
			content: '';
			position: absolute;
			top: -24px;
			left: -32px;
			width: 2px;
			height: 48px;
			background: #e1e1e1;
		}
		&.active {
			&::after {
				background: #04a777;
			}
		}
	}
`

const Footer = styled.footer`
	grid-area: footer;
	display: flex;
	justify-content: space-between;
	align-items: center;
	button {
		height: 40px;
		text-transform: uppercase;
		background: #04a777;
		border-radius: 48px;
		padding: 0 16px;
		border: none;
		font-size: 14px;
		color: #fff;
		cursor: pointer;
	}
`
