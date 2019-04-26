import actions from '../Actions/Actions'

export const mapState = (state) => ({
  ...state
})

export const mapDispatch = (dispatch) => ({
  test: () => { dispatch(actions.test) },
  testWithParam: (param) => { dispatch(actions.testWithParam(param)) }
})
