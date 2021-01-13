# RestAPI_With_ExpressJS
## basic things about REST API by express JS

### I1. app.use(express.urlencoded({extended: true}))

### I2. When you are using different PORT for backend or fontend then you have to user CORS.
### More: https://www.npmjs.com/package/cors

// This is the README.txt for User Auth:
// 1. Model
// 2. Route (npm Validator)
// 3. Controller (npm bcrypt)

// This is the README.txt for User Auth token:
// 1. creating tiken (npm i jsonwebtoken)
// 2. creating middleware (api > middleware > auth.js)
// 3. user the middleware (route.get('/all', authenticate, controller.allUser))
