<?php

header('Content-Type: application/json; charset=utf-8');

$host = 'localhost';
$database = 'negozio_web';
$utente = 'root';
$password = '';

try {
    $pdo = new PDO(
        "mysql:host=$host;dbname=$database;charset=utf8mb4",
        $utente,
        $password,
        [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
    );

    $query = $pdo->query('SELECT id, nome, descrizione, prezzo FROM prodotti');
    echo json_encode($query->fetchAll(PDO::FETCH_ASSOC));
} catch (PDOException $errore) {
    http_response_code(500);
    echo json_encode(['errore' => 'Errore di connessione al database']);
}
