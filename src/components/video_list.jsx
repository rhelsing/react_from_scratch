import React from 'react'

const VideoList = (props) => { //props would just be available in class based as this.props
  return (
    <ul className="col-md-4 list-group">
      {props.videos.length}
    </ul>
  )
}

export default VideoList
