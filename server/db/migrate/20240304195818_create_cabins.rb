class CreateCabins < ActiveRecord::Migration[7.1]
  def change
    create_table :cabins do |t|
      t.string :name
      t.integer :nr_guests

      t.timestamps
    end
  end
end
