import React from 'react';
import {Modal, View, Image, Text, Button} from 'react-native'

export default class DetalleFila extends Component {
    static propTypes = {
        style: ViewPropTypes.style,
        itemList: PropTypes.array,
        onItemDeleted: PropTypes.func
      }


    render() {            
   
        //rederItem en FlatList hace referencia al componente que se va a pintar
        return(
            <Modal>
                <View>
                    <Image source = {this.props.imgUri} />
                    <Text>{this.props.description}</Text>
                    <View>
                        <Button />
                        <Button />
                    </View>
                </View>                
            </Modal>
        );   
    }

}