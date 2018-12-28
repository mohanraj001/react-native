import React from 'react';
import {Text,View} from 'react-native';

const Header = (props) =>{
    const {textStyle,viewStyle}= styles;
    return(
        <View style={viewStyle}>
    <Text style={textStyle}>{props.headerText}</Text>
    </View>
    );
};

const styles = {
    viewStyle:{
        backgroundColor:'white',
        justfiyContent:'center',
        alignItems:'center',
        height:40,
        paddingTop:10,
        shadowColor:'#000',
        shadowOffect:{width:200,height:200},
        shadowOpacity:0.2,
        eleavation:2,
        position:'relative'
    },
    textStyle:{
        fontSize:25
    }
};

export { Header};

