import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

export default class Lista extends Component {
    static propTypes = {
        style: PropTypes.style,
        itemList: PropTypes.array
      }


    render() {
        return(
        <View style = {this.props.style}>
            {this.props.itemList}
        </View>
        );   
    }

}
