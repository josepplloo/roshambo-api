#API DESIGN

  This app was developed with **NodeJs**, **Express** and **MongoDB**.

  ## Project Set Up.

  The application runs with `npm 6.9.0` and `node v10.15.3`.

    1. Install node dependencies executing `npm install`.

    2. Set up this .env file in your folder with the credentials
    provided by the author via Email.

  ```
    DB_USER=******
    DB_PASS=******
    DB_URI=*******
  ```

    3. Next, run the app locally with `npm start`.


## Endpoints.

The `api` URI preceeds all API endpoints(e.g. `http://localhost:8080/api/game`) and the following endpoints are currently available:
  * GET `/api/game`
  * POST `/api/game`