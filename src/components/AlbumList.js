import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {

state = { albums: [] };

componentWillMount() {
  axios.get('https://rallycoding.herokuapp.com/api/music_albums/')
  .then(response => this.setState({ albums: response.data }));
}


renderAlbums() {
  return this.state.albums.map(album =>
    <AlbumDetail key={album.title} album={album} />
  );
}

  render() {
    console.warn(this.state);
    console.log(this.state);

    return (
      <ScrollView>
        { this.renderAlbums() }
      </ScrollView>
    );
  }
}

export default AlbumList;

/*

const URL = 'https://ws.audioscrobbler.com/2.0/?method=tag.gettopartists&tag=disco&api_key=505b58d85331dcccb94f7d19e4fcf755&format=json'

function getArtists(){

	return fetch(URL)
	.then(response => response.json())
	.then(data => data.topartists.artist)
	.then(artists => artists.map(artist => ({
		name: artist.name,
		image: artist.image[3]['#text'],
		likes: 200,
		comments: 140

	})))
}


export { getArtists }

*/
