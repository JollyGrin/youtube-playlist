import React, { Component, Fragment } from 'react'

export default class Video extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const vid = this.props.data.snippet
    console.log(vid)

    const thumbnailURL = vid.thumbnails.high.url
    const { title, description } = vid
    const vidID = vid.resourceId.videoId
    const vidURL = `https://youtu.be/${vidID}`

    return (
      <Fragment>
        <div className='card'>
          <div className='card-image'>
            <figure className='image is-4by3'>
              <a href={vidURL}>
                <img src={thumbnailURL} alt='Placeholder image' />
              </a>
            </figure>
          </div>
          <div className='card-content'>
            <div className='media'>
              <div className='media-content'>
                <p className='title is-4'>{title}</p>
              </div>
            </div>
            <div className='content'>{description}</div>
          </div>
        </div>
        <style jsx>{`
          .card {
            margin-bottom: 2rem !important;
          }
        `}</style>
      </Fragment>
    )
  }
}
