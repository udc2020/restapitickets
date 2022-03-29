const express = require('express')
const router = express.Router()

const {
   getTickets,
   setTicket,
   deleteTicket,
   updateTicket
} = require('../controllers/controlles')


router.route('/')
   .get(getTickets)
   .post(setTicket)

router.route('/:id')
   .put(updateTicket)
   .delete(deleteTicket)




module.exports = router