import React from "react";
import ReactDOM from "react-dom";

interface AppProps {
	color?: string;
}
class App extends React.Component<AppProps> {
	state = { counter: 0 };
	incrementCounter = () => {
		this.setState({ counter: this.state.counter + 1 });
	};
	decrementCounter = () => {
		this.setState({ counter: this.state.counter - 1 });
	};
	render() {
		return (
			<div>
				<button onClick={this.incrementCounter}>Increment</button>
				<button onClick={this.decrementCounter}>Decrement</button>
				{this.state.counter}
			</div>
		);
	}
}

ReactDOM.render(<App color="red" />, document.querySelector("#root"));
