class AddScoreColAndUpdateVotes < ActiveRecord::Migration[5.2]
  def change
    add_column :questions, :score, :integer, default: 0
    add_column :answers, :score, :integer, default: 0

    remove_column :votes, :is_upvote
    add_column :votes, :value, :integer, null: false
  end
end
