import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

const API_KEY = 'AIzaSyB3jhbripfHODc1Dj_JeCjHg8F7qfh_ATs'
// component to produce HTML
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    }

    this.videoSearch('ryan helsing')
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, videos => {
      this.setState({ videos: videos, selectedVideo: videos[0] }) //could use {videos } because same key
    })
  }

  render() {
    return (
      <div>
        <SearchBar onSearch={term => this.videoSearch(term)} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={v => this.setState({selectedVideo: v}) }
          videos={this.state.videos} />
      </div>
      )//passing callbacks like onVideoSelect doesnt usually go more than one level
  }
}
//render to DOM
ReactDOM.render(<App />, document.querySelector('.container'))
