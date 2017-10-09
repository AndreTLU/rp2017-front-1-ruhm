import * as types from '../../constants/ActionTypes'
import Api from '../../utils/Api'

export const getTopics = () => dispatch => {
  return Api('GET', '/topics', {})
  .then(results => {
    const { topics } = results
    dispatch({ type: types.TOPICS_LOADED, topics })
  })
  .catch(error => {
    console.error(error)
  })
}
