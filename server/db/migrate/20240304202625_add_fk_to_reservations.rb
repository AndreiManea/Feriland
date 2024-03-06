class AddFkToReservations < ActiveRecord::Migration[7.1]
  def change
    add_foreign_key :reservations, :cabins, column: :cabin_id
  end
end
