
namespace :db do
  desc "Create two cabins (cozyVilla and masterVilla) with 2 reservations each"
  task create_cabins_with_reservations: :environment do
    Reservation.destroy_all
    Cabin.destroy_all

    cozy_villa = Cabin.find_or_create_by!(name: 'cozyVilla')
    master_villa = Cabin.find_or_create_by!(name: 'masterVilla')

    def create_reservations_for_cabin(cabin)
      2.times do
        start_date = Faker::Date.between(from: 1.month.ago, to: 1.month.from_now)
        end_date = start_date + rand(3..5).days

        Reservation.create!(
          cabin: cabin,
          start_date: start_date,
          end_date: end_date
        )
      end
    end

    create_reservations_for_cabin(cozy_villa)
    create_reservations_for_cabin(master_villa)

    puts "Created 2 reservations for cozyVilla and masterVilla"
  end
end
