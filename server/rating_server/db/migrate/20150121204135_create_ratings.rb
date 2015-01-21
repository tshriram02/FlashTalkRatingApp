class CreateRatings < ActiveRecord::Migration
  def change
    create_table :ratings do |t|
      t.string :comments
      t.integer :rating_value
    end
  end
end
