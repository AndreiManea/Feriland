class ReservationsController < ApplicationController

  def reservations

    reservations = Reservation.where(cabin_id: 1).pluck(:start_date, :end_date)
    formatted_reservations = reservations.flat_map do |start_date, end_date|
      [
        start_date.strftime("%b %d, %Y"),
        end_date.strftime("%b %d, %Y")
      ]
    end

    render json: { dates: formatted_reservations }
  end
  def create
    booking_data = reservation_params[:reservation][:booking_form_data]

    selected_dates = reservation_params[:reservation][:selected_dates]

    params = {
      name: "#{booking_data[:first_name]} #{booking_data[:last_name]}",
      email: booking_data[:email],
      start_date: selected_dates[:start_date],
      end_date: selected_dates[:end_date],
      booking_data: booking_data
    }
    reservation = CreateReservationService.new(params).call

    render json: reservation, status: :created
  rescue => e
    render json: { error: e.message }, status: :unprocessable_entity
  end

  private

  def reservation_params
    @params ||= HashWithIndifferentAccess.new(params.permit!.as_json.deep_transform_keys!(&:underscore))
  end
end
