class Client < ApplicationRecord
  has_many :reservations, dependent: :destroy

  validates :name, :email, :phone, presence: true
  validates_format_of :email, with: URI::MailTo::EMAIL_REGEXP

end