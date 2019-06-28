//Esto se conoce como functional component 

import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

const fila = (props) => (
    <View style={styles.fila}>
        <Text>{props.parametro1}</Text>
    </View>

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
