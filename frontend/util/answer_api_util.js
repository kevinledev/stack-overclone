
// export const fetchUserAnswers = (questionId) => {
//   return $.ajax({
//     method: "GET",
//     url: `/api/answers/`,
//     data: { answer },
//   });
// };

export const postAnswer = (answer) => {
  return $.ajax({
    method: "POST",
    url: `/api/answers/`,
    data: { answer },
  });
};

export const updateAnswer = (answer) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/answers/${answer.id}`,
    data: { answer },
  });
};

export const deleteAnswer = (answerId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/answers/${answerId}`,
  });
};

export const fetchQuestionAnswers = (questionId) => {
  return $.ajax({
    method: "GET",
    url: `/api/questions/${questionId}/answers`
  });
};

export const fetchAnswers = () => {
  return $.ajax({
    method: "GET",
    url: `/api/answers`
  });
};

