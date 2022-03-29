# @answers.each do |answer|
#   json.set! answer.id do
#     json.partial! 'api/answers/answer', answer: answer
#   end
# end

json.answers do
  @answers.each do |answer|
    json.set! answer.id do
      json.id answer.id
      json.body answer.body
      json.questionId answer.question_id
      json.answererId answer.answerer.id
      json.createdAt answer.created_at
      json.updatedAt answer.updated_at

      vote_sum = 0
      answer.votes.each do |vote|
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
end

json.answerer do
  @answers.each do |answer|
    json.set! answer.answerer.id do
      json.id answer.answerer.id
      json.username answer.answerer.username
    end
  end
end

json.votes do 
  @answers.each do |answer|
    answer.votes.each do |vote|
      json.set! vote.id do
        json.id vote.id
        json.voterId vote.voter_id
        json.voteableId vote.voteable_id
        json.voteableType vote.voteable_type
        json.value vote.value
      end
    end
  end
end

# json.question do
#   @answer.each do |answer|
#     json.set! answer.question_id do
#       json.id answer.question, :id
#       json.title answer.question, :title
#       json.body answer.question, :body
#       json.askerId answer.question, :asker_id
#       json.createdAt answer.question.created_at
#       json.updatedAt answer.question.updated_at
#     end
#   end
# end