/**
 * En un objeto js guardo mi estado inicial que es aquel que existirá antes de que cualquier accion sea
 * despachada
 */
const initialState = {
    itemName: '',
    listItems: [],
    selectedItem: null
}

/**
 * Reducer no es más que un arrow function que recibe 2 parámetros 
 * el primeto es el estado actual y el segundo es el action que se genera para cambiar dicho estado
 * el reducer con estos 2  parámetros ya decide como aplicarlo para ambiar el estado y retornar el siguiente estado
 * 
 * IMPORTANTE: son funciones puras que no debe generar side effect
 * 
 * state = initialState: esta igualacion es recomendada dado que si no tenemos un estado entonces el 
 * por defecto será el initial state de arriba
 */
const reducer = (state = initialState, action) => {
    switch(action.type){
        default:
            return state;
        
    }
};

export default reducer;