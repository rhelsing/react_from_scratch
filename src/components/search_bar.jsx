import React, { Component } from 'react'

class SearchBar extends Component {

  constructor(props) {
    super(props)
    this.state = { term: '' }
  }

  render() {
    return (
      <div className="search-bar">
        <input placeholder="search" value={this.state.term} onChange={ e => this.onInputChange(e.target.value) } />
      </div>
    )
  }

  onInputChange(term) {
     this.setState({term: term})
     this.props.onSearch(term)
  }

}

export default SearchBar
