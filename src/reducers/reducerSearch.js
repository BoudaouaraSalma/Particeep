import{SEARCH_CARD} from '../actions/ActionType'

export const reducerSearch=(state="",action)=>{
    switch(action.type){

        case SEARCH_CARD:

            return(action.payload);


        default:

            return state;
    }
}
