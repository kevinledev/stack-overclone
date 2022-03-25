# @answers.each do |answer|
#   json.set! answer.id do
#     json.partial! 'api/answers/answer', answer: answer
#   end
# end

@answers.each do |answer|
  json.set! answer.id do
    json.id answer.id
    json.body answer.body
    json.questionId answer.question_id
    json.answerer answer.answerer, :id, :username
    json.createdAt answer.created_at
    json.updatedAt answer.updated_at
  end
end