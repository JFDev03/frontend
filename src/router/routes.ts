import { RouteRecordRaw } from 'vue-router';
import auth from './auth.routes';

const routes: RouteRecordRaw[] = [
  ...auth,
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
