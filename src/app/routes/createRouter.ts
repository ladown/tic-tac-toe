import { createRouter, createWebHistory } from 'vue-router';
import { PageNames } from '~shared/routes';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: PageNames.Home,
      component: () => import('~pages/home/ui/HomePage.vue')
    }
  ]
});
