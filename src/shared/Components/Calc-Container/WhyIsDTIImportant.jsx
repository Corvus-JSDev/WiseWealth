import style from "./style.module.css";

export default function WhyIsDTIImportant() {
	return (
		<div className={style.DTImonologue}>
			<h1>What is DTI and why is it important?</h1>

			<p>
				The debt-to-income (DTI) ratio is a financial measurement
				used by lenders (banks) to assess a borrower's (you)
				ability to manage monthly payments and repay debts
				responsibly. It measures the percentage of your monthly
				gross income that goes toward paying debts, including
				mortgage payments, credit card bills, student loans, and
				car loans.
			</p>
			<p>
				For lenders, the DTI ratio provides a picture of a
				borrower's financial health and their capacity to take on
				additional debt. A lower DTI ratio indicates that a
				borrower has more disposable income after meeting debt
				obligations, suggesting they are less risky to lend to.
				Conversely, a higher DTI ratio may indicate that the
				borrower is overextended financially and may struggle to
				make timely payments on new debt.
			</p>
			<p>
				Bankers typically look for DTI ratios that fall within
				certain guidelines to ensure that borrowers can
				comfortably afford their existing debts while taking on
				additional obligations, such as a mortgage. While specific
				thresholds can vary by lender and loan type, a DTI ratio
				of 36% or lower is generally considered favorable,
				although some lenders may accept higher ratios depending
				on other factors like credit score and overall financial
				stability.
			</p>
			<p>
				In essence, the DTI ratio serves as a crucial tool for
				bankers to assess risk and make informed decisions about
				lending, helping to protect both lenders and borrowers
				from financial strain and potential default.
			</p>
		</div>
	);
}
