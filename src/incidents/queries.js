const getIncidents = "SELECT * FROM incidents"

const checkIncidentExist = "SELECT s FROM incidents WHERE s.incident_desc = $1"

const addIncident = "INSERT INTO incidents (incident_desc, city, country, date, weather) VALUES ($1, $2, $3, $4, $5)"



module.exports = {
    getIncidents,
    checkIncidentExist,
    addIncident,
}