const express = require('express')
const nunjucks = require('nunjucks')
const server = express()

//Criando a porta
server.listen(5000, function(){
    console.log("server is running")
})

//Adicionando CSS
server.use(express.static('public'))

//// Adicionando html
server.set("view engine" , "njk")

nunjucks.configure("views" , {
    express:server

})

//Rota da página principal - home
server.get("/", function (req , res){
    return res.render("about")
})

// Rota da página cursos 
server.get("/curso", function (req , res){
    return res.render("curso")
})