class CreateTags < ActiveRecord::Migration[5.2]
  def change
    create_table :tags do |t|
      t.string :tag_name, null: true  
      t.timestamps
    end
    add_index :tags, :tag_name, unique: true
  end
end
