# json.partial! 'api/questions/question', question: @question

json.question do
  json.set! @question.id do
    json.askerId @question.asker_id
    json.id @question.id
    json.title @question.title
    json.body @question.body
    json.createdAt @question.created_at
    json.updatedAt @question.created_at
    json.answerIds @question.answer_ids
  end
end

json.asker do
  json.set! @question.asker.id do
    json.id @question.asker.id
    json.username @question.asker.username
  end
end

# json.extract! @question, 
#   :id, 
#   :title, 
#   :body,
  
# json.asker @question.asker, :id, :username
# json.createdAt @question.created_at
# json.updatedAt @question.created_at

# answers: {
#   3: {id: 3, body: "answer here", answererId: 2, updatedAt: "2131412", createdAt: "12314"},
#   4: {id: 3, body: "answer here", answererId: 2, updatedAt: "2131412", createdAt: "12314"}
# }