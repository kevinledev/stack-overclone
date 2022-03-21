import React from 'react';

export default class UsersIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return null;
  }
}