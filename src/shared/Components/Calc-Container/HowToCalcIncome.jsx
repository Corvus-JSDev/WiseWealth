import style from "./style.module.css";

export default function TakeHomePayInfo() {
	return (
		<div className={style.DTImonologue}>
			<h1>How tax brackets work</h1>
			<p>
				The US tax bracket system is structured to ensure that taxes are
				levied progressively based on income.
			</p>

			<p>
				Imagine your income as slices of a pie. The IRS divides this pie
				into different slices, which we call tax brackets. Each slice (or
				bracket) covers a range of income. The idea is that as you earn
				more, you pay a higher percentage of taxes on that additional
				income.
			</p>

			<p style={{ marginBottom: "5px" }}>
				For example, let's say there are two tax brackets:
			</p>

			<ul style={{ marginBottom: "30px" }}>
				<li>10% for income up to $10,000</li>
				<li>20% for income above $10,000</li>
			</ul>

			<p>
				If you earn $15,000, you'd pay 10% on the first $10,000 (which is
				$1,000) and 20% on the remaining $5,000 (which is $1,000). So your
				total tax would be $2,000. This structure ensures that higher
				earners contribute more in taxes proportionally, reflecting the
				principle of progressive taxation.
			</p>

			<p>
				Understanding tax brackets helps you predict how much of your income
				will go towards taxes and allows you to plan your finances
				accordingly. It's an essential part of how the government funds
				public services and programs while distributing the tax burden
				fairly based on income levels.
			</p>
		</div>
	);
}
