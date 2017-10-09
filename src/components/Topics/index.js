import { connect } from 'react-redux'
import { getTopics } from './TopicsActions'
import Topics from './Topics'

const mapStateToProps = state => ({
  topics: state.topics
})

export default connect(mapStateToProps, { getTopics })(Topics)
