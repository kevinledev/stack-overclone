class CreateAnswers < ActiveRecord::Migration[5.2]
  def change
    create_table :answers do |t|
      t.text :body, null: false, index: true
      t.integer :answerer_id, null: false, index: true
      t.integer :question_id, null: false, index: true
      t.timestamps
    end
  end
end
