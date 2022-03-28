json.questions do
  @questions.each do |question|
    json.set! question.id do 
      json.askerId question.asker_id
      json.id question.id
      json.title question.title
      json.body question.body
      json.createdAt question.created_at
      json.updatedAt question.updated_at
      json.answerIds question.answer_ids


      voteSum = 0
      question.votes.each do |vote|
        voteSum += vote.value
        json.votes do
          json.set! vote.id do
            json.id vote.id
            json.voterId vote.voter_id
            json.voteableId vote.voteable_id
            # json.voteableType vote.voteable_type
            json.value vote.value
          end
        end
      end
      json.voteScore voteSum

    end
  end
end

json.users do 
  @questions.each do |question|
    json.set! question.asker.id do
      json.id question.asker.id
      json.username question.asker.username
    end
  end
end



# not using partial anymore
# json.partial! 'api/questions/question', question: question