# Negozio didattico

Progetto locale con Vue 3, Vue Router, Tailwind CSS v4, PHP e MySQL.

## Avvio con XAMPP

1. Avviare Apache e MySQL dal pannello XAMPP.
2. Importare `db/schema.sql` tramite phpMyAdmin oppure con:

   ```powershell
   C:\xampp\mysql\bin\mysql.exe -u root < db\schema.sql
   ```

3. Aprire `http://localhost/Progetto_Web/`.

Le credenziali didattiche predefinite sono `root` senza password e possono essere modificate in `api/connessione.php`.
