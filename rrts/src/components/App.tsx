import React from "react";
import { connect } from "react-redux";
import { Todo, fetchTodos } from "./actions";
import { StoreState } from "../reducers";

interface AppProps {
  todos: Todo[];
  fetchTodos(): any;
}
export class _App extends React.Component<AppProps> {
  onButtonClick = () => {
    this.props.fetchTodos();
  };
  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => (
      <li key={todo.id}>{todo.title}</li>
    ));
  }

  render(): React.ReactNode {
    return (
      <>
        <button onClick={this.onButtonClick}>Fetch</button>
        {this.renderList()}
      </>
    );
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

export const App = connect(mapStateToProps, { fetchTodos })(_App);
