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

    vote_sum = 0
    @question.votes.each do |vote|
      vote_sum += vote.value
      # json.votes do
      #   json.set! vote.id do
      #     json.id vote.id
      #     json.voterId vote.voter_id
      #     json.voteableId vote.voteable_id
      #     json.value vote.value
      #   end
      # end
    end
    json.voteScore vote_sum
  end
end

json.asker do
  json.set! @question.asker.id do
    json.id @question.asker.id
    json.username @question.asker.username
  end
end

# json.votes do 
#   @question.votes.each do |vote|
#     json.set! vote.id do
#       json.id vote.id
#       json.voterId vote.voter_id
#       json.voteableId vote.voteable_id
#       json.voteableType vote.voteable_type
#       json.value vote.value
#     end
#   end
# end

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