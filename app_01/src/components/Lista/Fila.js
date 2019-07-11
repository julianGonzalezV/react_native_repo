//Esto se conoce como functional component 

import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
// no se limitey ponga todos los tipos d touchabl que quiera :) 
// importante notar que hacer un elmento touchable es como que estuvieramos creando un boton 
// boton finalmente es eso

const fila = (props) => (
    <TouchableOpacity onPress={props.onItemPressed}>
        <View style={styles.fila} >
            <Text>{props.parametro1.name}</Text>
        </View>
    </TouchableOpacity>
    

);

const styles = StyleSheet.create({
    fila:{
        width: "100%",
        padding: 10,
        backgroundColor: "#eee",
        margin:5
    }
});

export default fila;
