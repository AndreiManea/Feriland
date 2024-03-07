class RemoveInvoiceIdFromReservations < ActiveRecord::Migration[7.1]
  def change
    remove_column :reservations, :invoice_id, :integer
  end
end
