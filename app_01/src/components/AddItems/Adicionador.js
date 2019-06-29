import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

export default class AddInput extends Component {
    static propTypes = {
        containerStyle: PropTypes.style,
        style: PropTypes.style,
        onChangeText: PropTypes.func,
        value: PropTypes.string,
        placeholder: PropTypes.string,
        buttonStyle: PropTypes.style,
        buttonOnPress :  PropTypes.func,
        buttonTitle: PropTypes.string
      }


      render() {
          return(
            <View style={styles.inputButton}>
                <TextInput 
                placeholder= {this.props.placeholder}
                value={this.props.value} 
                onChangeText={this.placeNameChangeHandler}
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


