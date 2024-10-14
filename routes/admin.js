const express = require('express');
const router = express.Router();
const Bus = require('../models/Bus'); // Asegúrate de crear este modelo
const Driver = require('../models/Driver'); // Asegúrate de crear este modelo
const Trip = require('../models/Trip'); // Asegúrate de crear este modelo

// Crear Bus
router.post('/buses', async (req, res) => {
    const { plate, driverName, departureCity, arrivalCity } = req.body;

    try {
        const newBus = new Bus({ plate, driverName, departureCity, arrivalCity });
        await newBus.save();
        res.status(201).json({ message: 'Bus creado exitosamente', newBus });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el bus', error });
    }
});

// Crear Conductor
router.post('/drivers', async (req, res) => {
    const { cedula, name, license } = req.body;

    try {
        const newDriver = new Driver({ cedula, name, license });
        await newDriver.save();
        res.status(201).json({ message: 'Conductor creado exitosamente', newDriver });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el conductor', error });
    }
});

// Crear Viaje
router.post('/trips', async (req, res) => {
    const { origin, destination, departureTime, busId, driverId } = req.body;

    try {
        const newTrip = new Trip({ origin, destination, departureTime, busId, driverId });
        await newTrip.save();
        res.status(201).json({ message: 'Viaje creado exitosamente', newTrip });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el viaje', error });
    }
});

module.exports = router;
