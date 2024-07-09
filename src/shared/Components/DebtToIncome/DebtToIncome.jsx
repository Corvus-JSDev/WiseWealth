import { useEffect, useState } from "react";
import style from "./style.module.css";
import calcDebtToIncomeRatio from "../../Calculations/debtToIncome.js";

export default function Mortgage() {
	const [income, setIncome] = useState();
	// const [debt, setDebt] = useState();
	const [ratioLevel, setRatioLevel] = useState();

	useEffect(() => {
		//* Input thingys
		const DebtsInput = document.querySelector("#Debts");
		const IncomeInput = document.querySelector("#GrossIncome");

		const DebtsTitle = document.querySelector("#DebtsContainer");
		DebtsTitle.addEventListener("click", () => {
			DebtsInput.focus();
		});

		const IncomeTitle = document.querySelector(
			"#GrossIncomeContainer",
		);
		IncomeTitle.addEventListener("click", () => {
			IncomeInput.focus();
		});

		//* Functions
		function evaluateDTIRatio(dtiRatio) {
			let evaluation = "";

			switch (true) {
				case dtiRatio <= 20:
					evaluation = "Amazing";
					break;
				case dtiRatio <= 35:
					evaluation = "Good";
					break;
				case dtiRatio <= 49:
					evaluation = "Average";
					break;
				case dtiRatio <= 59:
					evaluation = "Bad";
					break;
				default:
					evaluation = "Terrible";
					break;
			}

			return evaluation;
		}

		function calcOutputValues() {
			const DebtValue = DebtsInput.value;
			const IncomeValue = IncomeInput.value;

			const output = calcDebtToIncomeRatio(DebtValue, IncomeValue);

			setIncome(output);

			const score = evaluateDTIRatio(output);

			setRatioLevel(score);
		}

		//* Event Listeners
		DebtsInput.addEventListener("input", () => {
			calcOutputValues();
		});
		IncomeInput.addEventListener("input", () => {
			calcOutputValues();
		});
	}, []);

	return (
		<>
			<div className={style.dtiContainer}>
				{/* LEFT: Inputs */}
				<div className={style.LeftInputsContainer}>
					<h2>Total Monthly Debts</h2>
					<small>Credit Cards, Car Payment, etc.</small>
					<div
						id="DebtsContainer"
						className={style.inputContainer}
					>
						<span>$</span>
						<input
							id="Debts"
							type="number"
						/>
					</div>

					<h2>Gross Monthly Income</h2>
					<small>Before tax</small>
					<div
						id="GrossIncomeContainer"
						className={style.inputContainer}
					>
						<span>$</span>
						<input
							id="GrossIncome"
							type="number"
						/>
					</div>
				</div>

				{/* RIGHT: Output */}
				<div className={style.outputContainer}>
					<h1>Debt to income ratio</h1>
					{!isNaN(income) && isFinite(income) ? (
						<p className={style.mainOutput}>{income} %</p>
					) : (
						<p className={style.mainOutput}>Waiting...</p>
					)}

					<h3>Ratio Score</h3>
					{ratioLevel ? <p>{ratioLevel}</p> : <p>...</p>}
				</div>
			</div>
		</>
	);
}
