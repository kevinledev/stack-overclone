# json.questions do
  @questions.each do |question|
    json.set! question.id do 
      json.asker question.asker, :id, :username
      json.id question.id
      json.title question.title
      json.body question.body
      json.createdAt question.created_at
      json.updatedAt question.updated_at


      # json.asker question.asker, :id, :username
      # json.extract! question, :id, :title, :body, :created_at, :updated_at
    end
  end
# end

# json.users do 
#   @questions.each do |question|
#     json.set! question.asker.id do
#       json.id question.asker.id
#       json.username question.asker.username
#     end
#   end
# end



# not using partial anymore
# json.partial! 'api/questions/question', question: question