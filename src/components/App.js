import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import { mapState, mapDispatch } from '../Actions/ActionCreators'

class App extends Component {
  componentDidMount(){
    const { test, testWithParam } = this.props
    setTimeout(test, 2000)
    setTimeout(() => {
      testWithParam('React is awesome')
    }, 4000)
  }
  render(){
    const { testResult } = this.props
    return(
      <Fragment>
        <div>{testResult}</div>
      </Fragment>
    )
  }
}

export default connect(mapState, mapDispatch)(App)
