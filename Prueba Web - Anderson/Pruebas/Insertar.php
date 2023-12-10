<?php
$serverName = "svcorders.database.windows.net";
$connectionOptions = array(
    "Database" => "Orddw",
    "Uid" => "ordersuser",
    "PWD" => "userorders@2023"
);

// Establecer la conexión
$conn = sqlsrv_connect($serverName, $connectionOptions);

if (!$conn) {
    die("Conexión fallida: " . print_r(sqlsrv_errors(), true));
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $juego = $_POST['juego'];
    $asunto = $_POST['asunto'];
    $mensaje = $_POST['mensaje'];

    $sql = "INSERT INTO contactos (nombre, email, juego, asunto, mensaje) VALUES (?, ?, ?, ?, ?)";

    $params = array($nombre, $email, $juego, $asunto, $mensaje);
    $stmt = sqlsrv_query($conn, $sql, $params);

    if ($stmt) {
        echo "Registro insertado correctamente.";
    } else {
        echo "Error al insertar el registro: " . print_r(sqlsrv_errors(), true);
    }
}

// Cerrar conexión
sqlsrv_close($conn);
?>
