import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../src/actions'


class UserList extends Component {
  render() {

  }
}

function mapStateToProps(state) {
  return {state: state}
}

export default connect(mapStateToProps,)(UserList)
