import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../views/LandingPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: LandingPage,
      meta: {
        title: "Home - Autocredit",
        metaTags: [
          {
            name: "description",
            content: "Consultas e análise de credito veicular e empresarial.",
          },
          {
            property: "og:description",
            content: "Consultas e análise de credito veicular e empresarial.",
          },
          {
            property: "og:title",
            content: "Home",
            vmid: "og:title",
          },
          {
            property: "og:title",
            content: "Serviços",
            vmid: "og:title",
          },
          {
            property: "og:title",
            content: "Clientes",
            vmid: "og:title",
          },
          {
            property: "og:title",
            content: "Sobre",
            vmid: "og:title",
          },
          {
            property: "og:title",
            content: "Sobre",
            vmid: "og:title",
          },
        ],
      },
    },
  ],
});

export default router;
