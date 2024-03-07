class ClientMailer < ApplicationMailer
  default from: 'test@feriland.com'

  def reservation_confirmed_email
    @user = params[:name]
    # @email = params[:email]
  end
end