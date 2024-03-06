class Reservation < ApplicationRecord
  belongs_to :client
  has_one :invoice, dependent: :destroy
  validate :end_date_after_start_date
  validate :minimum_reservation_period


  def end_date_after_start_date
    return if end_date.blank? || start_date.blank?

    if end_date <= start_date
      errors.add(:end_date, 'must be after the start date')
    end
  end

  def minimum_reservation_period
    return if end_date.blank? || start_date.blank?

    if (end_date - start_date).to_i < 2
      errors.add(:base, 'Reservation period must be at least 2 days')
    end
  end
end