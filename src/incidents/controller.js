
const pool = require('../../db')

const queries = require("./queries")

const fetch = require("node-fetch")

const dateTime = require('node-datetime')

const dt = dateTime.create()

const date = dt.format('Y-m-d H:M:S')

let weather = callExternalApi()

const getIncidents = (req, res) => {

    pool.query(queries.getIncidents,(error,result) => {

        if (error)throw error;
        res.status(200).json(result.rows)
    })
}


function callExternalApi() {
    let url = "https://api.openweathermap.org/data/2.5/weather?q=Accra,ghana&APPID=c4a412020b7e28ffbb34ba34567ecb2a";
    fetch(url).then((res) => {
        res.json().then((res1) => {
        weather = res1          
        })
    })
}


const addIncident = (req,res) => {
 

   callExternalApi()
    const { incident_desc, city, country } = req.body

        pool.query(queries.addIncident,[incident_desc, city, country, date, {weather} ], (error, results) => {
            if (error) throw error

           res.status(201).send("Incident successfully logged")
        })

    }


module.exports = {
    getIncidents,
    addIncident,
}