class CreateVotes < ActiveRecord::Migration[5.2]
  def change
    create_table :votes do |t|
      t.integer :voter_id, null: false, index: true
      t.boolean :is_upvote, null: false
      t.integer :voteable_id, null: false
      t.string :voteable_type, null: false
    end

    add_index :votes, [:voteable_id, :voteable_type]
    add_index :votes, [:voter_id, :voteable_id, :voteable_type], unique: true
  end
end

# t.references :votable, polymorphic: true, index: true