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

