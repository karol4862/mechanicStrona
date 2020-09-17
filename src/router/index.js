import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Diagnostic from '../views/Diagnostic.vue';
import Filter from '../views/Filter.vue';
import Airbag from '../views/Airbag.vue';
import Mechanika from '../views/Mechanika.vue';
import SkrzyniaBiegow from '../views/SkrzyniaBiegow.vue';
import Immobilaizery from '../views/Immobilaizery.vue';
import Oferta from '../views/Oferta.vue';
import Kontakt from '../views/Kontakt.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/diagnostyka',
    name: 'Diagnostic',
    component: Diagnostic,
  },
  {
    path: '/filtry',
    name: 'Filter',
    component: Filter,
  },
  {
    path: '/airbag',
    name: 'Airbag',
    component: Airbag,
  },
  {
    path: '/mechanika',
    name: 'Mechanika',
    component: Mechanika,
  },
  {
    path: '/skrzyniabiegow',
    name: 'SkrzyniaBiegow',
    component: SkrzyniaBiegow,
  },
  {
    path: '/immobilaizery',
    name: 'Immobilaizery',
    component: Immobilaizery,
  },
  {
    path: '/oferta',
    name: 'Oferta',
    component: Oferta,
  },
  {
    path: '/kontakt',
    name: 'Kontakt',
    component: Kontakt,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
