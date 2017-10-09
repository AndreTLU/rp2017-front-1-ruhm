import React from 'react'
import Api from '../../utils/Api'

class TopicsForm extends React.Component {
  constructor (props) {
    super(props)

    this.state = {}

    this.saveTopic = this.saveTopic.bind(this)
  }

  saveTopic (event) {
    event.preventDefault()

    const name = document.querySelector('input#name').value

    Api('POST', '/topics', {
      data: { name }
    })
      .then(results => {
        const { topic } = results
        const msg = 'Successfully saved topic ' + topic.name
        this.setState({
          msg,
          error: false
        }, () => {
          // kui setState on teostatud
          this.props.getTopics()
        })
      })
      .catch(error => {
        console.error(error)
        this.setState({
          msg: false,
          error: error.data.errors[0].msg
        })
      })
  }

  render () {
    const { msg, error } = this.state
    console.log('RENDER FORM')
    return (
      <div>
        <p>{ msg || error }</p>
        <form onSubmit={this.saveTopic}>
          <input id='name' type='text' />
          <input type='submit' value='save' />
        </form>
      </div>
    )
  }
}

export default TopicsForm
