<?php
$serverName = "svcorders.database.windows.net";
$connectionOptions = array(
    "Database" => "Orddw",
    "Uid" => "ordersuser",
    "PWD" => "userorders@2023"
);

// Intenta establecer la conexión
$conn = sqlsrv_connect($serverName, $connectionOptions);

if (!$conn) {
    die("Error de conexión: " . print_r(sqlsrv_errors(), true));
} else {
    echo "Conexión exitosa";
}

// Cierra la conexión
sqlsrv_close($conn);
?>
