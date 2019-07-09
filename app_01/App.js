

import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

import Adicionador from './src/components/AddItems/Adicionador' 
import Lista from './src/components/Lista/Lista' 
import DetalleFila from './src/components/Lista/DetalleFila'
export default class App extends Component {


  state ={
    itemName: '',
    listItems: [],
    selectedItem: null
   }

   itemNameChangeHandler = val =>{
    this.setState({
      itemName: val	
    });
    
   };


   itemSelectedHandler = key =>{
    this.setState( prevState => {
      return {
        selectedItem: prevState.listItems.find(x => {return x.key === key})
      }

    });

     /*
    this.setState( prevState => {
      return{
        // Se filtran lo items tales que el id sea diferente al que entra
        places: prevState.places.filter((record)=> {
          return record.key !== key //un boolean
        })	
      }      
    });*/
    
   };

   buttonClicHandler = val =>{
    if(this.state.itemName.trim() === ""){
      return;
    }
  
    this.setState(prevState => {
      
      return{
        listItems: prevState.listItems.concat({key:Math.random(), value:this.state.itemName})
      }    
    });
    
   };
  


  render() {
    return (      
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
          value = {this.state.itemName}
          placeholder = "Ingrese los valores aquí"
          buttonStyle = {styles.placeButton}
          buttonOnPress = {this.buttonClicHandler}
          buttonTitle = "Agregar"
        />   
        <DetalleFila selectedItem={this.state.selectedItem} />    
        <Lista 
          style = {styles.filaContainer}
          itemList = {this.state.listItems}
          onItemSelected = {this.itemSelectedHandler}
        />        
    </View>
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



