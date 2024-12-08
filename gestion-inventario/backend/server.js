const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Conectar a MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.log('Error de conexión a MongoDB:', err));

// Importar rutas
const estadoEquipoRoutes = require('./routes/estadoEquipoRoutes');
const marcaRoutes = require('./routes/marcaRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');
const inventarioRoutes = require('./routes/inventarioRoutes');
const tipoEquipoRoutes = require('./routes/tipoEquipoRoutes');
const authRoutes = require('./routes/authRoutes'); 


// Usar rutas
app.use('/api/estado-equipo', estadoEquipoRoutes);
app.use('/api/marca', marcaRoutes);
app.use('/api/usuario', usuarioRoutes);
app.use('/api/inventario', inventarioRoutes);
app.use('/api/tipo-equipo', tipoEquipoRoutes);
app.use('/api/auth', authRoutes);
// Iniciar el servidor
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});
