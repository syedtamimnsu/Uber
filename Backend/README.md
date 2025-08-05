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
