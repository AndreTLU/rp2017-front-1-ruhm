import React from 'react'
import { Link } from 'react-router-dom'
import Api from '../../utils/Api'
import List from './List'

import Form from './Form'

class Topics extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      topics: []
    }

    this.getTopics = this.getTopics.bind(this)
  }

  componentDidMount () {
    console.log('load topics')
    this.getTopics()
  }

  getTopics () {
    Api('GET', '/topics', {})
    .then(results => {
      const { topics } = results
      console.log(topics)

      this.setState({ topics })
    })
    .catch(error => {
      console.error(error)
    })
  }

  render () {
    console.log('RENDER TOPICS')
    const { topics } = this.state

    return (
      <div id='topics'>
        <h1>Topics</h1>
        <Link to='/'>Home</Link>
        <br />
        <br />
        <Form getTopics={this.getTopics} />
        <br />
        <br />
        <List topics={topics} />
      </div>
    )
  }
}

export default Topics
