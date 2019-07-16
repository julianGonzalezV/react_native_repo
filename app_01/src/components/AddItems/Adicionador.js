import React, {Component}  from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native'
import PropTypes from 'prop-types';
import { ViewPropTypes } from 'react-native'


export default class AddInput extends Component {
    state = {
       itemName: ""
      };

    static propTypes = {
        containerStyle: ViewPropTypes.style,
        style: ViewPropTypes.style,        
        placeholder: PropTypes.string,
        buttonStyle: ViewPropTypes.style,
        onItemAdded: PropTypes.func,
        buttonTitle: PropTypes.string
        //itemName: PropTypes.string creo que no va a funcionar por lo de inmutabilidad
      }



   


      itemNameChangedHandler = val => {
        this.setState({
          itemName: val
        });
      };
    
      itemSubmitHandler = () => {
        if (this.state.itemName.trim() === "") {
          return;
        }
    
        this.props.onItemAdded(this.state.itemName);
      };


      render() {
          return(
            <View style={this.props.containerStyle}>
                <TextInput 
                placeholder= {this.props.placeholder}
                value={this.state.itemName}
                onChangeText={this.itemNameChangedHandler}
                style={this.props.style}/>
                <Button
                    title={this.props.buttonTitle}
                    style={this.props.buttonStyle}
                    onPress={this.itemSubmitHandler}
                />
            </View>
          );   
    }
}
