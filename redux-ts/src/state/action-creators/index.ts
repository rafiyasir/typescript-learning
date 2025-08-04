
import { ActionType } from '../action-types'

const searchRepositories = (term:string) =>{
    return async (dispatch:any) => {
        dispatch({type: ActionType.SEARCH_REPOSITORIES})
        
    try {
        
    } catch (error) {
        if(error instanceof Error)
        dispatch({
            type:ActionType.SEARCH_REPOSITORIES_ERROR,
            payload:error.message
        })
    }
    }
}