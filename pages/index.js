import React, { Component } from 'react'
import TheHead from '../components/TheHead'
import Video from '../components/Video'
import { getResults } from '../lib/db'

export default class index extends Component {
  constructor (props) {
    super(props)
    this.state = {
      videos: []
    }
  }

  componentDidMount () {
    getResults().then(data => {
      this.setState({ videos: data })
    })
  }
  render () {
    return (
      <div>
        <TheHead />
        <section className='section'>
          <div className='columns'>
            <div className='column is-4 is-offset-4'>
              <h1 className='title'>Drone Videos</h1>
              <h2 className='subtitle'>
                <a href='https://github.com/JollyGrin/youtube-playlist'>
                  github repo
                </a>
              </h2>
              {this.state.videos.map((vid, i) => (
                <Video key={i} data={vid} />
              ))}
            </div>
          </div>
        </section>
      </div>
    )
  }
}
