import React from "react";
import { connect } from "react-redux";
import { Todo, fetchTodos, deleteTodo } from "./actions";
import { StoreState } from "../reducers";

interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

interface AppState {
  fetching: boolean;
}

export class _App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { fetching: false };
  }
  componentDidUpdate(prevProps: AppProps): void {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({ fetching: false });
    }
  }
  onButtonClick = () => {
    this.props.fetchTodos();
    this.setState({ fetching: true });
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
        {this.state.fetching ? "Loading..." : null}
        {this.renderList()}
      </>
    );
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);
