const asyncHandler = require('express-async-handler')
const Tickets =require('../models/ticketsModel')



// GET /api/tickets (Private)
const getTickets = asyncHandler(async (req,res)=>{
   try {
      const ticket = await Tickets.find()
      res.status(200).json(ticket)
   } catch (error) {
      res.status(500).json({massage:"Some errors"})
   }
})
// POST /api/tickets/ (Private)
const setTicket = asyncHandler(async (req,res)=>{
   

      const ticket = await Tickets.create({
         header:req.body.header,
         date:req.body.date,
         getsOpen:req.body.getOpen,
         stadium:req.body.stadium,
         team1:req.body.team1,
         team2:req.body.team2,
         price:req.body.price,
         color:req.body.color,
         round:req.body.round,
         maxTicket:req.body.maxTicket,

      })
      res.status(200).json(ticket)
   
})
// PUT /api/tickets/:id (Private)
function updateTicket(req,res){
   res.status(200).json({masasge:`tickets ${req.params.id} update`})
}
// DELETE /api/tickets/:id (Private)
function deleteTicket(req,res){
   res.status(200).json({masasge:`tickets ${req.params.id} delet`})
}


module.exports = {
   getTickets,
   setTicket,
   updateTicket,
   deleteTicket
}



