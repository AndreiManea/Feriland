# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2024_03_04_202625) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cabins", force: :cascade do |t|
    t.string "name"
    t.integer "nr_guests"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "clients", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "attachment_path"
    t.string "phone"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "invoices", force: :cascade do |t|
    t.bigint "reservation_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["reservation_id"], name: "index_invoices_on_reservation_id"
  end

  create_table "reservations", force: :cascade do |t|
    t.bigint "client_id", null: false
    t.date "start_date"
    t.date "end_date"
    t.boolean "invoice_generated"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "cabin_id"
    t.index ["cabin_id"], name: "index_reservations_on_cabin_id"
    t.index ["client_id"], name: "index_reservations_on_client_id"
  end

  add_foreign_key "invoices", "reservations"
  add_foreign_key "reservations", "cabins"
  add_foreign_key "reservations", "clients"
end