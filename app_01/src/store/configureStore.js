/**
 * Al inicio no se necesita combineReducers porque por ejemplo empezamos con un solo reducer 
 * pero no sobra tenerlo porque de seguro lo vamos a necesitar conforme existan más reducer
 * 
 * combineReducers lo que hace es meter en un solo reducer padre  todos los reducer de nuestra app
 * o que que necesitemos combinar
 */
import { createStore, combineReducers } from 'redux'

import itemsReducer from './reducers/listItems';

/**
 * RootReducer es un reducer general que irá en el root
 */
const rootReducer = combineReducers({
    itemsRd: itemsReducer
});

const configureStore = () => {
    /** 
     *  Create store recibe un solo reducer por eso le pasamos el combine sino nos tocaría crear 
    varios stores y no es buena práctica 
     * */
    return createStore(rootReducer);
}

export default store = configureStore();