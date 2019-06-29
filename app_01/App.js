

import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

import Fila from './src/components/Lista/Fila' 
import Adicionador from './src/components/AddItems/Adicionador' 
import Lista from './src/components/Lista/Lista' 


export default class App extends Component {


  state ={
    placeName: '',
    places: []
   }

   placeNameChangeHandler = val =>{
    this.setState({
      placeName: val	
    });
    
   };

   buttonClicHandler = val =>{
    if(this.state.placeName.trim() === ""){
      return;
    }
  
    this.setState(prevState => {
      
      return{
        placeName: "",
        places: prevState.places.concat(prevState.placeName)
      }    
    });
    
   };
  


  render() {
    const itemList = this.state.places.map((place,index) => (
      <Fila
        key = {index}
        parametro1 = {place}
      />
        
     
    ));

    return (
      <View style={styles.container}>
        <Adicionador 
          containerStyle = {styles.inputButton}
          style = {styles.placeInput}
          onChangeText = {this.placeNameChangeHandler}
          value = {this.placeName}
          placeholder = "Ingrese los valores aquí"
          buttonStyle = {styles.placeButton}
          buttonOnPress = {this.buttonClicHandler}
          buttonTitle = "Agregar"
        />
        <Lista 
          style = {styles.filaContainer}
          itemList = {itemList}
        />        
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 56,
    backgroundColor: '#fff',
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
