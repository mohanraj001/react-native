import React,{Component} from 'react';
import {Text,View} from 'react-native';
import {Provider} from 'react-redux';
import firebase from '@firebase/app';
import {createStore,applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm'
import Router from './Router';

class App extends Component{
    componentWillMount(){
       const config = {
            apiKey: 'AIzaSyBQeA1HTfBCTjy8droYCabiYC8IKQKl8IY',
            authDomain: 'manager-b70e2.firebaseapp.com',
            databaseURL: 'https://manager-b70e2.firebaseio.com',
            projectId: 'manager-b70e2',
            storageBucket: 'manager-b70e2.appspot.com',
            messagingSenderId: '970262514230'
          };
          firebase.initializeApp(config);
    }


    render()
    {
        const store = createStore(reducers,{},applyMiddleware(ReduxThunk));
        return(
            <Provider store={store}>
                <Router/>
            </Provider>
            
        );
    }
}

export default App;