import { useEffect, useState } from "react";
import style from "./style.module.css";
import calcMortgage from "../../Calculations/mortgagePayment.js";

export default function Mortgage() {
	const [monthlyPayment, setMonthlyPayment] = useState();
	const [totalPayment, setTotalPayment] = useState();
	const [interestPayment, setInterestPayment] = useState();

	const [years, setYears] = useState("x");

	useEffect(() => {
		//* Input thingys
		const PriceInput = document.querySelector("#mortgagePrice");
		const DownInput = document.querySelector("#mortgageDown");
		const TermInput = document.querySelector("#mortgageTerm");
		const taxInput = document.querySelector("#mortgageTax");
		const InterestInput = document.querySelector(
			"#mortgageInterest",
		);

		const TermTitle = document.querySelector(
			"#mortgageTermContainer",
		);
		TermTitle.addEventListener("click", () => {
			TermInput.focus();
		});

		const PriceTitle = document.querySelector(
			"#mortgagePriceContainer",
		);
		PriceTitle.addEventListener("click", () => {
			PriceInput.focus();
		});

		const InterestTitle = document.querySelector(
			"#mortgageInterestContainer",
		);
		InterestTitle.addEventListener("click", () => {
			InterestInput.focus();
		});

		const DownTitle = document.querySelector(
			"#mortgageDownContainer",
		);
		DownTitle.addEventListener("click", () => {
			DownInput.focus();
		});

		const TaxTitle = document.querySelector(
			"#mortgageTaxContainer",
		);
		TaxTitle.addEventListener("click", () => {
			taxInput.focus();
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
			const TaxValue = taxInput.value;

			const outputs = calcMortgage(
				Principal,
				InterestValue,
				TermValue,
				TaxValue,
				Subtracted,
			);

			setMonthlyPayment(outputs.monthlyPayment);
			setTotalPayment(outputs.totalPayed);
			setInterestPayment(outputs.totalInterest);
		}

		//* Event Listeners
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

		taxInput.addEventListener("input", () => {
			calcOutputValues();
		});
	}, []);

	return (
		<div className={style.mortgageContainer}>
			{/* LEFT: Inputs */}
			<div className={style.LeftInputsContainer}>
				<h2>Home Price</h2>
				<div
					id="mortgagePriceContainer"
					className={style.inputContainer}
				>
					<span>$</span>
					<input
						id="mortgagePrice"
						type="number"
					/>
				</div>

				<h2>Interest Rate</h2>
				<div
					id="mortgageInterestContainer"
					className={style.inputContainer}
				>
					<span>%</span>
					<input
						id="mortgageInterest"
						type="number"
					/>
				</div>

				<h2>
					Down Payment <small>(%)</small>
				</h2>
				<div
					id="mortgageDownContainer"
					className={style.inputContainer}
				>
					<span>%</span>
					<input
						id="mortgageDown"
						type="number"
					/>
				</div>

				<h2>
					Term of the Loan <small>(in years)</small>
				</h2>
				<div
					id="mortgageTermContainer"
					className={style.inputContainer}
				>
					<span>yr</span>
					<input
						id="mortgageTerm"
						type="number"
					/>
				</div>

				<h2>Annual Property Tax</h2>
				<div
					id="mortgageTaxContainer"
					className={style.inputContainer}
				>
					<span>%</span>
					<input
						id="mortgageTax"
						type="number"
					/>
				</div>
				<a
					style={{ textDecoration: "underline" }}
					target="_blank"
					href="https://www.tax-rates.org/taxtables/property-tax-by-state"
				>
					Find your property tax rate
				</a>
			</div>

			{/* RIGHT: Output */}
			<div className={style.outputContainer}>
				<h1>Monthly Payment</h1>
				{!isNaN(monthlyPayment) && isFinite(monthlyPayment) ? (
					<p className={style.mainOutput}>
						$ {monthlyPayment.toLocaleString()}{" "}
					</p>
				) : (
					<p className={style.mainOutput}>Waiting...</p>
				)}

				<h3>Total paid over {years} years</h3>
				{!isNaN(totalPayment) && isFinite(totalPayment) ? (
					<p>$ {totalPayment.toLocaleString()} </p>
				) : (
					<p>...</p>
				)}

				<h3>Total spent on Interest</h3>
				{!isNaN(interestPayment) && isFinite(interestPayment) ? (
					<p>$ {interestPayment.toLocaleString()} </p>
				) : (
					<p>...</p>
				)}
			</div>
		</div>
	);
}
