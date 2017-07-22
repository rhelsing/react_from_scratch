import React from 'react'
import VideoListItem from './video_list_item'

const VideoList = (props) => { //props would just be available in class based as this.props
  const videoItems = props.videos.map( (v) => {
    return <VideoListItem key={v.etag} video={v} />
  })

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  )
}

export default VideoList
