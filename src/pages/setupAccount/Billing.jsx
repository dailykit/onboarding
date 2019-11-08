import React from 'react'
import styled from 'styled-components'

import { Form, Field, Label } from '../basicInfo/Styles'

const Billing = () => {
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
			<h2>Billing Information</h2>
			<Form>
				<Field>
					<input type="text" id="card" required />
					<Label htmlFor="card">Card No.</Label>
				</Field>
				<ExtendField>
					<div>
						<input type="text" id="expiry" required />
						<Label htmlFor="expiry">Expiry Date(dd/mm/yyyy)</Label>
					</div>
					<div>
						<input type="text" id="cvv" required />
						<Label htmlFor="cvv">CVV</Label>
					</div>
				</ExtendField>
				<Field>
					<input type="text" id="name" required />
					<Label htmlFor="name">Name on Card</Label>
				</Field>
			</Form>
			<h2>Billing Address</h2>
			<Form>
				<Field>
					<input type="text" id="address" required />
					<Label htmlFor="address">Enter your Address</Label>
				</Field>
				<ExtendField>
					<div>
						<input type="text" id="city" required />
						<Label htmlFor="city">City</Label>
					</div>
					<div>
						<input
							type="number"
							id="zip"
							max-length="10"
							required
						/>
						<Label htmlFor="zip">Zip Code</Label>
					</div>
				</ExtendField>
				<Field>
					<input type="text" id="name" required />
					<Label htmlFor="name">Name</Label>
				</Field>
				<Field style={{ display: 'flex' }}>
					<select name="phoneCodes" id="phoneCodes">
						{codes.map(code => (
							<option key={code} value={code}>
								{code}
							</option>
						))}
					</select>
					<div>
						<input
							type="tel"
							id="phoneNumber"
							name="phoneNumber"
							maxLength="10"
							required
							style={{ width: '205px', marginLeft: '16px' }}
						/>
						<Label
							htmlFor="phoneNumber"
							style={{ marginLeft: '16px' }}>
							Your Phone Number
						</Label>
					</div>
				</Field>
			</Form>
		</Wrapper>
	)
}

export default Billing

const Wrapper = styled.div`
	width: 640px;
	h2 {
		font-size: 24px;
		font-weight: 400;
		color: #555b6e;
		margin-bottom: 24px;
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
