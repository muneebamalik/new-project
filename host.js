app.get("/atmosphere" , (req,res) => {

    let query = req.query
    console.log("query")
    res.send({
      
        PM:query.PM,
        temp:query.temp,
        sense:query.sense,
        humidity:query.humidity,
        atmosphere:[

            {
                temp: "answer"
            },
            {
                humidity: "parameter"
            },
            {
                pm25: "measure"
            },
            {
                Oxygen: "accuracy"
            },
          
        ]
    })


} )

const PORT = 6600

app.listen(PORT, () =>  {

    console.log(`server is up at localhost:${PORT} `)
})