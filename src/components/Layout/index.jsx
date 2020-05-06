import React from 'react'

// State
import { context } from '../../state/'

// Styled Components
import { Step, Header, Main, Aside, Stage, Cart } from './styles'

// Assets
import LogoMark from '../../assets/images/logomark.png'

const Layout = ({ children }) => {
	const { state } = React.useContext(context)

	const evalHeightFirst = step => {
		if (step === 1) {
			return 26
		} else if (step === 2) {
			return 52
		} else if (step === 3) {
			return 77
		} else if (step > 3) {
			return 1
		}
	}
	const evalHeightSecond = step => {
		if (step === 4) {
			return 22
		} else if (step === 5) {
			return 41
		} else if (step === 6) {
			return 62
		} else if (step === 7) {
			return 83
		}
	}

	const evalTotal = () => {
		const { type: hostingType, plan: hostingPlan } = state.user_data.hosting
		const {
			required: customRequired,
			plan: customPlan
		} = state.user_data.custom

		let hosting = hostingType === 'cloud' ? hostingPlan : 0
		let onboard = state.user_data.onboard ? 1000 : 0
		let custom = customRequired
			? customPlan === 135
				? 135 * 50
				: customPlan === 150
				? 150 * 10
				: 100 * 100
			: 0

		switch (state.step) {
			case 4:
				return hosting
			case 5:
				return hosting + onboard
			case 6:
				return hosting + onboard + custom
			default:
				return hosting + onboard + custom
		}
	}

	const isStepActive = start => {
		const steps = Array.from(new Array(8 - start).keys(), i => i + start)
		return steps.includes(state.step) ? 'active' : ''
	}

	return (
		<Step>
			<Header>
				<span>
					<img src={LogoMark} alt="DailyKit" />
				</span>
				<h1>Basic Information</h1>
			</Header>
			<Main step={state.step}>{children}</Main>
			<Aside>
				<Stage height1={evalHeightFirst(state.step)}>
					Basic Information
					{state.step <= 3 && (
						<>
							<li className={isStepActive(1)}>
								Register with your work email
							</li>
							<li className={isStepActive(2)}>
								Tell us about your company
							</li>
							<li className={isStepActive(3)}>
								Tell us about yourself
							</li>
						</>
					)}
				</Stage>
				<Stage height2={evalHeightSecond(state.step)}>
					Setup your Account
					{state.step > 3 && (
						<>
							<li className={isStepActive(4)}>
								<span>
									Hosting({state.user_data.hosting.type})
								</span>
								<span className="price">
									$
									{state.user_data.hosting.type === 'cloud'
										? state.user_data.hosting.plan
										: 0}
								</span>
							</li>
							<li className={isStepActive(5)}>
								<span>Onboarding Support</span>
								{state.step > 4 && (
									<span className="price">
										${state.user_data.onboard ? 1000 : 0}
									</span>
								)}
							</li>
							<li className={isStepActive(6)}>
								<span>
									Custom Support
									{state.step > 5 &&
										(state.user_data.custom.plan === 135
											? '(x50hrs)'
											: state.user_data.custom.plan ===
											  150
											? '(x10hrs)'
											: '(x100hrs)')}
								</span>
								{state.step > 5 && (
									<span className="price">
										$
										{state.user_data.custom.required
											? state.user_data.custom.plan
											: 0}
									</span>
								)}
							</li>
							<li className={isStepActive(7)}>
								Billing Information
							</li>
						</>
					)}
				</Stage>
				{state.step > 3 && (
					<Cart>
						<div>
							<span>Payable Now</span>
							<span>${evalTotal()}</span>
						</div>
					</Cart>
				)}
			</Aside>
		</Step>
	)
}

export default Layout
