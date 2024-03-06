class AddCabinIdToReservationTable < ActiveRecord::Migration[7.1]
  def change
    add_column :reservations, :cabin_id, :integer
    add_index :reservations, :cabin_id
  end
end
