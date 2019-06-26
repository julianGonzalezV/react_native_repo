import React from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function App() {
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
      places: prevState.places.concat(prevState.placeName)
    }    
  });
	
 };

 render(){
  const placesOut = this.state.places.map((place,index) => (
    <Text key = {index}>
      {place}
    </Text>
  ));
  return (
    <View style={styles.container}>
      <View style={styles.inputButton}>
        <TextInput 
          style={{width: 300}}
          value={this.state.placeName} 
          onChangeText={this.placeNameChangeHandler}
          style={styles.placeInput}/>
        <Button
            title="Add"
            style={styles.placeButton}
            onPress={this.buttonClicHandler}/>
      </View>
      <View>
        placesOut
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  inputButton: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems:"center"
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  }
});
