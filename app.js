const Controller = require("./controllers/userController")

const app = require("express")()

app.post('/auth/register', Controller.register)

app.listen(3000)