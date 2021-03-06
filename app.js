const { Console } = require("console")
const express = require("express")  //requerimos el paquete express
const path = require ("path")  //path unifica las rutas dentro de los sistemas operatvos((direcciones))

const app = express()  //

        const PORT= process.env.PORT || 3080

        app.listen(PORT,()=>{
            console.log("Corriendo en el puerto "+PORT)
        })


const publicPath = path.resolve(__dirname, "./public") //le indicamos a path que resuelva la siguiente ruta
app.use(express.static(publicPath))  //usamos la funcion static de express, que recibe como parametro la ruta a la carpeta public

app.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
})
app.get("/register",(req,res)=>{
    res.sendFile(path.resolve(__dirname, "./views/register.html"))
})

app.get("/login",(req,res)=>{
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
})