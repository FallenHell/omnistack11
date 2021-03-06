const express = require('express');
const routes = express.Router()
const OngController = require('../src/controllers/OngController')
const IncidentController = require('../src/controllers/IncidentController')
const ProfileController = require('../src/controllers/ProfileController')
const SessionContrller = require('../src/controllers/SessionController')


routes.post('/sessions', SessionContrller.create)

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create)


routes.get('/profile', ProfileController.index)


routes.get('/incidents', IncidentController.index)
routes.post('/incidents', IncidentController.create)
routes.delete('/incidents/:id', IncidentController.delete)



module.exports = routes;