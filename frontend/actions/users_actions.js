import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER = "RECEIVE_USER";

const receiveUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    users: users
  };
};

const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user: user
  }
}

export const fetchUsers = () => (dispatch) => {
  return UserApiUtil.fetchUsers().then(users => dispatch(receiveUsers(users)))
}

export const fetchUser = (userId) => (dispatch) => {
  return UserApiUtil.fetchUser(userId).then(user => dispatch(receiveUser(user)))
}