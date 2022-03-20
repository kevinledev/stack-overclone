# == Schema Information
#
# Table name: questions
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  body       :text             not null
#  asker_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Question < ApplicationRecord
  validates :title, :body, :asker_id, presence: true

  belongs_to :asker,
    foreign_key: :asker_id,
    class_name: :User

end
