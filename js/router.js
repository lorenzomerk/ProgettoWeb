import { Home } from "./views/Home.js";
import { Prodotti } from "./views/Prodotti.js";
import { NonTrovata } from "./views/NonTrovata.js";

export const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: [
        { path: "/", name: "home", component: Home },
        { path: "/prodotti", name: "prodotti", component: Prodotti },
        { path: "/:pathMatch(.*)*", name: "non-trovata", component: NonTrovata }
    ],
    scrollBehavior() {
        return { top: 0 };
    }
});
