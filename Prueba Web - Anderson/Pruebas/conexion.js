const express = require('express');
const bodyParser = require('body-parser');
const sql = require('mssql');

const app = express();
const port = 3000;

// Configuración del middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configuración de la conexión a la base de datos
const dbConfig = {
    user: 'ordersuser',
    password: 'userorders@2023',
    server: 'svcorders.database.windows.net',
    database: 'Orddw',
    options: {
        encrypt: true // Importante si estás utilizando Azure SQL
    }
};

// Ruta para manejar la inserción de datos
app.post('/insertar', async (req, res) => {
    try {
        const { nombre, email, juego, asunto, mensaje } = req.body;
        
        // Crear la conexión a la base de datos
        const pool = await sql.connect(dbConfig);

        // Query para insertar los datos
        const query = `
            INSERT INTO contactos (nombre, email, juego, asunto, mensaje)
            VALUES (@nombre, @email, @juego, @asunto, @mensaje)
        `;

        // Ejecutar la consulta con los parámetros
        await pool.request()
            .input('nombre', sql.NVarChar, nombre)
            .input('email', sql.NVarChar, email)
            .input('juego', sql.NVarChar, juego)
            .input('asunto', sql.NVarChar, asunto)
            .input('mensaje', sql.NVarChar, mensaje)
            .query(query);

        // Cerrar la conexión
        await pool.close();

        res.status(200).send('Registro insertado correctamente.');
    } catch (error) {
        console.error('Error al insertar el registro:', error);
        res.status(500).send('Error al insertar el registro.');
    }
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
