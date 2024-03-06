class CreateClients < ActiveRecord::Migration[7.1]
  def change
    create_table :clients do |t|
      t.string :name
      t.string :email
      t.string :attachment_path
      t.string :phone

      t.timestamps
    end
  end
end
