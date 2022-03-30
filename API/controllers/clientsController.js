const asyncHandler = require("express-async-handler")
const Clients = require("../models/clientsModel")



const getClients = asyncHandler(async (req, res) => {
   const client = await Clients.find()
   if (!client){
      res.status(500)
      throw new Error(' Empty Clients ')
   }

   res.status(200).json(client)
})


const getClient = asyncHandler(async (req, res) => {
   const client = await Clients.findById(req.params.id)
   if (!client){
      res.status(500)
      throw new Error('Client Not Exsist')
   }
   res.status(200).json(client)
})

const deletClient = asyncHandler(async (req, res) => {
   const client = await Clients.findById(req.params.id)
   if (!client){
      res.status(500)
      throw new Error('Client Not Exsist')
   }
   res.status(200).json(client)
})


module.exports = {
   getClients,
   getClient,
   deletClient
}