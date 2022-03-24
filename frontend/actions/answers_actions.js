import * as AnswerApiUtil from "../util/answer_api_util";
export const RECEIVE_ANSWERS = "RECEIVE_ANSWERS"
export const RECEIVE_ANSWER = "RECEIVE_ANSWER"
export const REMOVE_ANSWER = "REMOVE_ANSWER"

const receiveAnswers = (answers) => {
  return {
    type: RECEIVE_ANSWERS,
    answers
  };
};

const receiveAnswer = (answer) => {
  return {
    type: RECEIVE_ANSWER,
    answer
  };
};

const removeAnswer = (answerId) => {
  return {
    type: REMOVE_ANSWER,
    answerId
  };
};

export const fetchQuestionAnswers = (questionId) => (dispatch) => {
  return AnswerApiUtil.fetchQuestionAnswers(questionId).then((answers) =>
    dispatch(receiveAnswers(answers))
  );
};

export const postAnswer = (answer) => (dispatch) => {
  return AnswerApiUtil.postAnswer(answer).then((answer) =>
    dispatch(receiveAnswer(answer))
  );
};

export const updateAnswer = (answer) => (dispatch) => {
  return AnswerApiUtil.updateAnswer(answer).then((answer) =>
    dispatch(receiveAnswer(answer))
  );
};

export const deleteAnswer = (answerId) => (dispatch) => {
  return AnswerApiUtil.deleteAnswer(answerId).then(() =>
    dispatch(removeAnswer(answerId))
  );
};