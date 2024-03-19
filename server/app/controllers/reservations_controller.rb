class ReservationsController < ApplicationController
  def reservations
    reservations = Reservation.where(cabin_id: 1).pluck(:start_date, :end_date)

    render json: { dates: reservations }
  end

  def create
    reservation = CreateReservationService.new(reservation_params).call
    InvoiceGenerationService.new(reservation).call

    render json: reservation, status: :created
  rescue => e
    render json: { error: e.message }, status: :unprocessable_entity
  end

  private

  def reservation_params
    params.require(:reservation).permit(
      :name, :email, :cnp, :start_date, :end_date, :cabin_id)
  end
end

