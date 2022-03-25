# json.partial! 'api/questions/question', question: @question



json.extract! @question, 
  :id, 
  :title, 
  :body
json.asker @question.asker, :id, :username
json.createdAt @question.created_at
json.updatedAt @question.created_at

# answers: {
#   3: {id: 3, body: "answer here", answererId: 2, updatedAt: "2131412", createdAt: "12314"},
#   4: {id: 3, body: "answer here", answererId: 2, updatedAt: "2131412", createdAt: "12314"}
# }