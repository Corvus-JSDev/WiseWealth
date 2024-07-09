import style from "./style.module.css";

export default function NavBar() {
	return (
		<div className={style.NavBar}>
			<div>
				<img src="/imgs/WiseWealthLogo2.png" />
				<h1>WiseWealth</h1>
			</div>

			<div>
				<a href="/about">About</a>
				<p style={{ cursor: "default" }}>•</p>
				<a href="/howto">How To Use</a>
			</div>
		</div>
	);
}
// TODO: Both of the about and how-to links will direct the user to the github page
