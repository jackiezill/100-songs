class CreateSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |t|
      t.string :name
      t.string :author
      t.string :category

      t.timestamps
    end
  end
end
