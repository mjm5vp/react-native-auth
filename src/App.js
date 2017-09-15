import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAXiqoNgNN-la4zYgMp108gyd2N3gFAqxo',
      authDomain: 'auth-fd4dc.firebaseapp.com',
      databaseURL: 'https://auth-fd4dc.firebaseio.com',
      projectId: 'auth-fd4dc',
      storageBucket: 'auth-fd4dc.appspot.com',
      messagingSenderId: '412872407208'
    });
  }

  render() {
    return (
      <View>
        <Header headerText={'Authentication'} />
        <LoginForm />
      </View>
    );
  }
}

export default App;
