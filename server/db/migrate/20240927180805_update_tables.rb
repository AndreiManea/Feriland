class UpdateTables < ActiveRecord::Migration[7.1]
  def change
    remove_column :reservations, :cnp
    remove_column :reservations, :phone
    add_column :reservations, :booking_data, :jsonb
  end
end
