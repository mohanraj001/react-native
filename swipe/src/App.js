import React,{Component} from 'React';
import {View,Text}from 'react-native';
import Swipeout from 'react-native-swipeout';



class App extends Component{
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


export default App;