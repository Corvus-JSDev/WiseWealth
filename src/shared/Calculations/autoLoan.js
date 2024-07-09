export default function calcAutoLoan(
	principal,
	annualInterestRate,
	loanTermYears,
	subtractedAmount,
) {
	let outputs = {
		monthlyPayment: 0,
		totalPayed: 0,
		totalInterest: 0,
	};

	// Convert annual interest rate to monthly interest rate
	let monthlyInterestRate = annualInterestRate / 12 / 100;

	// Convert loan term from years to months
	let numberOfPayments = loanTermYears * 12;

	// Calculate monthly payment using formula for auto loans
	let monthlyPayment =
		(principal * monthlyInterestRate) /
		(1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

	// Round monthly payment to two decimal places
	monthlyPayment = Math.round(monthlyPayment * 100) / 100;

	outputs.monthlyPayment = monthlyPayment;

	const totalPayment = monthlyPayment * numberOfPayments + subtractedAmount;

	outputs.totalPayed = totalPayment;

	const interestPayed = totalPayment - principal - subtractedAmount;

	outputs.totalInterest = interestPayed;

	return outputs;
}
