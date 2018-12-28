import React,{Component} from 'react';
import {Picker} from 'react-native';
import {View,Text} from 'react-native';
import {connect} from 'react-redux';
import {NavigationActions} from 'react-navigation';
import{employeeUpdate,employeeCreate} from '../actions/EmployeeAction';
import {Card,CardSection,Input,Button}from './common';
import EmployeeForm from './EmployeeForm';

const navigateAction = NavigationActions.navigate({

    headerTitle:'EmployeeList',

    action:NavigationActions.navigate({routeName:'Employee'})


    });


class EmployeeCreate extends Component{

   

    

    
    onButtonPress()
  {
   
      const{name,phone,shift} = this.props;


      this.props.employeeCreate({name,phone,shift:shift||'monday'});

      this.props.navigation.navigate('Employee');
      
      
  }
  

    render() {
        
        

        return(
            <Card>

                <EmployeeForm {...this.props} />
                

                <CardSection>
                    <Button  onPress={this.onButtonPress.bind(this)}>
                        Create
                    </Button>
                </CardSection>



            </Card>
        );
    }

}


const mapStateToProps=(state)=>{
    const{name,phone,shift} = state.employeeForm;

    return {name,phone,shift};
}

export default connect (mapStateToProps,{employeeUpdate,employeeCreate}) (EmployeeCreate);