
const express= require('express')
const app=express()

const userRoutes = require('./routes/user')


function middleware (req, res, next) {
    console.log("<---Middleware function--->");
    next()
}

app.get('/',(req,res)=>{
res.send({
    status: 200,
    msg: "Hello Welcome!"
})
})

app.get('/about',middleware,(req,res)=>{
    res.send({
        status: 200,
        msg: "Hello Welcome! / About Route"
    })
    })

    app.use('/user', userRoutes)

    // app.get('/user',(req,res)=>{
    //     res.send({
    //         status: 200,
    //         msg: "Hello Welcome! / User Route"
    //     })
    //     })

        app.get('/user/:id',(req,res)=>{
            console.log("req.params.id --->" ,req.params.id);
            res.send({
                status: 200,
                msg: "Hello Welcome! / User Id is" + req.params.id
            })
            })

    const port=300
app.listen(port,()=>{
    console.log("You port is running on"+port);
})

console.log("Hello World");