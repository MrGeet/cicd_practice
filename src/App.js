import logo from './logo.svg';
import './App.css';
import { sum } from './Calc';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
			<div className="container">
				<div>This is to test the function: sum of 3 and 4 is {sum(3, 4)}</div>
			</div>
		</div>
	);
}

export default App;
