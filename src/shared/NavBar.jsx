import style from "./style.module.css";

export default function NavBar() {
	return (
		<div className={style.NavBar}>
			<div>
				<a
					target="_blank"
					href="https://github.com/Corvus-JSDev/WiseWealth/tree/main?tab=readme-ov-file#about"
				>
					About
				</a>
				<p style={{ cursor: "default" }}>•</p>
				<a
					target="_blank"
					href="https://github.com/Corvus-JSDev/WiseWealth/tree/main?tab=readme-ov-file#how-to-use"
				>
					How To Use
				</a>
			</div>
		</div>
	);
}
// TODO: Both of the about and how-to links will direct the user to the github page
