
import firebase from '@firebase/app';
import '@firebase/auth';




import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEES_FETCH_SUCCESS,
    EMPLOYEE_SAVE_SUCCESS
} from './types';
import { bindActionCreators } from 'redux';

export const employeeUpdate = ({prop,value}) =>{
    return{
        type:EMPLOYEE_UPDATE,
        payload:{prop,value}
    };
};



export const employeeCreate =({name,phone,shift}) =>{
   const{currentUser} = firebase.auth();
   console.log(name,phone,shift);
     return(dispatch)=>{
     
    //firebase.database().ref(`/users/${currentUser.uid}/employees`)
      // .push({name,phone,shift})
      //.then(()=>{ 
       //dispatch({type:EMPLOYEE_CREATE});
      // navigtion.reset([NavigationAction.navigate({routeName:'employee'})])   
  // });
};
};

 export const employeesFetch = () =>{
     const {currentUser} = firebase.auth();

     return(dispatch) =>{
       //  firebase.database().ref(`/users/${currentUser.uid}/employees`)
       //  .on('value',snapshot =>{
            // dispatch({type:EMPLOYEES_FETCH_SUCCESS,payload:snapshot.val()});
        //});
   };
 };

 export const employeeSave = ({name,phone,shift,uid})=>{
     const {currentUser} = firebase.auth();

     return(dispatch)=>{
         firebase.database().ref(`/user/${currentUser.uid}/employees/${uid}`)
         .set({name,phone,shift})
         .then(()=>{
             dispatch({type:EMPLOYEE_SAVE_SUCCESS});
             //CALLEMPLOYEELIST
         });
     };
 };


 export const employeeDelete = ({uid}) => {

    const {currentUser} = firebase.auth();

    return (dispatch) =>{
        firebase.database().ref(`/userd/${currentUser.uid}/employees/$uid`)
        .remove()
        .then(()=>{
            bindActionCreators.employeeList({})
        })
    }

 }