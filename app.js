const Home = {
    template: `
        <section class="rounded bg-white p-6 shadow">
            <h1 class="text-3xl font-bold">Negozio didattico</h1>
            <p class="mt-2">Progetto base con Vue 3, Vue Router, Tailwind CSS e PHP.</p>
        </section>
    `
};

const Prodotti = {
    data() {
        return {
            prodotti: [],
            errore: ''
        };
    },
    async mounted() {
        try {
            const risposta = await fetch('api/get-prodotti.php');

            if (!risposta.ok) {
                throw new Error('Errore nel caricamento');
            }

            this.prodotti = await risposta.json();
        } catch (errore) {
            this.errore = errore.message;
        }
    },
    template: `
        <section>
            <h1 class="mb-4 text-3xl font-bold">Prodotti</h1>
            <p v-if="errore" class="text-red-600">{{ errore }}</p>
            <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <article v-for="prodotto in prodotti" :key="prodotto.id" class="rounded bg-white p-4 shadow">
                    <h2 class="text-xl font-semibold">{{ prodotto.nome }}</h2>
                    <p class="mt-2">{{ prodotto.descrizione }}</p>
                    <p class="mt-3 font-bold">€ {{ Number(prodotto.prezzo).toFixed(2) }}</p>
                </article>
            </div>
        </section>
    `
};

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/prodotti', component: Prodotti }
    ]
});

Vue.createApp({})
    .use(router)
    .mount('#app');
