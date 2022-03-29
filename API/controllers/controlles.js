
// GET /api/tickets (Private)
function getTickets(req,res){
   res.status(200).json({masasge:'tickts '})
}
// POST /api/tickets/:id (Private)
function setTicket(req,res){
   res.status(200).json({masasge:'tickts '})
}
// PUT /api/tickets/:id (Private)
function updateTicket(req,res){
   res.status(200).json({masasge:'tickts '})
}
// DELETE /api/tickets/:id (Private)
function deleteTicket(req,res){
   res.status(200).json({masasge:'tickts '})
}


module.exports = {
   getTickets,
   setTicket,
   updateTicket,
   deleteTicket
}



