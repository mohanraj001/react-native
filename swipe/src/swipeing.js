import React,{Component} from 'react';
import {Text,View} from 'react-native';
import Swipeout from 'react-native-swipeout';
 

class swipeing extends Component{
    render(){


        swipeoutBtns = [
            {
              text: 'Button'
             }
            ]
     
        return(
 
        <Swipeout right={swipeoutBtns}>
         <View>
             <Text>Swipe me left</Text>
         </View>
         </Swipeout>
        )
}
}


export default swipeing;