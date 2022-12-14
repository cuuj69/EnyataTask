
const pool = require('../../db')

const queries = require("./queries")


const getIncidents = (req, res) => {

    pool.query(queries.getIncidents,(error,result) =>{
        
        if (error)throw error;
        res.status(200).json(result.rows)
    })
}


const addIncident = (req,res) => {
    const { incident_desc, city, country } = req.body

    pool.query(queries.checkIncidentExist, [incident_desc], (error, results) => {
        if(results.rows.length){
            res.send("Incident already reported.")
        }

        Pool.query(queries.addIncident,[incident_desc, city, country], (error, results) => {
            if (error) throw error

           res.status(201).send("Incident successfully logged")
        })
    })
}


module.exports = {
    getIncidents,
    addIncident,
}