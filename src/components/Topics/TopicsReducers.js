import * as types from '../../constants/ActionTypes'

const INITIAL_STATE = {
  data: []
}
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.TOPICS_LOADED: {
      const { topics } = action
      return {
        ...state,
        data: topics
      }
    }
    default:
      return {
        ...state
      }
  }
}
