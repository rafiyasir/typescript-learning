import React from "react";
import { connect } from "react-redux";
import { Todo, fetchTodos, deleteTodo } from "./actions";
import { StoreState } from "../reducers";

interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}
export class _App extends React.Component<AppProps> {
  onButtonClick = () => {
    this.props.fetchTodos();
  };
  onTodoClick = (id: number) => {
    this.props.deleteTodo(id);
  };
  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => (
      <li key={todo.id} onClick={() => this.onTodoClick(todo.id)}>
        {todo.title}
      </li>
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

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);
