import { useEffect, useState } from "react";
import style from "./style.module.css";
import calcTakeHomePay from "../../Calculations/takeHomePay.js";

export default function Mortgage() {
	const [monthlyPayment, setMonthlyPayment] = useState();
	const [totalPayment, setTotalPayment] = useState();
	const [interestPayment, setInterestPayment] = useState();
	const [taxPercent, setTaxPercent] = useState();

	useEffect(() => {
		const SalaryInput = document.querySelector("#TakeHomePrice");
		const DeductionsInput = document.querySelector(
			"#TakeHomeDeductions",
		);
		const StateTaxInput = document.querySelector(
			"#TakeHomeStateTax",
		);

		const SalaryTitle = document.querySelector(
			"#TakeHomePriceContainer",
		);
		SalaryTitle.addEventListener("click", () => {
			SalaryInput.focus();
		});

		const DeductionsTitle = document.querySelector(
			"#TakeHomeDeductionsContainer",
		);
		DeductionsTitle.addEventListener("click", () => {
			DeductionsInput.focus();
		});

		const StateTaxTitle = document.querySelector(
			"#TakeHomeStateTaxContainer",
		);
		StateTaxTitle.addEventListener("click", () => {
			StateTaxInput.focus();
		});

		//* Functions
		function calcOutputValues() {
			const PriceValue = SalaryInput.value;
			const DeductionValue = DeductionsInput.value;
			const TaxValue = StateTaxInput.value;

			const outputs = calcTakeHomePay(
				PriceValue,
				DeductionValue,
				TaxValue,
			);

			setMonthlyPayment(outputs.monthlyNetPay);
			setTotalPayment(outputs.yearlyNetPay);
			setInterestPayment(outputs.taxesPaid);
			setTaxPercent(outputs.taxPercentage);
		}

		SalaryInput.addEventListener("input", () => {
			calcOutputValues();
		});

		DeductionsInput.addEventListener("input", () => {
			calcOutputValues();
		});

		StateTaxInput.addEventListener("input", () => {
			calcOutputValues();
		});
	}, []);

	return (
		<div className={style.thpContainer}>
			{/* LEFT: Inputs */}
			<div className={style.LeftInputsContainer}>
				<h2>Annual Salary</h2>
				<div
					id="TakeHomePriceContainer"
					className={style.inputContainer}
				>
					<span>$</span>
					<input
						id="TakeHomePrice"
						type="number"
					/>
				</div>

				<h2>Deductions</h2>
				<div
					id="TakeHomeDeductionsContainer"
					className={style.inputContainer}
				>
					<span>$</span>
					<input
						id="TakeHomeDeductions"
						type="number"
					/>
				</div>

				<h2>State Income Tax Rate</h2>
				<div
					id="TakeHomeStateTaxContainer"
					className={style.inputContainer}
				>
					<span>%</span>
					<input
						id="TakeHomeStateTax"
						type="number"
					/>
				</div>
				<a
					style={{ textDecoration: "underline" }}
					target="_blank"
					href="https://www.nerdwallet.com/article/taxes/state-income-tax-rates"
				>
					Find out your states tax
				</a>
			</div>

			{/* RIGHT: Output */}
			<div className={style.outputContainer}>
				<h1>Monthly Income After Tax</h1>
				{!isNaN(monthlyPayment) && isFinite(monthlyPayment) ? (
					<p className={style.mainOutput}>
						$ {monthlyPayment.toLocaleString()}{" "}
					</p>
				) : (
					<p className={style.mainOutput}>Waiting...</p>
				)}

				<h3>Yearly Take Home</h3>
				{!isNaN(totalPayment) && isFinite(totalPayment) ? (
					<p>$ {totalPayment.toLocaleString()} </p>
				) : (
					<p>...</p>
				)}

				<h3>Total Tax paid</h3>
				{!isNaN(interestPayment) && isFinite(interestPayment) ? (
					<p>
						$ {interestPayment.toLocaleString()} ({taxPercent}%){" "}
					</p>
				) : (
					<p>...</p>
				)}
			</div>
		</div>
	);
}
