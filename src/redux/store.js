import {createStore,combineReducers} from 'redux'
import  counterReducer from './counter_reducer'

const allReducers = combineReducers({
    count: counterReducer
})
const store = createStore(allReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


export default store