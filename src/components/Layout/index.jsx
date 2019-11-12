import React from 'react'

// State
import { context } from '../../state/'

// Styled Components
import { Step, Header, Main, Aside, Stage } from './styles'

// Assets
import LogoMark from '../../assets/images/logomark.png'

const Layout = ({ children }) => {
	const { state } = React.useContext(context)

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
		</Step>
	)
}

export default Layout
