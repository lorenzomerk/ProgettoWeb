export const ProdottoCard = {
    props: {
        prodotto: { type: Object, required: true }
    },
    computed: {
        prezzoFormattato() {
            return new Intl.NumberFormat("it-IT", {
                style: "currency",
                currency: "EUR"
            }).format(Number(this.prodotto.prezzo));
        }
    },
    template: `
        <article class="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <h2 class="text-xl font-bold text-slate-950">{{ prodotto.nome }}</h2>
            <p class="mt-3 flex-1 leading-7 text-slate-600">{{ prodotto.descrizione }}</p>
            <p class="mt-5 text-lg font-bold text-blue-700">{{ prezzoFormattato }}</p>
        </article>
    `
};
