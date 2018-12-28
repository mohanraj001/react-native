import _ from 'lodash'; 
import React,{Component} from 'react';
import {connect} from 'react-redux';
import Communications from 'react-native-communications';
import EmployeeForm from './EmployeeForm';
import {employeeUpdate,employeeSave} from '../actions'; 
import {Card,CardSction,Button, Confirm} from './common';


class EmployeeEdit extends Component {
    state ={showModal : false}


    componentWillMount(){
        _.each(this.props.employee,(value,prop)=>{
            this.props.employeeUpdate({prop,value});
        });
    }

    onButtonPress(){

        const {name,phone,shift} = this.props;

        this.props.employeeSave({name,phone,shift,uid:this.props.employee.uid});
         
        this.props.navigation.navigate('Employee');

        console.log(name,phone,shift);
    }
    onTextPress(){
        const{phone,shift} = this.props;

        Communications.text(phone,`Your upcomeing shift os on ${shift}`);
    }

    onAccept(){

    }

    onDecline(){
        this.setState({showModal:false});
    }



    render() {
        return(
            <Card>
                <EmployeeForm/>

                <CardSction>

                    <Button onPress = {this.onButtonPress.bind(this)}>
                        Save Changes
                    </Button>

                </CardSction>

                <CardSction>

                    <Button onPress ={ this.onTextPress.bind(this)}>
                     Text Schedule
                    </Button>

                </CardSction>

                <CardSction>

                    <Button onPress ={ () => this.setState({showModal:! this.state.showModal})}>
                        Fire Employee
                    </Button>

                </CardSction>



                <Confirm 
                visible= {this.state.showModal}
                onAccept= {this.onAccept.bind(this)}
                onDecline={this.onDecline.bind(this)}>

                    Are you sure you want to delete this?

                </Confirm>

            </Card>

        )

    }
}

const mapStateToProps = (state) =>{

    const {name,phone,shift} = state.employeeForm;

    return {name,phone,shift};

};


export default connect (mapStateToProps,{employeeUpdate,employeeSave}) (EmployeeEdit); 