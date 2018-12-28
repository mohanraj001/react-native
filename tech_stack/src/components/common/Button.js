import React from 'react';
import {Text,TouchableOpacity} from 'react-native';

const Button =({onPress,children})=>{
    const { buttonStyle,textStyle}= styles;
    return(
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
        <Text style={ textStyle }>
        {children}</Text>
    </TouchableOpacity>
    );
};
const styles ={
    buttonStyle:{
        flex:1,
        alignSelf:'stretch',
        backgroundColor:'#FFF',
        borderWidth:2,
        borderRadius:5,
        borderColor:'#007aff',
         marginLeft:5,
         marginRight:5,
        paddingBottom:25,
        paddingTop:5
    },textStyle:{
        alignSelf:'center',
        color:'#007aff',
        fontSize:16,
        fontWeight:'600',
       // paddingBottom:10,
        //paddingTop:10
    }
}

export { Button};