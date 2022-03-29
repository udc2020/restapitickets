const express =  require('express')
const router = express.Router()

const { getTickets, setTicket, deleteTicket, updateTicket } = require('../controllers/controlles')


router.get("/", getTickets)
router.get("/", setTicket)
router.get("/", updateTicket)
router.get("/", deleteTicket)



module.exports = router