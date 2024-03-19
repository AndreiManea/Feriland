class Reservation < ApplicationRecord
  belongs_to :cabin

  MINIMUM_NIGHTS_STAY = 2

  validate :validate_date_range, :check_availability, :minimum_stay

  private

  def validate_date_range
    return if start_date && end_date && start_date < end_date
    errors.add(:base, 'Start date must be before end date')
  end

  def check_availability
    overlapping_reservations = Reservation.where(cabin_id: cabin_id)
                                          .where('start_date < ? AND end_date > ?', end_date, start_date)
    if overlapping_reservations.exists?
      errors.add(:base, 'Cabin is already reserved for the given period')
    end
  end

  def minimum_stay
    min_stay = MINIMUM_NIGHTS_STAY # Or fetch from a configuration variable or database
    if (end_date - start_date).to_i < min_stay
      errors.add(:base, "Reservation must be for a minimum of #{min_stay} nights")
    end
  end
end