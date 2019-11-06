import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { EyesEmoji, HandShakeEmoji } from '../assets/svgs/index'
import BrandLogo from '../assets/images/logo.png'

const Register = () => {
	return (
		<RegisterWrapper>
			<aside>
				<header>
					<img src={BrandLogo} alt="DailyKit" />
				</header>
				<main>
					<Step>
						<span>
							<EyesEmoji />
						</span>
						<div>
							<h3>Tell us about your company</h3>
							<span>
								So we prepare everything as per your needs
							</span>
						</div>
					</Step>
					<Step>
						<span>
							<HandShakeEmoji />
						</span>
						<div>
							<h3>Host your DailyKit</h3>
							<span>
								with us or self-host and invite your team
							</span>
						</div>
					</Step>
				</main>
			</aside>
			<main>
				<h1>Set up your account with us in 2 simple steps.</h1>
				<h3>Let's get started!</h3>
				<Link to="/register">
					<button>Let's Begin</button>
				</Link>
			</main>
		</RegisterWrapper>
	)
}

export default Register

const RegisterWrapper = styled.div`
	display: grid;
	grid-template-rows: 100vh;
	grid-template-columns: 1fr 2fr;
	> aside {
		padding: 64px;
		display: flex;
		background: #fafafa;
		flex-direction: column;
		main {
			flex: 1;
			display: flex;
			align-items: flex-start;
			flex-direction: column;
			justify-content: center;
		}
	}
	> main {
		display: flex;
		align-items: flex-start;
		flex-direction: column;
		justify-content: center;
		padding: 0 64px;
		h1 {
			width: 60%;
			font-weight: 300;
			font-size: 48px;
			color: #555b6e;
			line-height: 88px;
		}
		h3 {
			font-weight: normal;
			font-size: 18px;
			line-height: 21px;
			color: #888d9d;
			margin: 16px 0;
		}
		button {
			height: 48px;
			text-transform: uppercase;
			background: #04a777;
			border-radius: 48px;
			padding: 0 32px;
			border: none;
			font-size: 16px;
			color: #fff;
			cursor: pointer;
		}
	}
	@media (max-width: 1140px) {
		> main {
			h1 {
				width: 100%;
				font-size: 40px;
				line-height: 64px;
			}
		}
	}
	@media (max-width: 980px) {
		> aside {
			padding: 40px;
		}
	}
	@media (max-width: 767px) {
		> main {
			h1 {
				font-size: 32px;
				line-height: 48px;
			}
			h3 {
				font-size: 16px;
			}
		}
	}
	@media (max-width: 567px) {
		grid-template-rows: auto;
		grid-template-columns: 1fr;
		> aside {
			header {
				margin-bottom: 40px;
			}
		}
		> main {
			padding: 40px;
			h1 {
				font-size: 24px;
				font-weight: 400;
				line-height: 32px;
			}
			h3 {
				font-size: 16px;
			}
			button {
				font-size: 14px;
				font-weight: 500;
				height: 40px;
				border-radius: 40px;
				padding: 0 24px;
			}
		}
	}
`

const Step = styled.div`
	display: flex;
	&:first-child {
		margin-bottom: 80px;
	}
	h3 {
		font-size: 16px;
		font-weight: 400;
		color: #555b6e;
		margin-top: 8px;
		margin-bottom: 8px;
	}
	span {
		font-size: 14px;
		font-weight: 400;
		color: #888d9d;
	}
	> span {
		flex-shrink: 0;
		margin-right: 24px;
		background: #fff;
		width: 60px;
		height: 60px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		box-shadow: 0 3px 16px -5px rgba(0, 0, 0, 0.2);
	}
	@media (max-width: 980px) {
		display: unset;
		h3 {
			margin-top: 16px;
		}
	}
	@media (max-width: 567px) {
		&:first-child {
			margin-bottom: 40px;
		}
	}
`
