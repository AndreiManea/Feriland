class ReservationsController < ApplicationController
  def reservations
    reservations = Reservation.where(cabin_id: 1).pluck(:start_date, :end_date)

    render json: { dates: reservations }
  end

  def create
    reservation = CreateReservationService.new(reservation_params).call
    invoice = InvoiceGenerationService.new(reservation).call

    ClientMailer.with(email: reservation_params[:client_attributes][:email],
                      name: reservation_params[:client_attributes][:name],
                      reservation: reservation,
                      invoice: invoice).reservation_confirmed_email.deliver_now


    render json: reservation, status: :created
  rescue => e
    render json: { error: e.message }, status: :unprocessable_entity
  end

  private

  def reservation_params
    params.require(:reservation).permit(
      :days, :start_date, :end_date, :cabin_id,
      client_attributes: [:name, :email, :phone]
    )
  end
end
