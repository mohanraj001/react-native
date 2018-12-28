import React ,{Component} from 'react';
import {Text,View,TouchableWithoutFeedback} from 'react-native';
import {CardSection} from './common';

class ListItem extends Component {

    onRowPress(){
        this.props.navigation.navigate('edit');
    }



    render(){
        const {name} = this.props.employee;
        console.log(this.props.employee)


    return(

       

        <TouchableWithoutFeedback onPress = {this.onRowPress.bind(this)}>
            <View>
            <CardSection>
              <Text style = {styles.titleStyle}>
                {name}
              </Text>
            </CardSection>

            </View>
        </TouchableWithoutFeedback>

       
    );
}
}


const styles = {
    titleStyle:{
        fontSize:18,
        paddingLeft:15
    }
};

export default ListItem;