const getIncidents = "SELECT * FROM incidents"

const checkIncidentExist = "SELECT s FROM incidents WHERE s.incident_desc = $1"

const addIncident = "INSERT INTO incidents (incident_desc, city, country) VALUES ($1, $2, $3)"


module.exports = {
    getIncidents,
    checkIncidentExist,
    addIncident,
}