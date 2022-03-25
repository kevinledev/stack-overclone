@questions.each do |question|
  json.set! question.id do 
    # json.partial! 'api/questions/question', question: question
    json.asker question.asker, :id, :username
    json.id question.id
    json.title question.title
    json.body question.body
    json.createdAt question.created_at
    json.updatedAt question.updated_at
  end
end