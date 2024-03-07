# Initial Setup

- in server directory run
  - bundle install
  - rails db:create
  - rails db:migrate
  - rails db:seed
  - rails s - to start server
  - rails c - access server console

# Reservations API Documentation

This documentation provides detailed information on API endpoints for creating and retrieving reservations within the Reservations system. The API adheres to REST principles, offering a clear and efficient means of communication with the Reservations database.

## Endpoints Overview

- **Create a Reservation**: `POST /reservations`
- **Retrieve Reservations**: `GET /reservations`

## Create a Reservation

This endpoint allows for the creation of a new reservation. It requires details such as the duration of the stay (days), the cabin ID, the start and end dates of the reservation, and client information.

### HTTP Request

POST http://localhost:3000/reservations


### Request Body

The request body must be a JSON object containing the reservation and client attributes. Below is an example of the JSON payload:

```json
{
  "reservation": {
    "days": 5,
    "cabin_id": 2,
    "start_date": "2024-03-01",
    "end_date": "2024-03-06",
    "client_attributes": {
      "name": "Jane Doe",
      "email": "jane.doe@example.com",
      "phone": "123-456-7890"
    }
  }
}

curl -X POST http://localhost:3000/reservations \
-H "Content-Type: application/json" \
-d '{"reservation": {"days": 5, "cabin_id":2, "start_date": "2024-03-01", "end_date": "2024-03-06", "client_attributes": {"name": "Jane Doe", "email": "jane.doe@example.com", "phone": "123-456-7890"}}}'
```

### Retrieve Reservations
This endpoint retrieves reservations from the system. It can be filtered by cabin ID to fetch reservations specific to a cabin.

**HTTP Request**
- GET http://localhost:3000/reservations
### Request Body
To filter reservations by cabin, include the cabin_id in the request body. Below is a sample JSON payload for such a request:

```json
curl -X GET http://localhost:3000/reservations \
-H "Content-Type: application/json"
```