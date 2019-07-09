import React, {Component}  from 'react';
import { View, ScrollView} from 'react-native'
import PropTypes from 'prop-types';
import { ViewPropTypes, FlatList} from 'react-native'
import Fila from './Fila' 

export default class Lista extends Component {
    static propTypes = {
        style: ViewPropTypes.style,
        itemList: PropTypes.array,
        onItemSelected: PropTypes.func
      }


    render() {            
   
        //rederItem en FlatList hace referencia al componente que se va a pintar
        return(
        <FlatList 
            style ={this.props.style}
            data = {this.props.itemList}
            renderItem = {(info) => (
                <Fila 
                    //key = {index} ya no se necesita porque flatList lo maneja automáticamente
                    parametro1 = {info.item.value} 
                    onItemPressed={()=> this.props.onItemSelected(info.item.key)} /> 
            )} />
        );   
    }

}
