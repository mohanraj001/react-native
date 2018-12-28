import React,{Component} from 'react';
import {Text}from 'react-native';
import firebase from '@firebase/app'; // install npm  --save firebase
import  '@firebase/auth';
import {Button,Card,CardSection,Input, Spinner} from './common';

class LoginForm extends Component{
    state = {
        Email:'',
        password:'',
        error:'',
        loading:false
    };
    onButtonPress(){

        const{Email,password}= this.state;

        this.setState({error:'',loading:true});

        firebase.auth().signInWithEmailAndPassword(Email,password)
        .then(this.onLoginSuccess.bind(this))
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(Email,password)
            .then(this.onLoginSuccess.bind(this))
            .catch(this.onLoginFail.bind(this));

            });

        }
    onLoginFail(){
        this.setState({error:'Authentication Failed!',loading:false});
    }
    onLoginSuccess(){
        this.setState({
            Email:'',
            password:'',
            loading:false,
            error:''
        });
    }
    renderButton(){
        if(this.state.loading){
            return <Spinner size = "small" />;
        }
        return(
            <Button onPress={this.onButtonPress.bind(this)}>   Log In    </Button>
        )
    }


    render(){
        return(
            <Card>
                <CardSection> 
                    <Input
                    placeholder="user@gmail.com"
                    label="Email"
                    value={this.state.Email}
                    onChangeText={Email=>this.setState({Email})}
                     />
                </ CardSection>

                <CardSection>
                    <Input
                    secureTextEntry
                    placeholder="password"
                    label="password"
                    value={this.state.password}
                    onChangeText={password=>this.setState({password})}
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text> 


                <CardSection>
                   {this.renderButton()}
                </CardSection>
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

export default LoginForm;