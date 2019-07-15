

import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';

import Adicionador from './src/components/AddItems/Adicionador' 
import Lista from './src/components/Lista/Lista' 
import DetalleFila from './src/components/Lista/DetalleFila'
export default class App extends Component{


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
     console.log('key ',key);
    this.setState( prevState => {
      return {
        selectedItem: prevState.listItems.find(x => {return x.key === key})
      }

    });  
    
   };

   buttonAddClicHandler = value =>{
    //console.log('value ',value);
    if(this.state.itemName.trim() === ""){
      return;
    }
  
    this.setState(prevState => {
      
      return{
        listItems: prevState.listItems.concat({
          // SI NO COLOCO EL TOSTRING SALIA ERROR virtualizedCell.cellKey RELACIONADO CON EL LATLIST
          key:Math.random().toString(), 
          name: this.state.itemName,
          image:{
            uri: "data:image/png;base64,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"
          }
        })
      }    
    });
    
   };
  
   itemDeletedHandler = () => {    
      this.setState( prevState => {
        return{
          // Se filtran lo items tales que el id sea diferente al que entra
          listItems: prevState.listItems.filter((record)=> {
            return record.key !== prevState.selectedItem.key  //un boolean
          }),
          selectedItem:null
        }      
    });
   }

   modalClosedHandler = () =>  {

    this.setState({
      selectedItem: null
    });
   }

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
          buttonOnPress = {this.buttonAddClicHandler}
          buttonTitle = "mas"
        />   
        <DetalleFila 
          selectedItem={this.state.selectedItem}
          onItemDeleted = {this.itemDeletedHandler}
          onModalClosed = {this.modalClosedHandler} />               
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



