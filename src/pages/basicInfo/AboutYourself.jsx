import React from 'react'

import { Footer, Main, Wrapper, Field, Label, Form, Error } from './Styles'
import { Context } from '../../state'

import validate from '../../validators/validate'

const AboutYourself = () => {
	const { state, dispatch } = React.useContext(Context)
	const [form, setForm] = React.useState({
		name: state.user_data.name,
		designation: state.user_data.designation,
		phoneCode: state.user_data.phoneCode,
		phoneNo: state.user_data.phoneNo
	})

	const [errors, setErrors] = React.useState({
		name: '',
		designation: '',
		phoneCode: '',
		phoneNo: ''
	})

	const handleChange = e => {
		const { name, value } = e.target
		setForm(form => ({
			...form,
			[name]: value
		}))
		validate(value, name, 'form3', setErrors)
	}

	const nextPage = () => {
		dispatch({
			type: 'SET_FORM3',
			payload: {
				...form
			}
		})
		dispatch({ type: 'NEXT_PAGE' })
	}
	const prevPage = () => dispatch({ type: 'PREV_PAGE' })

	const codes = [
		'+93',
		'+355',
		'+213',
		'+1 (684)',
		'+376',
		'+244',
		'+1 (264)',
		'+1 (268)',
		'+54',
		'+374',
		'+297',
		'+247',
		'+61',
		'+672',
		'+43',
		'+994',
		'+1 (242)',
		'+973',
		'+880',
		'+1 (246)',
		'+375',
		'+32',
		'+501',
		'+229',
		'+1 (441)',
		'+975',
		'+591',
		'+387',
		'+267',
		'+55',
		'+1 (284)',
		'+673',
		'+359',
		'+226',
		'+95',
		'+257',
		'+855',
		'+237',
		'+238',
		'+1 (345)',
		'+236',
		'+235',
		'+56',
		'+86',
		'+57',
		'+243',
		'+242',
		'+682',
		'+506',
		'+225',
		'+385',
		'+53',
		'+357',
		'+420',
		'+45',
		'+246',
		'+253',
		'+1 (767)',
		'+1 (809/829)',
		'+593',
		'+20',
		'+503',
		'+240',
		'+291',
		'+372',
		'+251',
		'+500',
		'+298',
		'+679',
		'+358',
		'+33',
		'+262',
		'+594',
		'+689',
		'+241',
		'+220',
		'+995',
		'+49',
		'+233',
		'+350',
		'+881',
		'+30',
		'+299',
		'+1 (473)',
		'+388',
		'+590',
		'+1 (671)',
		'+502',
		'+224',
		'+245',
		'+592',
		'+509',
		'+379',
		'+39',
		'+504',
		'+852',
		'+36',
		'+354',
		'+91',
		'+62',
		'+870',
		'+800',
		'+882',
		'+883',
		'+979',
		'+808',
		'+98',
		'+964',
		'+353',
		'+972',
		'+1 (876)',
		'+81',
		'+962',
		'+7',
		'+254',
		'+686',
		'+850',
		'+82',
		'+965',
		'+996',
		'+856',
		'+371',
		'+961',
		'+266',
		'+231',
		'+218',
		'+423',
		'+370',
		'+352',
		'+853',
		'+389',
		'+261',
		'+265',
		'+60',
		'+960',
		'+223',
		'+356',
		'+692',
		'+596',
		'+222',
		'+230',
		'+269',
		'+52',
		'+691',
		'+373',
		'+377',
		'+976',
		'+382',
		'+1 (664)',
		'+212',
		'+258',
		'+264',
		'+674',
		'+977',
		'+31',
		'+599',
		'+687',
		'+64',
		'+505',
		'+227',
		'+234',
		'+683',
		'+1 (670)',
		'+47',
		'+968',
		'+92',
		'+680',
		'+507',
		'+675',
		'+595',
		'+51',
		'+63',
		'+48',
		'+351',
		'+1 (787/939)',
		'+974',
		'+970',
		'+40',
		'+250',
		'+290',
		'+1 (869)',
		'+1 (758)',
		'+508',
		'+1 (784)',
		'+685',
		'+378',
		'+239',
		'+966',
		'+221',
		'+381',
		'+248',
		'+232',
		'+65',
		'+421',
		'+386',
		'+677',
		'+252',
		'+27',
		'+34',
		'+94',
		'+249',
		'+597',
		'+268',
		'+46',
		'+41',
		'+963',
		'+886',
		'+992',
		'+255',
		'+888',
		'+66',
		'+670',
		'+228',
		'+690',
		'+676',
		'+991',
		'+1 (868)',
		'+216',
		'+90',
		'+993',
		'+1 (649)',
		'+688',
		'+256',
		'+380',
		'+971',
		'+44',
		'+1',
		'+878',
		'+598',
		'+998',
		'+678',
		'+58',
		'+84',
		'+1 (340)',
		'+681',
		'+967',
		'+260',
		'+263'
	]
	return (
		<Wrapper>
			<Main>
				<div>
					<h4>Tell us about yourself</h4>
					<Form>
						<Field>
							<input
								type="text"
								id="name"
								name="name"
								required
								value={form.name}
								onChange={e => handleChange(e)}
							/>
							<Label htmlFor="name">Your Name</Label>
						</Field>
						{errors.name && <Error>{errors.name}</Error>}
						<Field>
							<input
								type="text"
								id="designation"
								name="designation"
								required
								value={form.designation}
								onChange={e => handleChange(e)}
							/>
							<Label htmlFor="designation">
								Your Designation
							</Label>
						</Field>
						{errors.designation && (
							<Error>{errors.designation}</Error>
						)}
						<Field style={{ display: 'flex' }}>
							<select
								name="phoneCode"
								id="phoneCode"
								value={form.phoneCode}
								onChange={e => handleChange(e)}>
								{codes.map(code => (
									<option key={code} value={code}>
										{code}
									</option>
								))}
							</select>
							<div>
								<input
									type="tel"
									id="phoneNo"
									name="phoneNo"
									maxLength="10"
									required
									value={form.phoneNo}
									onChange={e => handleChange(e)}
									style={{
										width: '205px',
										marginLeft: '16px'
									}}
								/>
								<Label
									htmlFor="phoneNo"
									style={{ marginLeft: '16px' }}>
									Your Phone Number
								</Label>
								{errors.phoneNo && (
									<Error style={{ marginLeft: '16px' }}>
										{errors.phoneNo}
									</Error>
								)}
							</div>
						</Field>
					</Form>
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

export default AboutYourself
