import React from 'react'

// State
import { context } from '../../../state'

// Styled Components
import { Footer, Main, Wrapper } from '../../styles'
import { RadioWrapper, Label, Tip } from './styles'

// Assets
import { BulbEmoji } from '../../../assets/svgs'

const Hosting = () => {
	const { state, dispatch } = React.useContext(context)
	const [type, setType] = React.useState(state.user_data.hosting.type)
	const [plan, setPlan] = React.useState(state.user_data.hosting.plan)

	const nextPage = () => {
		dispatch({
			type: 'SET_FORM4',
			payload: {
				type,
				plan
			}
		})
		dispatch({ type: 'NEXT_PAGE' })
	}
	const prevPage = () => dispatch({ type: 'PREV_PAGE' })

	return (
		<Wrapper>
			<Main>
				<div>
					<h2>Hosting</h2>
					<RadioWrapper>
						<Label>
							<input
								type="radio"
								name="hosting"
								id="cloud"
								checked={type === 'cloud'}
								onChange={e => setType('cloud')}
							/>
							<span htmlFor="cloud">Cloud Hosting</span>
						</Label>
						<Label>
							<input
								type="radio"
								name="hosting"
								id="self"
								checked={type === 'self'}
								onChange={e => setType('self')}
							/>
							<span htmlFor="self">Self Hosting</span>
						</Label>
					</RadioWrapper>
					{type === 'cloud' && (
						<>
							<h4>
								Choose your Plan{' '}
								<span>(First month free trial)</span>
							</h4>
							<RadioWrapper variant="rectangle">
								<Label variant="rectangle">
									<input
										type="radio"
										name="plan"
										id="100"
										checked={plan === 100}
										onChange={() => setPlan(100)}
									/>
									<span htmlFor="100">$100/mo</span>
								</Label>
								<Label variant="rectangle">
									<input
										type="radio"
										name="plan"
										cloud="1000"
										checked={plan === 1000}
										onChange={() => setPlan(1000)}
									/>
									<span htmlFor="1000">$1000/yr</span>
								</Label>
							</RadioWrapper>
						</>
					)}
					{type === 'self' && (
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
									>> Login with your registered email with us
									>> Click on domain name >> Add your server
									name [open control panel//copy DNS]
								</p>
							</Tip>
						</div>
					)}
				</div>
			</Main>
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

export default Hosting
