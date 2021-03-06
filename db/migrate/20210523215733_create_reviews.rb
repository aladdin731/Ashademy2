class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :reviewer_id, null: false
      t.integer :course_id, null: false
      t.string :body, default: "", null: false
      t.integer :rating, null: false
      t.timestamps
    end
    add_index :reviews, :course_id
    add_index :reviews, :reviewer_id
  end
end
