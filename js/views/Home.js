export const Home = {
    template: `
        <section class="rounded-2xl bg-white p-6 shadow-sm sm:p-10">
            <p class="text-sm font-bold uppercase tracking-widest text-blue-700">Tecnologie Web</p>
            <h1 class="mt-2 text-3xl font-bold text-slate-950 sm:text-5xl">Negozio didattico</h1>
            <p class="mt-5 max-w-2xl text-lg leading-8 text-slate-600">Un progetto essenziale costruito con Vue 3, Vue Router, Tailwind CSS v4, PHP e MySQL.</p>
            <router-link to="/prodotti" class="mt-7 inline-block rounded-md bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700">Scopri i prodotti</router-link>
        </section>
    `
};
