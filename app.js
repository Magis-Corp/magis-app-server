const app = require("express")()
const PORT = 3000
const router = require('./routes/index.js')

app.use(router)

app.listen(PORT, () => console.log("App listening to PORT", PORT))