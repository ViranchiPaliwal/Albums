// Index.android.js
// component is the structure

// Import a library to help create a component
// es6 used require call to use different file that's why import
import React from 'react'; //how component behave
//import ReactNative from 'react-native'; // how to place it on mobile
// destructing component
import { AppRegistry, View } from 'react-native'; // only this is required
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// Create a component
// a component is function return jsx which is rendered by react native
// we are writing jsx dilect which looks like html
// jsx is used to write react native component
// tell react native what to render
// babel.io change jsx back to raw javascript
// it's just a wrapper on JS to make thing easy for us
const App = () => (
    // to make it without text
    // componenet nesting
    < View>
    <Header headerText={'Albums'} />
    <AlbumList />
    </View>
);
// return not required u can omit if u want

// Render a component
// register at least on component
AppRegistry.registerComponent('albums', () => App);

