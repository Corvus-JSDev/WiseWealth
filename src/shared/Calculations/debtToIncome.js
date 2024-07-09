export default function calcDebtToIncomeRatio(
	monthlyDebtPayments,
	grossMonthlyIncome,
) {
	// Calculate DTI ratio
	let dtiRatio = (monthlyDebtPayments / grossMonthlyIncome) * 100;

	// Round DTI ratio to two decimal places
	dtiRatio = Math.round(dtiRatio * 100) / 100;

	return dtiRatio;
}
