import { FetchTodosAction, Todo } from "../components/actions"
import { ActionTypes } from "../components/actions/types"

export const todosReducer = (state:Todo[]=[], action:FetchTodosAction) => {
    switch(action.type) {
        case ActionTypes.fetchTodos: 
            return action.payload;
        default:
            return state;
    }
}