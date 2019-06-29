import React, {Component}  from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native'
import PropTypes from 'prop-types';
import { ViewPropTypes } from 'react-native'


export default class AddInput extends Component {
    static propTypes = {
        containerStyle: ViewPropTypes.style,
        style: ViewPropTypes.style,
        onChangeText: PropTypes.func,
        value: PropTypes.string,
        placeholder: PropTypes.string,
        buttonStyle: ViewPropTypes.style,
        buttonOnPress :  PropTypes.func,
        buttonTitle: PropTypes.string
      }


      render() {
          return(
            <View style={this.props.containerStyle}>
                <TextInput 
                placeholder= {this.props.placeholder}
                value={this.props.value} 
                onChangeText={this.props.onChangeText}
                style={this.props.style}/>
                <Button
                    title={this.props.buttonTitle}
                    style={this.props.buttonStyle}
                    onPress={this.props.buttonOnPress}
                />
            </View>
          );   
    }
}
