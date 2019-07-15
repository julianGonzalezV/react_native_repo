

import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import { Provider, connect } from 'react-redux'
import { addItem, deleteItem, selectItem, deSelectItem } from './src/store/actions/index'
import store from './src/store/configureStore'

import Adicionador from './src/components/AddItems/Adicionador' 
import Lista from './src/components/Lista/Lista' 
import DetalleFila from './src/components/Lista/DetalleFila'

class App extends Component{
  itemNameChangeHandler = val =>{
    this.setState({
      itemName: val	
    });    
  };

    itemSelectedHandler = key =>{
      this.props.onSelectItem(key);
    };

    buttonAddClicHandler = value =>{
      this.props.onAddItem(value);
    };
    
    itemDeletedHandler = () => {    
      this.props.onDeleteItem();
    }

    modalClosedHandler = () =>  {
      this.props.onDeselectItem();
    }

  render() {
    return (  
      <Provider store = {store}>  
        <View style={styles.container}>  
        {/* comparado con el anterior no parece ahorrar muchas linea e codigo peeero considere:
            1) Y que tal donde el html del componente sea bien grande, acá porque tenía mucahs pŕopietdades
            2) y que tal donde desee un componente bien diámico ocmo Adicionador?, por ejemplo un grid par todo el aplicativo
            pero que de acuerdo a la seccion cambien color, el nombre del botón etc 

          finalmente, Esto fué una prueba peeero  si lo anterior no le compete a su proyecto entonces lleve todos los styles y configuracines 
          al componente, ejemplo en Adicionador y ya no tendrá que mandar tantas propiedades.

        */}  
                  
          <Adicionador 
            containerStyle = {styles.inputButton}
            style = {styles.placeInput}
            onChangeText = {this.itemNameChangeHandler}
            value = {this.props.itemName}
            placeholder = "Ingrese los valores aquí"
            buttonStyle = {styles.placeButton}
            buttonOnPress = {this.buttonAddClicHandler}
            buttonTitle = "mas"
          />   
          <DetalleFila 
            selectedItem={this.props.selectedItem}
            onItemDeleted = {this.itemDeletedHandler}
            onModalClosed = {this.modalClosedHandler} />               
          <Lista 
            style = {styles.filaContainer}
            itemList = {this.props.listItems}
            onItemSelected = {this.itemSelectedHandler}
          />        
      </View>
    </Provider> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 56,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  inputButton: {
   // flex: 1,
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems:"center"
  },
  placeInput: {
    width: "70%",
    borderWidth:0,
    borderRadius: 7
  },
  placeButton: {
    width: "30%"
  },
  filaContainer:{
    width:"100%"
  }
});  

/**
   * Los key acá son los mismos que tiene el state del App component (ver anterior App03WithoutRedux) 
   * pero los values van a ser los del configureStore
   */
const mapStateToProps = state => {  
  return {
    listItems: state.itemsRd.listItems,
    selectedItem: state.itemsRd.selectedItem,
    itemName: state.itemsRd.itemName,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddItem: (name) => dispatch(addItem(name)),
    onDeleteItem: () => dispatch(deleteItem()),
    onSelectItem: (key) => dispatch(selectItem(key)),
    onDeselectItem: (key) => dispatch(deSelectItem())
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(App);

