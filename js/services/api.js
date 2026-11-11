const API_BASE = "./api";

async function richiesta(percorso, opzioni = {}) {
    const configurazione = {
        method: "GET",
        credentials: "same-origin",
        headers: { Accept: "application/json" },
        ...opzioni
    };

    if (configurazione.body && !(configurazione.body instanceof FormData)) {
        configurazione.headers["Content-Type"] = "application/json";
        configurazione.body = JSON.stringify(configurazione.body);
    }

    let risposta;

    try {
        risposta = await fetch(`${API_BASE}/${percorso}`, configurazione);
    } catch {
        throw new Error("Impossibile contattare il server.");
    }

    let dati;

    try {
        dati = await risposta.json();
    } catch {
        throw new Error("Il server ha restituito una risposta non valida.");
    }

    if (!risposta.ok) {
        throw new Error(dati.errore || `Errore HTTP ${risposta.status}.`);
    }

    return dati;
}

export function get(percorso) {
    return richiesta(percorso);
}

export function post(percorso, dati) {
    return richiesta(percorso, { method: "POST", body: dati });
}

export function patch(percorso, dati) {
    return richiesta(percorso, { method: "PATCH", body: dati });
}

export function remove(percorso) {
    return richiesta(percorso, { method: "DELETE" });
}

export function caricaProdotti() {
    return get("get-prodotti.php");
}
