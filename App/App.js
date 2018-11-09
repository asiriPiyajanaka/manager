import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Container, Header, Button, Text, Body, Right, Icon, Title, Card } from 'native-base';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './src/components/LoginForm';
import HeaderRed from './src/components/common/HeaderRed';

class App extends Component {
  ComponentWillMount() {
    const config = {
      apiKey: 'AIzaSyBbPIuMEdwnACjRbpI7eTjN8Y8rwuFzI5o',
      authDomain: 'manager-69b2a.firebaseapp.com',
      databaseURL: 'https://manager-69b2a.firebaseio.com',
      projectId: 'manager-69b2a',
      storageBucket: 'manager-69b2a.appspot.com',
      messagingSenderId: '297939851260'
    };
    firebase.initializeApp(config);
  };

  render() {
    return (
      <Provider store={createStore(reducers)}>
          <LoginForm />
      </Provider>
    );
  }
}

export default App;