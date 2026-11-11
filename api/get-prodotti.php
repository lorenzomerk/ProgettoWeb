<?php

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

require_once __DIR__ . '/connessione.php';

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    header('Allow: GET');
    http_response_code(405);
    echo json_encode(['errore' => 'Metodo non consentito.'], JSON_UNESCAPED_UNICODE);
    exit;
}

try {
    $pdo = creaConnessione();
    $query = $pdo->query('SELECT id, nome, descrizione, prezzo FROM prodotti ORDER BY nome');
    $prodotti = $query->fetchAll();

    foreach ($prodotti as &$prodotto) {
        $prodotto['id'] = (int) $prodotto['id'];
        $prodotto['prezzo'] = (float) $prodotto['prezzo'];
    }
    unset($prodotto);

    echo json_encode($prodotti, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
} catch (PDOException) {
    http_response_code(500);
    echo json_encode(['errore' => 'Errore durante l’accesso al database.'], JSON_UNESCAPED_UNICODE);
}
