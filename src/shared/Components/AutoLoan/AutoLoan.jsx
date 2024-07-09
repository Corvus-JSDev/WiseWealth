import { useEffect, useState } from "react";
import style from "./style.module.css";
import calcAutoLoan from "../../Calculations/autoLoan.js";

export default function AutoLoan() {
	const [monthlyPayment, setMonthlyPayment] = useState();
	const [totalPayment, setTotalPayment] = useState();
	const [interestPayment, setInterestPayment] = useState();

	const [years, setYears] = useState("x");

	useEffect(() => {
		const TermInput = document.querySelector("#AutoTerm");
		const PriceInput = document.querySelector("#AutoPrice");
		const DownInput = document.querySelector("#AutoDown");
		const InterestInput = document.querySelector("#AutoInterest");

		//* Input thingys
		const TermTitle = document.querySelector("#AutoTermContainer");
		TermTitle.addEventListener("click", () => {
			TermInput.focus();
		});

		const PriceTitle = document.querySelector(
			"#AutoPriceContainer",
		);
		PriceTitle.addEventListener("click", () => {
			PriceInput.focus();
		});

		const InterestTitle = document.querySelector(
			"#AutoInterestContainer",
		);
		InterestTitle.addEventListener("click", () => {
			InterestInput.focus();
		});

		const DownTitle = document.querySelector("#AutoDownContainer");
		DownTitle.addEventListener("click", () => {
			DownInput.focus();
		});

		//* Functions
		function calculateRemaining(number, percent) {
			let output = {
				remaining: 0,
				subtracted: 0,
			};

			let decimalPercent = percent / 100;
			let amountToSubtract = number * decimalPercent;
			let remaining = number - amountToSubtract;

			output.remaining = remaining;
			output.subtracted = amountToSubtract;

			return output;
		}

		function calcOutputValues() {
			const PriceValue = PriceInput.value;
			const DownValue = DownInput.value;

			const calcRemaining = calculateRemaining(
				PriceValue,
				DownValue,
			);
			const Principal = calcRemaining.remaining;
			const Subtracted = calcRemaining.subtracted;

			const InterestValue = InterestInput.value;
			const TermValue = TermInput.value;

			const outputs = calcAutoLoan(
				Principal,
				InterestValue,
				TermValue,
				Subtracted,
			);

			setMonthlyPayment(outputs.monthlyPayment);
			setTotalPayment(outputs.totalPayed);
			setInterestPayment(outputs.totalInterest);
		}

		//* Event listeners

		PriceInput.addEventListener("input", () => {
			calcOutputValues();
		});

		InterestInput.addEventListener("input", () => {
			calcOutputValues();
		});

		DownInput.addEventListener("input", () => {
			calcOutputValues();
		});

		TermInput.addEventListener("input", () => {
			calcOutputValues();
			const TermValue = TermInput.value;

			if (TermValue) {
				setYears(TermValue);
			} else {
				setYears("x");
			}
		});
	}, []);

	return (
		<div className={style.autoLoanContainer}>
			{/* LEFT: Inputs */}
			<div className={style.LeftInputsContainer}>
				<h2>Price of Vehicle </h2>
				<div
					id="AutoPriceContainer"
					className={style.inputContainer}
				>
					<span>$</span>
					<input
						id="AutoPrice"
						type="number"
					/>
				</div>

				<h2>Interest Rate</h2>
				<div
					id="AutoInterestContainer"
					className={style.inputContainer}
				>
					<span>%</span>
					<input
						id="AutoInterest"
						type="number"
					/>
				</div>

				<h2>
					Down Payment <small>(%)</small>
				</h2>
				<div
					id="AutoDownContainer"
					className={style.inputContainer}
				>
					<span>%</span>
					<input
						id="AutoDown"
						type="number"
					/>
				</div>

				<h2>
					Term of the Loan <small>(in years)</small>
				</h2>
				<div
					id="AutoTermContainer"
					className={style.inputContainer}
				>
					<span>yr</span>
					<input
						id="AutoTerm"
						type="number"
					/>
				</div>
			</div>

			{/* RIGHT: Output */}
			<div className={style.outputContainer}>
				<h1>Monthly Payment</h1>
				{!isNaN(monthlyPayment) &&
				isFinite(monthlyPayment) &&
				monthlyPayment !== 0 ? (
					<p className={style.mainOutput}>
						$ {monthlyPayment.toLocaleString()}{" "}
					</p>
				) : (
					<p className={style.mainOutput}>Waiting...</p>
				)}

				<h3>Total paid over {years} years</h3>
				{!isNaN(totalPayment) &&
				isFinite(totalPayment) &&
				monthlyPayment !== 0 ? (
					<p>$ {totalPayment.toLocaleString()} </p>
				) : (
					<p>...</p>
				)}

				<h3>Total spent on Interest</h3>
				{!isNaN(interestPayment) &&
				isFinite(interestPayment) &&
				monthlyPayment !== 0 ? (
					<p>$ {interestPayment.toLocaleString()} </p>
				) : (
					<p>...</p>
				)}
			</div>
		</div>
	);
}
