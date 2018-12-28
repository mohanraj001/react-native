import React,{Component} from 'react';
import {Text,View,TouchableWithoutFeedback,LayoutAnimation,ScrollView} from'react-native';
import {connect} from 'react-redux';
import {CardSection} from './common';
import * as actions from '../actions';
//import { selectLibrary } from '../actions'


class ListItem extends Component {

    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    renderDescription() {
       const {library,expanded} = this.props;
     //  const {DescriptionbStyle}=styles;

        if(expanded) {
            return ( 
                <CardSection style={{height:75}}>
                    <Text  style={{flex:1}}>
                       {library.description}
                    </Text>
                 </CardSection>
            );
        }
    }

    render() {
        const {titleStyle} = styles;
        const { id,title} = this.props.library;

        return(
            <TouchableWithoutFeedback 
                onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {  this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        
        );
    } 
}

const styles={
    titleStyle:{
        fontSize:18,
        paddingLeft:15,
    }


   /* DescriptionbStyle:{
        flex:1,
        paddingLeft:10,
        paddingRight:10,
    }*/

}

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id;
    return {expanded};
};

export default connect(mapStateToProps, actions) (ListItem);