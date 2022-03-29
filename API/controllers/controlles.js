
// GET /api/tickets (Private)
function getTickets(req,res){
   res.status(200).json({masasge:'tickts '})
}
// POST /api/tickets/ (Private)
function setTicket(req,res){
   if(!req.body.text) {
      res.status(400)
      throw new Error ("empty field cant sand")
   } 

   res.status(200).json({masasge:`tickets  post`})
}
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



