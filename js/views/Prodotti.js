import { caricaProdotti } from "../services/api.js";
import { ProdottoCard } from "../components/ProdottoCard.js";

export const Prodotti = {
    components: { ProdottoCard },
    data() {
        return {
            prodotti: [],
            ricerca: "",
            ordinamento: "nome",
            caricamento: true,
            errore: ""
        };
    },
    computed: {
        prodottiVisibili() {
            const testo = this.ricerca.trim().toLowerCase();
            const filtrati = testo
                ? this.prodotti.filter(prodotto =>
                    prodotto.nome.toLowerCase().includes(testo) ||
                    prodotto.descrizione.toLowerCase().includes(testo)
                )
                : [...this.prodotti];

            return filtrati.sort((a, b) => {
                if (this.ordinamento === "prezzo-crescente") return Number(a.prezzo) - Number(b.prezzo);
                if (this.ordinamento === "prezzo-decrescente") return Number(b.prezzo) - Number(a.prezzo);
                return a.nome.localeCompare(b.nome, "it");
            });
        }
    },
    async mounted() {
        try {
            this.prodotti = await caricaProdotti();
        } catch (errore) {
            this.errore = errore.message;
        } finally {
            this.caricamento = false;
        }
    },
    template: `
        <section aria-labelledby="titolo-prodotti">
            <h1 id="titolo-prodotti" class="text-3xl font-bold text-slate-950 sm:text-4xl">Prodotti</h1>

            <div class="my-6 grid gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:grid-cols-2">
                <div>
                    <label for="ricerca" class="mb-1 block font-medium">Cerca un prodotto</label>
                    <input id="ricerca" v-model="ricerca" type="search" class="w-full rounded-md border border-slate-400 px-3 py-2 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200">
                </div>
                <div>
                    <label for="ordinamento" class="mb-1 block font-medium">Ordina</label>
                    <select id="ordinamento" v-model="ordinamento" class="w-full rounded-md border border-slate-400 bg-white px-3 py-2 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200">
                        <option value="nome">Nome</option>
                        <option value="prezzo-crescente">Prezzo crescente</option>
                        <option value="prezzo-decrescente">Prezzo decrescente</option>
                    </select>
                </div>
            </div>

            <p v-if="caricamento" role="status" class="rounded-lg bg-white p-5 text-center shadow-sm">Caricamento prodotti...</p>
            <p v-else-if="errore" role="alert" class="rounded-lg bg-red-50 p-5 text-red-800">{{ errore }}</p>
            <p v-else-if="!prodottiVisibili.length" class="rounded-lg bg-white p-5">Nessun prodotto trovato.</p>
            <div v-else class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                <prodotto-card v-for="prodotto in prodottiVisibili" :key="prodotto.id" :prodotto="prodotto"></prodotto-card>
            </div>
        </section>
    `
};
