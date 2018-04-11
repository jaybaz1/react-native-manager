import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return(
      <Provider store={store}>
        <LoginForm />
      </Provider>
    ); 
  }
}

export default App;