import React from 'react';
import { MainNavigation } from './src/navigations';
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import { firebaseConfig } from './src/config/firebase';

firebase.initializeApp(firebaseConfig);


export default function App() {
  return (<MainNavigation/>);
}

