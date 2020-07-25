import { createStore, combineReducers } from 'redux';

import inputsReducer from './reducers/inputsReducer';

const reducers = combineReducers({
    inputs: inputsReducer,
})

function storeConfig (){
    return createStore(reducers);
}

export default storeConfig;