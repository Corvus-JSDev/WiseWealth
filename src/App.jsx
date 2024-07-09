import "./App.css";
import NavBar from "./shared/NavBar.jsx";
import CalculationsContainer from "./shared/Components/Calc-Container/CalculationsContainer.jsx";

function App() {
	return (
		<>
			<NavBar />
			<div className="OverallContainer">
				<CalculationsContainer />
			</div>
		</>
	);
}
export default App;
