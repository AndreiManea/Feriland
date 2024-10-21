class CreateReservationService
  def initialize(params)
    @params = params
  end

  def call
    Reservation.create!(
      name: @params[:name],
      email: @params[:email],
      start_date: @params[:start_date],
      end_date: @params[:end_date],
      booking_data: @params[:booking_data],
      cabin_id: @params[:cabin_id]
    )
  end
end
