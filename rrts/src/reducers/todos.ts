import { Todo, ActionTypes, Action } from "../components/actions"

export const todosReducer = (state:Todo[]=[], action:Action) => {
    switch(action.type) {
        case ActionTypes.fetchTodos: 
            return action.payload;
        default:
            return state;
    }
}