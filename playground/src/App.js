import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import LayoutOne from "./components/LayoutOne";

function App() {
	return (
		<Router>
			<div className="App">
				<Header />
				<Route exact path="/">
					<LayoutOne />
				</Route>
				{/* <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/about">
          <About />
        </Route> */}
			</div>
		</Router>
	);
}

export default App;
