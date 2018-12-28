import React from 'react';
import {Text,View,Modal} from 'react-native';
import {CardSection} from './CardSection';
import {Button} from './Button';

const Confirm = ({children,visible,onAccept,onDecline}) =>{

    const {containerStyle,textStyle,cardsectionStyles} = styles;

    return(
        <Modal
        visible={visible}
        transparent
        animationType="slide"
        onRequestClose={()=>{}}
        >
            <View style={containerStyle}>
                <CardSection style={cardsectionStyles}>
                    <Text style= {textStyle}>{children}</Text>
                </CardSection>

                <CardSection>
                    <Button onPress = {onAccept}> Yes </Button>
                    <Button onPress={onDecline}>No</Button>
                </CardSection>
            </View>
        </Modal>
    )



};

const styles={
    cardsectionStyles:{
        justfiyContent:'center'
    },

    textStyle:{
        flex:1,
        fontSize:18,
        textAlign:'center',
        lineHeight:40
    },
    containerStyle:{
        backgroundColor:'rgpa(0,0,0,0.75)',
        position:'relative',
        flex:1,
        justfiyContent:'center'
    }
};

export {Confirm};