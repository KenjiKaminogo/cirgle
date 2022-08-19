const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policy/AuthenticationControllerPolicy')
const CircleController = require('./controllers/CircleController')

module.exports = (app) => {
    app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)

    app.post('/login',
    AuthenticationController.login)

    app.get('/circle',
    CircleController.index)
    app.get('/circle/:circleId',
    CircleController.show)
    app.put('/circle/:circleId',
    CircleController.put)
    app.post('/circle',
    CircleController.post)
    
}
 