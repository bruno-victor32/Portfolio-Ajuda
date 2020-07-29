const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.use(express.static('public'))

server.set("view engine","njk")/**/ 

nunjucks.configure("views",{
  express:server
})

server.get("/", function (req,res) {
    return res.render("about")
  } ) 

  server.get("/conteudo", function (req,res) {
    return res.render("conteudo.njk")
  } ) 

server.listen(5000, function(req, res) {
    console.log("Server is running")
})