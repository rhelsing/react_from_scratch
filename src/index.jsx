import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyB3jhbripfHODc1Dj_JeCjHg8F7qfh_ATs'
// component to produce HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
}
//render to DOM
ReactDOM.render(<App />, document.querySelector('.container'))
