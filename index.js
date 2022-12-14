const express = require('express')

const incidentRoutes  = require('./src/incidents/routes')
const app = express()

const port = 3000

const fetch = require("node-fetch")




app.use(express.json())


app.use("/api/v1/incidents", incidentRoutes)


function callExternalApi() {
    let url = "https://api.openweathermap.org/data/2.5/weather?q=Accra,ghana&APPID=c4a412020b7e28ffbb34ba34567ecb2a";
    fetch(url).then((res) => {
        res.json().then((res1) => {
            console.log(res1)
        })
    })
}

app.get('/', (req,res) => {
    res.send("Testing")
})


app.listen(port, () => console.log(`app listening on port`),)