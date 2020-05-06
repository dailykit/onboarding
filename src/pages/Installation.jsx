import React, { useContext } from 'react'
import styled, { css, keyframes } from 'styled-components'

// State
import { context } from '../state'

const dots = keyframes`
  0%,
  80%,
  100% {
    transform: scale(0);
  }
  40% {
    transform: scale(0.8);
  }
  `

const DotScale = ({ color, duration, size, dotSize }) => {
	const Spinner = styled.div`
		margin: 0 auto;
		position: relative;
		width: ${size};
		height: ${size / 2};
		text-align: center;
	`

	const DefaultDot = styled.div`
		width: ${props => props.dotSize};
		height: ${props => props.dotSize};
		border-radius: 100%;
		display: inline-block;
		background-color: ${color};
		animation: ${dots} 1.4s infinite ease-in-out both;
		animation-duration: ${props =>
			props.duration ? props.duration : '1.4s'};
	`

	const Dot1 = styled(DefaultDot)`
		animation-delay: -0.32s;
	`

	const Dot2 = styled(DefaultDot)`
		animation-delay: -0.16s;
	`

	return (
		<Spinner size={size}>
			<Dot1 color={color} duration={duration} dotSize={dotSize} />
			<Dot2 color={color} duration={duration} dotSize={dotSize} />
		</Spinner>
	)
}

const Installation = () => {
	const { state } = useContext(context)
	React.useEffect(() => {
		const URL = process.env.REACT_APP_GET_TOKEN_URL
		const AUTH = `Basic ${window.btoa(
			`${process.env.REACT_APP_USERNAME}:${process.env.REACT_APP_PASSWORD}`
		)}`
		fetch(URL, {
			method: 'POST',
			headers: {
				Authorization: AUTH,
				'Content-Type': 'application/x-www-form-urlencoded',
				Accept: 'application/json'
			},
			body: 'grant_type=client_credentials'
		})
			.then(res => res.json())
			.then(({ access_token }) => {
				fetch(process.env.REACT_APP_CREATE_REALM_URL, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${access_token}`
					},
					body: JSON.stringify({
						realm: state.realmName,
						displayName: state.realmDisplayName,
						enabled: true,
						sslRequired: 'external',
						registrationAllowed: true,
						registrationEmailAsUsername: true,
						rememberMe: false,
						verifyEmail: false,
						loginWithEmailAllowed: true,
						duplicateEmailsAllowed: false,
						resetPasswordAllowed: false,
						editUsernameAllowed: false,
						bruteForceProtected: false,
						permanentLockout: false,
						maxFailureWaitSeconds: 900,
						minimumQuickLoginWaitSeconds: 60,
						waitIncrementSeconds: 60,
						quickLoginCheckMilliSeconds: 1000,
						maxDeltaTimeSeconds: 43200,
						failureFactor: 30,
						defaultRoles: ['offline_access', 'uma_authorization'],
						requiredCredentials: ['password'],
						otpPolicyType: 'totp',
						otpPolicyAlgorithm: 'HmacSHA1',
						otpPolicyInitialCounter: 0,
						otpPolicyDigits: 6,
						otpPolicyLookAheadWindow: 1,
						otpPolicyPeriod: 30,
						otpSupportedApplications: [
							'FreeOTP',
							'Google Authenticator'
						],
						scopeMappings: [
							{
								clientScope: 'offline_access',
								roles: ['offline_access']
							}
						],
						browserSecurityHeaders: {
							contentSecurityPolicyReportOnly: '',
							xContentTypeOptions: 'nosniff',
							xRobotsTag: 'none',
							xFrameOptions: 'SAMEORIGIN',
							xXSSProtection: '1; mode=block',
							contentSecurityPolicy:
								"frame-src 'self'; frame-ancestors 'self'; object-src 'none';",
							strictTransportSecurity:
								'max-age=31536000; includeSubDomains'
						},
						eventsEnabled: false,
						eventsListeners: ['jboss-logging'],
						enabledEventTypes: [],
						adminEventsEnabled: false,
						adminEventsDetailsEnabled: false,
						internationalizationEnabled: false,
						supportedLocales: [],
						browserFlow: 'browser',
						registrationFlow: 'registration',
						directGrantFlow: 'direct grant',
						resetCredentialsFlow: 'reset credentials',
						clientAuthenticationFlow: 'clients',
						dockerAuthenticationFlow: 'docker auth',
						userManagedAccessAllowed: false
					})
				})
					.then(res => res.json())
					.catch(console.log)
			})
			.catch(console.log)
	}, [])
	return (
		<Wrapper>
			<div>
				<DotScale
					duration="2s"
					color="#04A777"
					dotSize="16px"
					size="32px"
				/>
				<h1>Great! you are one step away from your DailyKit</h1>
				<span>
					Redirecting you to installation guide page. <br /> If it
					doesn't open, <a href="/redirect">click here</a>
				</span>
			</div>
		</Wrapper>
	)
}

export default Installation

const Wrapper = styled.div(
	({ theme: { basePt, colors } }) => css`
		width: 100%;
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		> div {
			text-align: center;
			max-width: ${basePt * 90}px;
			width: calc(100% - ${basePt * 5}px);
			h1 {
				font-weight: 300;
				line-height: ${basePt * 8}px;
				font-size: ${basePt * 4}px;
				color: ${colors.darkText};
			}
			span {
				font-weight: 400;
				font-style: italic;
				line-height: ${basePt * 4}px;
				font-size: ${basePt * 2}px;
				color: ${colors.grayText};
				a {
					text-decoration: none;
					color: ${colors.active};
				}
			}
		}
	`
)
