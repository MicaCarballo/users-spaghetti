const router = require('express').Router();
const userServices = require('./users.services')

router.get("/", userServices.getAllUsers)
router.get("/:id", userServices.getUserById)
router.post("/", userServices.postUser)

module.exports = router;