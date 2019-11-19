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

	const nextPage = () => dispatch({ type: 'NEXT_PAGE' })
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
								checked={
									state.user_data.hosting.type === 'cloud'
								}
								onChange={() =>
									dispatch({
										type: 'SET_FORM4',
										payload: {
											type: 'cloud'
										}
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
								checked={
									state.user_data.hosting.type === 'self'
								}
								onChange={() =>
									dispatch({
										type: 'SET_FORM4',
										payload: {
											type: 'self'
										}
									})
								}
							/>
							<span htmlFor="self">Self Hosting</span>
						</Label>
					</RadioWrapper>
					{state.user_data.hosting.type === 'cloud' && (
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
										checked={
											state.user_data.hosting.plan === 100
										}
										onChange={() =>
											dispatch({
												type: 'SET_FORM4',
												payload: {
													plan: 100
												}
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
										checked={
											state.user_data.hosting.plan ===
											1000
										}
										onChange={() =>
											dispatch({
												type: 'SET_FORM4',
												payload: {
													plan: 1000
												}
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
