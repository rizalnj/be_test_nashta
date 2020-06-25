# Back-end Test Nashta

## Installation
cd /be_test_nashta

npm install

npm run start

or

npm run dev

## API Router
### `GET / (req, res, data)`
Respond with `200 OK` and JSON-encoded data.
* `data` Array

### `POST / (req, res, data)`
Body and JSON-encoded data.
* Object

Respond with `200 OK` and JSON-encoded data.
* `data` Array

### `PUT / (req, res, data)`
Body and JSON-encoded data with params `id`.

* Object

Respond with `200 OK` and JSON-encoded data.
* `data` Array

### `DELETE / (req, res, data)`
With params `id`.

Respond with `200 OK` and JSON-encoded data.
* `data` Array

### `POST /send-file (req, res, data)`
With body file `files`.

Respond with `200 OK` and JSON-encoded data.
* `data` Array