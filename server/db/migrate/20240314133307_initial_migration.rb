class InitialMigration < ActiveRecord::Migration[7.1]
  def change
    create_table :reservations do |t|
      t.string :name
      t.string :email
      t.bigint :cnp
      t.string :phone
      t.date :start_date
      t.date :end_date
      t.boolean :invoice_generated
      t.integer :invoice_id

      t.timestamps
    end

    create_table :invoices do |t|
      t.references :reservation, null: false, foreign_key: true

      t.timestamps
    end

    create_table :cabins do |t|
      t.string :name
      t.integer :nr_guests

      t.timestamps
    end

    add_column :reservations, :cabin_id, :integer
    add_index :reservations, :cabin_id
    add_foreign_key :reservations, :cabins, column: :cabin_id

  end
end
