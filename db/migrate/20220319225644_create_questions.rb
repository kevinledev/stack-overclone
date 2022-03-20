class CreateQuestions < ActiveRecord::Migration[5.2]
  def change
    create_table :questions do |t|
      t.string :title, null: false, index: true
      t.text :body, null: false, index: true
      t.integer :asker_id, null: false, index: true
      t.timestamps
    end
  end
end
