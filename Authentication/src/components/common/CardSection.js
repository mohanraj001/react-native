import React from 'react';
import {View} from 'react-native';

const CardSection = (props) =>{
    return(
        <View style={Styles.containerStyle}>
        {props.children}
        </View>
    );
};

const Styles= {
    containerStyle:{
        borderBottomWidth:1,
        height: 50,
        padding:5,
        backgroundColor:'#fff',
        justfiyContent:'flex-start',
        flexDirection:'column',
        borderColor:'#ddd',
        position:'relative'
    }
};

export { CardSection};