#API DESIGN

  This app demonstrates a simple API implementation with NodeJs, Express and MongoDB.

  ## Project Set Up.

  The application runs in `npm 6.8.0` and `node v8.9.3`.

  Install node dependencies executing `npm install`.

  You can run the app locally running `npm start`.

  Set up this .env file in your folder
  ````
  DB_USER=theplayer
  DB_PASS=theplayer.123
  DB_URI=ds111565.mlab.com:11565/gamedata
  ````


## Endpoints.

The `api` URI preceeds all API endpoints(e.g. `http://localhost:8080/api/game`) and the following endpoints are currently available:
  * GET `/api/game`
  * POST `/api/game`