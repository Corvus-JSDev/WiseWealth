export default function calcTakeHomePay(
	yearlySalary,
	deductions = 0,
	stateIncomeTaxRate = 0,
) {
	let outputs = {
		monthlyNetPay: 0,
		yearlyNetPay: 0,
		taxesPaid: 0,
		taxPercentage: 0,
	};

	// Convert state income tax rate from percentage to decimal if necessary
	if (stateIncomeTaxRate > 1) {
		stateIncomeTaxRate /= 100;
	}

	// Define tax brackets and their respective rates
	const taxBrackets = [
		{ min: 0, max: 11600, rate: 0.1 },
		{ min: 11601, max: 47150, rate: 0.12 },
		{ min: 47151, max: 100525, rate: 0.22 },
		{ min: 100526, max: 191950, rate: 0.24 },
		{ min: 191951, max: 243725, rate: 0.32 },
		{ min: 243726, max: 609350, rate: 0.35 },
		{ min: 609351, max: Infinity, rate: 0.37 },
	];

	// Calculate taxable income after deductions
	let taxableIncome = yearlySalary - deductions;

	// Initialize total tax amount
	let totalFederalTax = 0;

	// Calculate federal tax using brackets
	for (let i = 0; i < taxBrackets.length; i++) {
		let bracket = taxBrackets[i];

		if (taxableIncome > bracket.max) {
			totalFederalTax += (bracket.max - bracket.min + 1) * bracket.rate;
		} else if (taxableIncome > bracket.min) {
			totalFederalTax += (taxableIncome - bracket.min + 1) * bracket.rate;
			break; // Exit loop once applicable tax bracket is found
		}
	}

	// Calculate state tax
	let totalStateTax = taxableIncome * stateIncomeTaxRate;

	// Calculate net pay (take-home pay)
	let yearlyNetPay = yearlySalary - totalFederalTax - totalStateTax;

	let monthlyNetPay = yearlyNetPay / 12;

	// Round net pay to two decimal places
	monthlyNetPay = Math.round(monthlyNetPay * 100) / 100;

	outputs.monthlyNetPay = monthlyNetPay;
	outputs.yearlyNetPay = monthlyNetPay * 12;

	// Calculate taxes paid
	const taxesPaid = yearlySalary - yearlyNetPay;
	outputs.taxesPaid = Math.round(taxesPaid);

	// Calculate tax percentage
	const taxPercentage = (taxesPaid / yearlySalary) * 100;
	outputs.taxPercentage = taxPercentage.toFixed(2); // Round to two decimal places

	return outputs;
}
