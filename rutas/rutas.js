const {Router} = require("express")
const router = Router()

const controllers = require("../controllers/controllers")

router.post("/send-email", controllers.sendEmail)

module.exports = router