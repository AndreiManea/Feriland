class ReservationsController < ApplicationController

  def create
    ActiveRecord::Base.transaction do
      reservation = CreateReservationService.new(reservation_params).call
      InvoiceGenerationService.new(reservation).call
    end

    render json: reservation, status: :created
  rescue => e
    render json: { error: e.message }, status: :unprocessable_entity
  end

  def reservation_params
    params.require(:reservation).require(:bookingFormData).transform_keys(&:underscore).permit(
      :first_name, :last_name, :telephone, :email, :address, :personal_numeric_code, :additional_info,
      selected_persons: [:adults, :children],
      selected_cabin: "",
      selected_dates: []
    )
  end

  private

  def reservation_params
    params.require(:reservation).permit(
      :name, :email, :cnp, :start_date, :end_date, :cabin_id)
  end
end
