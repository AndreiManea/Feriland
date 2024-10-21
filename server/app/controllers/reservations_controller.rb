class ReservationsController < ApplicationController

  def reservations
    reservations = Reservation.joins(:cabin).pluck('cabins.name', :start_date, :end_date)

    formatted_reservations = reservations.group_by { |cabin_name, _, _| cabin_name }.transform_values do |dates|
      dates.flat_map do |_, start_date, end_date|
        (start_date..end_date).map { |date| date.strftime("%b %d, %Y") }
      end
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
      booking_data: booking_data,
      cabin_id: Cabin.find_by(name:reservation_params[:reservation][:selected_cabin])
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
