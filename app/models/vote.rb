class Vote < ApplicationRecord
  validates :voter_id, uniqueness: { scope: [:voteable_id, :voteable_type]}

  belongs_to :voteable, polymorphic: true

  belongs_to :voter,
    foreign_key: :voter_id,
    class_name: :User

end
