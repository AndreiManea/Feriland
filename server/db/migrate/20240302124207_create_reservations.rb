class CreateReservations < ActiveRecord::Migration[7.1]
  def change
    create_table :reservations do |t|
      t.references :client, null: false, foreign_key: true
      t.date :start_date
      t.date :end_date
      t.boolean :invoice_generated
      t.integer :invoice_id

      t.timestamps
    end
  end
end
