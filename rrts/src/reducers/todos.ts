import { FetchTodosAction, Todo, ActionTypes } from "../components/actions"

export const todosReducer = (state:Todo[]=[], action:FetchTodosAction) => {
    switch(action.type) {
        case ActionTypes.fetchTodos: 
            return action.payload;
        default:
            return state;
    }
}