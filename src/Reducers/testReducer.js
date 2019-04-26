import Types from '../Actions/Types'

const testReducer = (slice = 'React', action) => {
  switch (action.type) {
    case Types.TEST:
      return action.payload
      break;
    case Types.TEST_WITH_PARAM:
      return action.payload
      break;
    default:
      return slice
  }
}

export default testReducer
