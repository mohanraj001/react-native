import React from 'react';
import { StackActions,createStackNavigator, createAppContainer,createSwitchNavigator,NavigationActions} from 'react-navigation'; 
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';


const AppStack = createStackNavigator({

     login: LoginForm 
    });

const AppStack2 = createStackNavigator({
  Employee:EmployeeList,

  create:EmployeeCreate,

  edit:EmployeeEdit

});    /*

export const resetAction =createAppContainer( StackActions.reset({
  Employee:EmployeeList,
  index:0,
  actions:[NavigationActions.navigate({routeName:'Employee'})],
  
}));

 export const reaction =() =>{
  this.props. navigation.dispatch(resetAction);
  }*/     

  const Router= createAppContainer(createSwitchNavigator(
        {
          Authloading:AppStack,
          EmployeeForm:AppStack2
        },
        {
          initialRouteName: 'Authloading'
      },
        
        
      )  );


export default Router;
   








