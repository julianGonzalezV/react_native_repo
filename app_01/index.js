import React from 'react'
import { AppRegistry } from 'react-native'
/**
 * El provider se contectará al store
 */
import { Provider } from 'react-redux'
import App from './App'
import configureStore from './src/store/configureStore'

//Recuerde que configureStore es una funcion, pr eso la debe ejecutar guardandola en una variable
const store = configureStore();

/**
 * Sin el arrow function no funcionaría porque AppRegistry.registerComponent espera una funcion y no un retorno de
 * código  jsx, entonces lo que se hace es crear una funcion que retorne jsx
 * pruebe quitando el () => y compruebe :) 
 */
const ReduxReactNative = () =>  (
    <Provider store = {store}>
        <App />
    </Provider>
);
AppRegistry.registerComponent('myProyect', () => ReduxReactNative);

