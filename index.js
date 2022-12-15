const express = require('express')

const incidentRoutes  = require('./src/incidents/routes')

const app = express()

const port = 3000

app.use(express.json())

app.use("/api/v1/incidents", incidentRoutes)

app.listen(port, () => console.log(`app listening on port`))