export default function calcMortgage(
	principal,
	annualInterestRate,
	loanTermYears,
	annualPropertyTax = 0,
	subtractedAmount,
) {
	let outputValues = {
		monthlyPayment: 0,
		totalPayed: 0,
		totalInterest: 0,
	};

	// Convert annual interest rate to monthly interest rate
	let monthlyInterestRate = annualInterestRate / 12 / 100;

	// Convert loan term from years to months
	let numberOfPayments = loanTermYears * 12;

	// Calculate monthly payment using formula
	let monthlyPayment =
		(principal * monthlyInterestRate) /
		(1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

	// Round monthly payment to two decimal places
	monthlyPayment = Math.round(monthlyPayment * 100) / 100;

	// Calculate total property tax
	let taxesDue = annualPropertyTax * loanTermYears;

	// Add monthly property tax to monthly payment
	let totalMonthlyPayment = monthlyPayment;

	// Round total monthly payment to two decimal places
	totalMonthlyPayment = Math.round(totalMonthlyPayment * 100) / 100;

	outputValues.monthlyPayment = totalMonthlyPayment;

	const totalPayed = Math.round(
		totalMonthlyPayment * numberOfPayments + subtractedAmount,
	);

	outputValues.totalPayed = totalPayed + taxesDue;

	const interestPayed = Math.round(totalPayed - principal);

	outputValues.totalInterest = interestPayed;

	return outputValues;
}

console.log(calcMortgage(300000, 7, 30, 3));
