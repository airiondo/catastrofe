import Vue from 'vue';
import Router from 'vue-router';
import rc from './components/rc.vue';
import StreetNumber from './components/StreetNumber.vue';
import PolygonParcel from './components/PolygonParcel.vue';
import CoordsGpsDec from './components/CoordsGpsDec.vue';
import CoordsGpsGms from './components/CoordsGpsGms.vue';
import CoordsGpsUtm from './components/CoordsGpsUtm.vue';
import Cru from './components/Cru.vue';

Vue.use(Router);

export default new Router({
  mode: 'abstract',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'rc',
      component: rc,
    },
    {
      path: '/StreetNumber',
      name: 'StreetNumber',
      component: StreetNumber,
    },
    {
      path: '/PolygonParcel',
      name: 'PolygonParcel',
      component: PolygonParcel,
    },
    {
      path: '/CoordsGpsDec',
      name: 'CoordsGpsDec',
      component: CoordsGpsDec,
    },
    {
      path: '/CoordsGpsGms',
      name: 'CoordsGpsGms',
      component: CoordsGpsGms,
    },
    {
      path: '/CoordsGpsUtm',
      name: 'CoordsGpsUtm',
      component: CoordsGpsUtm,
    },
    {
      path: '/Cru',
      name: 'Cru',
      component: Cru,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
