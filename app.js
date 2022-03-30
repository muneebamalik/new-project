const express = require("express")
const app = express() 

app.get("/" , (req,res) => {

    res.send({
        status: "fine"
    })


} ) 


app.get("/books" , (req,res) => {

    let query = req.query
    console.log("query",query.temp)
    res.send({
      
        temp:query.temp,
        visibility:query.visibility,
        sensor:query.sensor,
        humidity:query.temp + query.visibility,
        books:[

            {
                name: "Hundred Years"
            },
            {
                name: "Achille's Song"
            },
          
        ]
    })


} )

const PORT = 3080

app.listen(PORT, () =>  {

    console.log(`server is up at localhost:${PORT} `)
})