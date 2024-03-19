class CreateReservationService
  def initialize(params)
    @params = params
  end

  def call
    Reservation.create!(
      start_date: @params[:start_date],
      end_date: @params[:end_date],
      name: @params[:name],
      email: @params[:email],
      cnp: @params[:cnp],
      cabin_id: @params[:cabin_id]
    )
  end
end
