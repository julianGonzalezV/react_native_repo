
import { ADD_ITEM, DELETE_ITEM, DESELECT_ITEM, SELECT_ITEM } from './actionTypes'
/**
 * Una buena idea es crear archivos relacionados a X acciones para que se mantenible en el tiempo,
 * vealo com oque en el archivo actions.Types guardo todos los tipo se accione de mi aplicativo y la 
 * implementacion de estas acciones las divido en archivos según su contexto.
 */

 /**
  * Debe retornar un js object para que sea un action valido, además debe cumplir con que tenga
  * un tipo (type)
  * @param {*} itemName 
  */
export const addItem = (itemName) => {
    return{
        type: ADD_ITEM,
        itemNameOut: itemName
      };
};

export const deleteItem = () => {
    return{
        type: DELETE_ITEM
      };
};

export const selectItem = (key) => {
    return{
        type: SELECT_ITEM,
        keyOut: key
      };
};

export const deSelectItem = () => {
    return{
        type: DESELECT_ITEM
      };
};