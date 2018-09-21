<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      app
    >
      <v-toolbar flat>
          <v-list>
            <v-list-tile>
              <v-list-tile-title class="title blue--text" mr-1>
                Opciones
              </v-list-tile-title>
            </v-list-tile>
          </v-list>
      </v-toolbar>
      
      <v-divider></v-divider>

      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="item.title"
          :to="item.path"
          @click=""
        >
         <v-list-tile-action>
              <v-icon v-if="item.icon" color="primary">{{item.icon}}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title v-text="item.title"></v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      :clipped-left="clipped"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="blue--text"></v-toolbar-side-icon>
      
      
      <v-toolbar-title v-text="title" class="blue--text"></v-toolbar-title>
      <v-spacer></v-spacer>
      
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>AIKODE.ORG &copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import rc from './components/rc'
import StreetNumber from './components/StreetNumber'
import PolygonParcel from './components/PolygonParcel'
import CoordsGpsDec from './components/CoordsGpsDec'
import CoordsGpsGms from './components/CoordsGpsGms'
import CoordsGpsUtm from './components/CoordsGpsUtm'
import Cru from './components/Cru'

export default {
  name: 'App',
  components: {
    rc,
    StreetNumber,
    PolygonParcel,
    CoordsGpsDec,
    CoordsGpsGms,
    CoordsGpsUtm,
    Cru,

  },
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{
        icon: 'local_offer',
        title: 'RC',
        path: '/'},
        {
        icon: 'place',
        title: 'Calle/Número',
        path: '/StreetNumber'},
        {
        icon: 'beenhere',
        title: 'Polígono/Parcela',
        path: '/PolygonParcel'},
        {
        icon: 'my_location',
        title: 'Coordenadas',
        path: '/CoordsGpsDec'},
        {
        icon: 'map',
        title: 'CRU',
        path: '/Cru'}
        ],
      
      title: 'BÚSQUEDA CATASTRAL'
    }
  }
}
</script>
