Rails.application.routes.draw do
  post "/reservations", to: "reservations#create"
  get "/reservations", to: "reservations#reservations"
end
