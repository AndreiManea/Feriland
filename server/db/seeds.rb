# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
# db/seeds.rb

# Create 10 clients, each with a reservation and an invoice.


cabin = Cabin.create(
  name: "Cabin in the woods, Tiger Woods",
  nr_guests: 4
)

interval = 3.days
start_date = Date.today

4.times do |i|
  Reservation.create(
    name: Faker::Name.name,
    cnp: rand(10 ** 10),
    phone: Faker::PhoneNumber.phone_number,
    email: Faker::Internet.email,
    start_date: start_date + (interval + 4.days) * i,
    end_date: start_date + interval + (interval + 4.days) * i,
    cabin_id: cabin.id
  )
end

puts 'Seed data created successfully!'
