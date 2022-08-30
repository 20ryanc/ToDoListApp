Install relavent maven dependencies and run the service.

Create a database in postgresql named "Spring"

To register send a POST request to http://localhost:8080/api/v1/register. Send json { "email": ... "password": ... }

To login send a POST request to http://localhost:8080/api/v1/login. Send a json { "email": ... "password": ... }

To logout send a POST request to http://localhost:8080/api/v1/logout.

To get Username while logged in send a GET to /api/v1/info

To get Not taking entries send a GET to /api/v1/getEntry.

To replace note taking entires to update send a POST to /api/v1/insertEntry. Send a json

[ { "title": "...",
  "content": "..." },
  { "title": "...",
  "content": "..." } ]

To delete all entries send a DELETE request to /api/v1/deleteEntry.
