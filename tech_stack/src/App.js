import React from 'react';
import {View,Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
import {Header} from './components/common';
import LibraryList from './components/LibraryList'

const App = ()=>{
    return(
    <Provider store={createStore(reducers)}>
    <View style={{flex:1}}>
        <Header headerText="Tech_stack"/>
        <LibraryList />
    </View>
    </Provider>
    );
};

export default App;