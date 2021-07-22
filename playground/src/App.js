import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import HomePage from "./components/HomePage";
import MarketingPage from "./components/MarketingPage";
function App() {
	return (
		<Router>
			<div className="App">
				<Header />
				<Route exact path="/">
					<HomePage />
				</Route>
				<Route exact path="/projects">
					<MarketingPage />
				</Route>
			</div>
		</Router>
	);
}

export default App;
