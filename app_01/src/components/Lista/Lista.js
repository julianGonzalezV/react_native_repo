import React, {Component}  from 'react';
import { View, ScrollView} from 'react-native'
import PropTypes from 'prop-types';
import { ViewPropTypes } from 'react-native'
import Fila from './Fila' 

export default class Lista extends Component {
    static propTypes = {
        style: ViewPropTypes.style,
        itemList: PropTypes.array,
        onItemDeleted: PropTypes.func
      }


    render() {

    const itemListOut = this.props.itemList.map((item,index) => (
        <Fila 
            key = {index} 
            parametro1 = {item} 
            onItemPressed={()=> this.props.onItemDeleted(index)} />      
      ));

        return(
        <ScrollView style ={this.props.style}>
            {itemListOut}
        </ScrollView>
        );   
    }

}
