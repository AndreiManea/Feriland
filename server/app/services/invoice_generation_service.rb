class InvoiceGenerationService

  def initialize(reservation)
    @reservation = reservation
  end

  def call
    # Logic to generate invoice for the reservation
    puts "Generating invoice for reservation ID: #{@reservation.id}"
    invoice = Invoice.create(reservation_id: @reservation.id)
    @reservation.update(invoice_generated: true)

    invoice
  end
end
