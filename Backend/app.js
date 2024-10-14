const express = require('express');
const cors = require('cors'); // Importa el paquete cors
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth'); // Rutas de autenticación
const adminRoutes = require('./routes/admin'); // Asegúrate de crear y usar estas rutas

const app = express();

// Middlewares
app.use(cors()); // Habilita CORS para todas las rutas
app.use(express.json()); // Para procesar JSON en el body

// Definir las rutas
app.use('/api/auth', authRoutes); // Rutas de autenticación
app.use('/api/admin', adminRoutes); // Rutas de administración para buses, conductores y viajes

// Conectar a la base de datos
const URI = 'mongodb+srv://sergiomesa01:nOwlqJoGuKxjgEF2@training.m1grr.mongodb.net/?retryWrites=true&w=majority&appName=training';
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Configuración del puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
