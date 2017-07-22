import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'

const API_KEY = 'AIzaSyB3jhbripfHODc1Dj_JeCjHg8F7qfh_ATs'
// component to produce HTML
class App extends Component {

  constructor(props) {
    super(props);

    this.state = { videos: [] }

    YTSearch({key: API_KEY, term: 'ryan helsing'}, videos => {
      this.setState({ videos: videos }) //could use {videos } because same key
    })
  }

  render() {
    return (
      <div>
      <SearchBar />
      <VideoList videos={this.state.videos} />
      </div>
      )
  }
}
//render to DOM
ReactDOM.render(<App />, document.querySelector('.container'))
