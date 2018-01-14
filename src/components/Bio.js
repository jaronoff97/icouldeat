import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Jacob Aronoff`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          Hello hello! I'm Jacob, and I love food! I'm going 
          to be writing here about everywhere I go!{' '}
          <a href="https://github.com/jaronoff97">
            This is my github if you're interested!
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
