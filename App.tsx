import React, { useEffect, useState } from 'react';
import { MainNavigation } from './src/navigations';
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import { firebaseConfig } from './src/config/firebase';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Setting a timer']);


//
export default function App() {
  
  return (<MainNavigation/>);
}

