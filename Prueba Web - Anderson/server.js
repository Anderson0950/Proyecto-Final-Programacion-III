const express = require('express');
const app = express();
const path = require('path');

// Establecer la carpeta de archivos estáticos
app.use(express.static(path.join(__dirname, 'Pruebas')));

// Rutas
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Prueba Web', 'index.html'));
});

app.get('/catalogo', (req, res) => {
    res.sendFile(path.join(__dirname, 'Prueba Web', 'catalogo.html'));
});

app.get('/detalles', (req, res) => {
    res.sendFile(path.join(__dirname, 'Prueba Web', 'detalles.html'));
});

app.get('/contacto', (req, res) => {
    res.sendFile(path.join(__dirname, 'Prueba Web', 'contacto.html'));
});

// Iniciar el servidor
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});
