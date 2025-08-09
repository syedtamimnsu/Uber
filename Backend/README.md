# /users/register Endpoint Documentation

## Endpoint
`POST /users/register`

## Description
Registers a new user. On successful registration, returns an authentication token along with user details.

## Data Requirements
- **fullname** (object):
  - `firstname`: string
  - `lastname`: string
- **email**: valid email string.
- **password**: string (the password is hashed before storage).

## Responses
- **201 Created**: User is created. Returns a JSON object with the token and user details.
- **400 Bad Request**: Validation errors; returns an error message and an array of issues.

## Example Response (201 Created)
````json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
        "id": "12345",
        "firstname": "John",
        "lastname": "Doe",
        "email": "john.doe@example.com"
    }
}
````

# /users/login Endpoint Documentation

## Endpoint
`POST /users/login`

## Description
Logs in an existing user. Returns an authentication token along with user details on successful login.

## Data Requirements
- **email**: valid email string.
- **password**: string.

## Responses
- **200 OK**: Login successful. Returns a JSON object with the token and user details.
- **400 Bad Request**: Validation errors; returns an error message and an array of issues.
- **401 Unauthorized**: Invalid email or password.

## Example Response (200 OK)
````json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
        "id": "12345",
        "firstname": "John",
        "lastname": "Doe",
        "email": "john.doe@example.com"
    }
}
````

# /users/profile Endpoint Documentation

## Endpoint
`GET /users/profile`

## Description
Fetches the profile of the currently authenticated user. Requires a valid authorization token.

## Responses
- **200 OK**: Returns a JSON object with the user's details.
- **401 Unauthorized**: If the token is missing or invalid.

## Example Response (200 OK)
````json
{
    "id": "12345",
    "firstname": "Jane",
    "lastname": "Doe",
    "email": "jane.doe@example.com"
}
````

# /users/logout Endpoint Documentation

## Endpoint
`GET /users/logout`

## Description
Logs out the authenticated user. Clears the authentication token and blacklists it.

## Responses
- **200 OK**: Logout successful with a confirmation message.
- **401 Unauthorized**: If the token is missing or invalid.

## Example Response (200 OK)
````json
{
    "message": "Logged out successfully"
}








# /captain/register Endpoint Documentation

## Endpoint
`POST /captain/register`

## Description
Registers a new captain. On successful registration, returns an authentication token along with captain details.

## Data Requirements
- **fullname** (object):
  - `firstname`: string (min 3 characters)
  - `lastname`: string (min 3 characters, optional)
- **email**: valid email string.
- **password**: string (min 6 characters).
- **vehicle** (object):
  - `color`: string (min 3 characters)
  - `plate`: string (min 3 characters)
  - `capacity`: integer (min 1)
  - `vehicleType`: string; allowed values: `car`, `bike`, `CNG`

## Example Request Body
````json
{
    "fullname": {
        "firstname": "John",
        "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "secret123",
    "vehicle": {
        "color": "blue",
        "plate": "ABC123",
        "capacity": 4,
        "vehicleType": "car"
    }
}
````

## Responses
- **201 Created**: Captain is registered. Returns a JSON object with the token and captain details.
- **400 Bad Request**: Validation errors; returns error details.

## Example Response (201 Created)
````json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "captain": {
        "id": "12345",
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "john.doe@example.com",
        "vehicle": {
            "color": "blue",
            "plate": "ABC123",
            "capacity": 4,
            "vehicleType": "car"
        }
    }
}
````

````
