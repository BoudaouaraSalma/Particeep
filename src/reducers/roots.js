import {reducerSearch} from './reducerSearch'
import {reducerFilm} from './reducer'
import { combineReducers} from 'redux'
export const rootReducer = combineReducers({reducerSearch,reducerFilm})
