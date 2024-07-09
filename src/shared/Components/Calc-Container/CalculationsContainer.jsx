import style from "./style.module.css";
import React, { useState } from "react";
import styled from "styled-components";
import WhyIsDTIImportant from "./WhyIsDTIImportant.jsx";
import TakeHomePayInfo from "./HowToCalcIncome.jsx";

import Mortgage from "../Mortgage/Mortgage.jsx";
import AutoLoan from "../AutoLoan/AutoLoan.jsx";
import TakeHomePay from "../TakeHomePay/TakeHomePay.jsx";
import DebtToIncome from "../DebtToIncome/DebtToIncome.jsx";

// Styles for the Tabs
const Tab = styled.button`
	position: relative;
	font-size: 20px;
	letter-spacing: 1px;
	padding: 10px 60px;
	cursor: pointer;
	opacity: 0.6;
	background: #30373a;
	border: 1px solid black;
	outline: 0;
	${({ active }) =>
		active &&
		`
      border-bottom: 2px solid var(--green-color);
      opacity: 1;
		background-color: rgba(109, 243, 193, 0.15);
		font-weight: 600;
		`}
`;
const ButtonGroup = styled.div`
	display: flex;
`;

// How many Tabs there are and what are their names
// To add a new tab, simply add a work into this list
const types = [
	"Mortgage",
	"Auto Loan",
	"Take Home Pay",
	"Debt-to-Income",
];

function TabGroup() {
	const [active, setActive] = useState(types[0]);

	return (
		<>
			<div className={style.calcContainer}>
				<ButtonGroup>
					{types.map((type) => (
						<Tab
							key={type}
							active={active === type}
							onClick={() => setActive(type)}
						>
							{type}
						</Tab>
					))}
				</ButtonGroup>

				{/* Mortgage */}
				{active === "Mortgage" && (
					<div className={style.mortgageContainer}>
						<Mortgage />
					</div>
				)}

				{/* Auto Loan */}
				{active === "Auto Loan" && (
					<div className={style.autoLoanContainer}>
						<AutoLoan />
					</div>
				)}

				{/* Take Home Pay */}
				{active === "Take Home Pay" && (
					<div className={style.takeHomePayContainer}>
						<TakeHomePay />
						<hr />
						<TakeHomePayInfo />
					</div>
				)}

				{/* Debt to Income */}
				{active === "Debt-to-Income" && (
					<>
						<div className={style.dtiContainer}>
							<DebtToIncome />
							<hr />
							<WhyIsDTIImportant />
						</div>
					</>
				)}
			</div>
		</>
	);
}

export default function CalculationsContainer() {
	return <TabGroup />;
}
