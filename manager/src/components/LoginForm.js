import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {connect} from 'react-redux';
import {emailChanged,passwordChanged,loginUser} from '../actions';
import {Card,CardSection,Button,Input,Spinner} from './common';
class LoginFrom extends Component{

    static navigationOptions ={
        headerTitle:'plese login',
    };

    onEmailChange(text){
        this.props.emailChanged(text);

    }
    onPasswordChanged(text){
        this.props.passwordChanged(text);
    }
    onButtonPress(){
        const{email,password} =this.props;

        this.props.loginUser({email,password});
    }
    renderError(){
        if(this.props.error){
            return(
                <View style ={ { backgroundColor:'white'}}>
                 <Text style={styles.errorTextStyle}>
                 {this.props.error}
                 </Text>
                </View>
            )
        }
    }
    renderButton(){
        if(this.props.loading){
            return<Spinner  />
        }
        return( <Button onPress={this.onButtonPress.bind(this)}>
        Login
          </Button>)
           
    }

   rendernavigate(){
         if(this.props.user!== null
            &&this.props.user !== undefined 
            &&this.props.error === '')
         {
             this.rendersuccess();
         }
         else
         {
             this.renderfail();
         }

    }

    rendersuccess(){

        console.log("rendersuccess")
    
        return(
            
            this.props.navigation.navigate('Employee')
        );
    }
    renderfail(){
        console.log("render fail");
        return(
            this.renderError()
        )
    }

    render(){
        
        return(

            <Card>

                <CardSection>
                    <Input 
                    label="Email"
                    placeholder="Email@gmail.com"
                    onChangeText={this.onEmailChange.bind(this)}
                    value={this.props.email}

                    />

                </CardSection>
                     
                <CardSection>
                    <Input
                       secureTextEntry
                       label="password"
                       placeholder="password"
                       onChangeText={this.onPasswordChanged.bind(this)}
                       value = {this.props.password}
                       />

                </CardSection>

                    {this.renderError()}

                <CardSection>
                   {this.renderButton()}
                </CardSection>
                   {this.rendernavigate()}

            </Card>
        );
    }
} 

const styles ={
    errorTextStyle:{
        fontSize:20,
        alignSelf:'center',
        color:'red'
    }
}

const mapStateToProps = ({auth}) =>{
    const {email,password,error,loading, user} = auth;

    return{
        email,
        password,
        error,
        loading,
        user
    };
};

export default connect(mapStateToProps,{emailChanged,passwordChanged,loginUser}) (LoginFrom);

