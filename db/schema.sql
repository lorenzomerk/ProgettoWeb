CREATE DATABASE IF NOT EXISTS negozio_web
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;

USE negozio_web;

CREATE TABLE IF NOT EXISTS prodotti (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descrizione VARCHAR(255) NOT NULL,
    prezzo DECIMAL(10, 2) UNSIGNED NOT NULL
);

INSERT INTO prodotti (id, nome, descrizione, prezzo) VALUES
    (1, 'Quaderno', 'Quaderno a righe', 3.50),
    (2, 'Penna', 'Penna a sfera blu', 1.20),
    (3, 'Zaino', 'Zaino per il tempo libero', 29.90)
ON DUPLICATE KEY UPDATE
    nome = VALUES(nome),
    descrizione = VALUES(descrizione),
    prezzo = VALUES(prezzo);
