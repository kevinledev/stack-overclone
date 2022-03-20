import * as QuestionApiUtil from "../util/question_api_util";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const RECEIVE_QUESTION = "RECEIVE_QUESTION";
export const REMOVE_QUESTION = "REMOVE_QUESTION";

const receiveQuestion = (question) => {
  return {
    type: RECEIVE_QUESTION,
    question,
  };
};

const receiveQuestions = (questions) => {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
};

const removeQuestion = (questionId) => {
  return {
    type: REMOVE_QUESTION,
    questionId,
  };
};

export const fetchQuestions = () => {
  return QuestionApiUtil.fetchQuestions()
    .then(questions => dispatch(receiveQuestions(questions)))
}

export const fetchQuestion = (questionId) => {
  return QuestionApiUtil.fetchQuestion(questionId)
    .then(question => dispatch(receiveQuestions(question)))
}

export const postQuestion = (question) => {
  return QuestionApiUtil.postQuestion(question)
    .then(question => dispatchEvent(receiveQuestion(question)))
}

export const updateQuestion = (question) => {
  return QuestionApiUtil.updateQuestion(question)
    .then(question => dispatch(receiveQuestion(question)))
}

export const deleteQuestion = (questionId) => {
  return QuestionApiUtil.deleteQuestion(questionId)
    .then(() => dispatch(removeQuestion(questionId)))
}