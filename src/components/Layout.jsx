import React from 'react'
import styled from 'styled-components'

import LogoMark from '../assets/images/logomark.png'

import Step1 from '../pages/basicInfo/step1'

const Layout = props => {
	const selectStep = step => {
		switch (step) {
			case 'register-email':
				return <Step1 />
			default:
				return <Step1 />
		}
	}
	return (
		<Step>
			<Header>
				<span>
					<img src={LogoMark} alt="DailyKit" />
				</span>
				<h1>Basic Information</h1>
			</Header>
			<Main>{selectStep(props.match.params.step)}</Main>
			<Aside>
				<ul>
					Basic Information
					<li>Register with your work email</li>
					<li>Tell us about your company</li>
					<li>Tell us about yourseld</li>
				</ul>
				<ul>
					Setup your Account
					<li>Hosting</li>
					<li>Onboarding Support</li>
					<li>Custom Support</li>
					<li>Billing Information</li>
				</ul>
			</Aside>
			<Footer>
				<button>Back</button>
				<button>Next</button>
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
	ul {
		font-size: 24px;
		line-height: 16px;
		color: #555b6e;
		margin-bottom: 48px;
		position: relative;
		&::before {
			content: '';
			position: absolute;
			top: 10px;
			left: -32px;
			width: 2px;
			height: calc(100% - 32px);
			background: #e1e1e1;
		}
		&::after {
			content: '';
			position: absolute;
			top: -2px;
			left: -41px;
			width: 18px;
			height: 18px;
			border: 2px solid #e1e1e1;
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
				left: -35px;
				width: 8px;
				height: 8px;
				border-radius: 50%;
				background: #e1e1e1;
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
