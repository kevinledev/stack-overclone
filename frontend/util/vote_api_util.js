export const upvoteQuestion = (questionId) => {
  return $.ajax({
    method: "POST",
    url: `/api/questions/${questionId}/upvote`
  })
}

export const downvoteQuestion = (questionId) => {
  return $.ajax({
    method: "POST",
    url: `/api/questions/${questionId}/downvote`
  })
}

export const unvoteQuestion = (questionId) => {
  return $.ajax({
    method: "POST",
    url: `/api/questions/${questionId}/unvote`
  })
}




export const upvoteAnswer = (answerId) => {
  return $.ajax({
    method: "POST",
    url: `/api/answers/${answerId}/upvote`
  })
}

export const downvoteAnswer = (answerId) => {
  return $.ajax({
    method: "POST",
    url: `/api/answers/${answerId}/downvote`
  })
}

export const unvoteAnswer = (answerId) => {
  return $.ajax({
    method: "POST",
    url: `/api/answers/${answerId}/unvote`
  })
}

