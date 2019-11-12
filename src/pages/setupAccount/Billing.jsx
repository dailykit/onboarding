import React from 'react'
import styled from 'styled-components'

import {
	Wrapper,
	Footer,
	Main,
	Form,
	Field,
	Label,
	Error
} from '../basicInfo/Styles'
import { Context } from '../../state'

import validate from '../../validators/validate'

const Billing = () => {
	const { state, dispatch } = React.useContext(Context)
	const [form, setForm] = React.useState({
		cardNo: state.user_data.billing_info.cardNo,
		expiry: state.user_data.billing_info.expiry,
		cvv: state.user_data.billing_info.cvv,
		cardName: state.user_data.billing_info.cardName,
		address: state.user_data.billing_address.address,
		city: state.user_data.billing_address.city,
		zip: state.user_data.billing_address.zip,
		name: state.user_data.billing_address.name,
		phoneCode: state.user_data.billing_address.phoneCode,
		phoneNo: state.user_data.billing_address.phoneNo
	})

	const [errors, setErrors] = React.useState({
		cardNo: '',
		expiry: '',
		cvv: '',
		cardName: '',
		address: '',
		city: '',
		zip: '',
		name: '',
		phoneCode: '',
		phoneNo: ''
	})

	const handleChange = e => {
		const { name, value } = e.target
		setForm(form => ({
			...form,
			[name]: value
		}))
		validate(value, name, 'form4', setErrors)
	}

	const checkout = () => {
		dispatch({
			type: 'SET_FORM7',
			payload: {
				...form
			}
		})
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
			<ExtMain>
				<div>
					<h2>Billing Information</h2>
					<Form>
						<Field>
							<input
								type="text"
								id="cardNo"
								name="cardNo"
								required
								value={form.cardNo}
								onChange={e => handleChange(e)}
							/>
							<Label htmlFor="cardNo">Card No.</Label>
						</Field>
						{errors.cardNo && <Error>{errors.cardNo}</Error>}
						<ExtendField>
							<div>
								<input
									type="text"
									id="expiry"
									name="expiry"
									required
									value={form.expiry}
									onChange={e => handleChange(e)}
								/>
								<Label htmlFor="expiry">
									Expiry Date(dd/mm/yyyy)
								</Label>
							</div>
							{errors.expiry && <Error>{errors.expiry}</Error>}
							<div>
								<input
									type="text"
									id="cvv"
									name="cvv"
									required
									value={form.cvv}
									onChange={e => handleChange(e)}
								/>
								<Label htmlFor="cvv">CVV</Label>
							</div>
							{errors.cvv && <Error>{errors.cvv}</Error>}
						</ExtendField>
						<Field>
							<input
								type="text"
								id="cardName"
								name="cardName"
								required
								value={form.cardName}
								onChange={e => handleChange(e)}
							/>
							<Label htmlFor="cardName">Name on Card</Label>
						</Field>
						{errors.cardName && <Error>{errors.cardName}</Error>}
					</Form>
					<h2 style={{ marginTop: '16px' }}>Billing Address</h2>
					<Form>
						<Field>
							<input
								type="text"
								id="address"
								name="address"
								required
								value={form.address}
								onChange={e => handleChange(e)}
							/>
							<Label htmlFor="address">Enter your Address</Label>
						</Field>
						{errors.address && <Error>{errors.address}</Error>}
						<ExtendField>
							<div>
								<input
									type="text"
									id="city"
									name="city"
									required
									value={form.city}
									onChange={e => handleChange(e)}
								/>
								<Label htmlFor="city">City</Label>
							</div>
							{errors.city && <Error>{errors.city}</Error>}
							<div>
								<input
									type="number"
									id="zip"
									name="zip"
									required
									value={form.zip}
									onChange={e => handleChange(e)}
								/>
								<Label htmlFor="zip">Zip Code</Label>
							</div>
							{errors.zip && <Error>{errors.zip}</Error>}
						</ExtendField>
						<Field>
							<input
								type="text"
								id="name"
								name="name"
								required
								value={form.name}
								onChange={e => handleChange(e)}
							/>
							<Label htmlFor="name">Name</Label>
						</Field>
						{errors.name && <Error>{errors.name}</Error>}
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
							</div>
							{errors.phoneNo && <Error>{errors.phoneNo}</Error>}
						</Field>
					</Form>
				</div>
			</ExtMain>
			<Footer>
				<button onClick={() => prevPage()}>Back</button>
				<button
					onClick={() => checkout()}
					style={{
						background: '#04a777'
					}}>
					Checkout
				</button>
			</Footer>
		</Wrapper>
	)
}

export default Billing

const ExtMain = styled(Main)`
	> div {
		width: 640px;
	}
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

const ExtendField = styled(Field)`
	display: flex;
	> div:first-child {
		input {
			width: 200px;
		}
	}
	> div:last-child {
		margin-left: 24px;
		input {
			width: 96px;
		}
	}
`
