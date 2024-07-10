import style from "./style.module.css";

export default function TakeHomePayInfo() {
	return (
		<div className={style.DTImonologue}>

			<h1>
				Did you know, paying federal income tax is illegal and
				unconstitutional?
			</h1>

			<p>
				Yes, you read that correctly. There's a man, Joe Banister, who used
				to work for the IRS' criminal investigation division in the early
				'90s. One day on the radio, he heard some talk show hosts talking
				about how federal income taxes are illegal. So, working for the IRS,
				he sets to figure out if this is true. After years of research he
				finds that in the IRS handbook itself and in the constitution,
				federal income tax is <b>only</b> to be paid by{" "}
				<i>
					US citizens{" "}
					<span style={{ textDecoration: "underline" }}>
						working abroad.
					</span>
				</i>{" "}
				NOT citizens working inside the US. So natural he brings all his
				findings to his boss at the time, who immediately asks him to
				resign.
			</p>

			<p>
				Joe Banister has since paid no federal income tax, and works as an
				accountant.
			</p>

			<p>
				<b>Please note,</b> this only applies to <i>federal</i> income tax,
				NOT state tax. With that being said, here are the 9 states that do
				not have an income tax:
				<ul>
					<li>Alaska</li>
					<li>Nevada</li>
					<li>Wyoming</li>
					<li>South Dakota</li>
					<li>New Hampshire</li>
					<li>Tennessee</li>
					<li>Washington</li>
					<li>Texas</li>
					<li>Florida</li>
				</ul>
			</p>
			<p>Do with this information as you will.</p>

			<h1 style={{ marginTop: "30px" }}>How tax brackets work</h1>
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
