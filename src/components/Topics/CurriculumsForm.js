import React from 'react'
import Api from '../../utils/Api'

class CurriculumsForm extends React.Component {
  constructor (props) {
    super(props)

    this.state = {}

    this.saveCurriculum = this.saveCurriculum.bind(this)
  }

  saveCurriculum (event) {
    event.preventDefault()

    const curriculum = document.getElementById('curriculum').value
    const manager = document.getElementById('manager').value

    Api('POST', '/curriculums', {
      data: { curriculum, manager }
    })
      .then(results => {
        const { curriculum } = results
        const msg = 'Successfully saved curriculum ' + curriculum.curriculum
        this.setState({
          msg,
          error: false
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
        <form onSubmit={this.saveCurriculum}>
          <input id='curriculum' placeholder='curriculum' type='text' />
          <input id='manager' placeholder='manager' type='text' />
          <input type='submit' value='save' />
        </form>
      </div>
    )
  }
}

export default CurriculumsForm
