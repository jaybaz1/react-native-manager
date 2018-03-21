import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component{

  componentWillMount(){
    const config = {
      apiKey: "AIzaSyA7yXWmKo8LwR1IqtzeJtbYEkh4_E0nmHQ",
      authDomain: "manager-dc851.firebaseapp.com",
      databaseURL: "https://manager-dc851.firebaseio.com",
      projectId: "manager-dc851",
      storageBucket: "manager-dc851.appspot.com",
      messagingSenderId: "155501027417"
    };
    
    firebase.initializeApp(config);
  }

  render() {
    return(
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    ); 
  }
}

export default App;