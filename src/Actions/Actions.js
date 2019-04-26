import Types from './Types'

const actions = {
  test: { type: Types.TEST, payload:'React is NOW running' },
  testWithParam: param => ({ type: Types.TEST_WITH_PARAM, payload: param })
}

export default actions
