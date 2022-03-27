class Vote < ApplicationRecord
  validates :voter_id, uniqueness: { scope: [:voteable_id, :voteable_type]}

  belongs_to :voteable, polymorphic: true

  belongs_to :voter, inverse_of: :votes

end
