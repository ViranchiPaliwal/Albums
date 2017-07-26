import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';
//const AlbumList = () => {
// es6 class, class base component
//render method required which return jsx
// debugger
class AlbumList extends Component {
    // class level property
    // inital state of our component

    // state: a plain js object used to record and respond
    // to user triggered events
    // use setState to update state
    // only used with class based component

    //props for parent to child
    //state internal state maintainance

    state = { albums: [] };
    
    // lifecycle function
    componentWillMount(){
        //console.log('componentWillmount is here');
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({ albums: response.data }));
        // setstate is Component class implemented function
}

renderAlbums() {
      //return this.state.albums.map(album => <Text key={album.title}>{album.title}</Text>);
    return this.state.albums.map(album => <AlbumDetail key={album.title} album={album} />);
}
    
render() {
        console.log(this.state); 
    return (
        <View>
            {this.renderAlbums()}
        </View>
    );
  }
}
export default AlbumList;
// component state before data fetching
// after data fetching
// component level state
