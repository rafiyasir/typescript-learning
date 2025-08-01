import React from "react";
import ReactDOM from "react-dom";

interface AppProps {
	color?: string;
}
class App extends React.Component<AppProps> {
	render() {
		return <div>Hi there: {this.props.color}</div>;
	}
}

ReactDOM.render(<App color="red" />, document.querySelector("#root"));
