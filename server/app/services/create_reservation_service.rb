class CreateReservationService
  def initialize(params)
    @params = params
  end

  def call
    client = Client.create!(@params[:client_attributes])

    Reservation.create!(
      start_date: @params[:start_date],
      end_date: @params[:end_date],
      client: client,
      cabin_id: @params[:cabin_id]
    )
  end
end
