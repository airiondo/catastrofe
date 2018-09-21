<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
    
      <v-card-title primary-title>
          <div>
            <h4 class="headline mb-0">Búsqueda por latitud/longitud:</h4>
          </div>
      </v-card-title>
      
      <v-flex xs12>
        <v-flex xs12>
            <v-select
              :items="coords_items"
              label=""
              v-model= 'e1'
              @change=changeRoute()
            ></v-select>
        </v-flex>
      </v-flex>
      
      <v-flex xs12>
        <v-flex xs12>
            <v-select
              :items="utm_items"
              label="HUSO"
              v-model= 'e1'
              
            ></v-select>
        </v-flex>
      </v-flex>
      
      <v-flex xs12>
            
        <v-layout row wrap xs12>
            <v-flex xs3>
                <v-text-field
                  v-model="coord_x"

                  :counter="30"
                  label="X"
                  required
                ></v-text-field>
            </v-flex>
            <v-flex xs3>
                <v-text-field
                  v-model="coord_y"

                  :counter="30"
                  label="Y"
                  required

                ></v-text-field>
            </v-flex>
        </v-layout>
            
        </v-flex>
        
        <v-flex xs12 mt-3>
      
          <v-btn @click="get_data">Datos</v-btn>
          <v-btn @click="get_carto">Cartografía</v-btn>
          
      </v-flex>
        
    </v-layout>
  </v-container>
</template>

<script>
    
    import Vue from 'vue';
    import VeeValidate from 'vee-validate';

    Vue.use(VeeValidate);

    export default {
        name: 'CoordsGpsDec',
        $_veeValidate: {
        validator: 'coords_gps_val'
    },

    data: () => ({
          coord_x: '',
          coord_y: '',
          coords_items: ['Coordenadas GPS decimáles', 'Coordenadas GPS grados, minutos y segundos', 'UTM'],
          utm_items: ['UTM 29 ETRS89', 'UTM 30 ETRS89', 'UTM 31 ETRS89','UTM 28 WGS84 (ISLAS CANARIAS)'],
          e1: 'Coordenadas GPS decimáles',
          huso_sel: 'UTM 29 ETRS89',
          dictionary: {
            custom: {
              coord_x: {
                required: () => 'El campo x no puede estar vacio',
                max: 'El campo x no puede superar los 30 caracteres'
              },
              coord_y: {
                required: () => 'El campo y no puede estar vacio',
                max: 'El campo y no puede superar los 30 caracteres'
              }, 
            }
          }
        }),

        mounted () {
          this.$validator.localize('es', this.dictionary)
        },

        methods: {
          get_data () {
            let result = this.$validator.validateAll()
          },
          get_carto () {
            let result = this.$validator.validateAll()
          },
          changeRoute(){
                
                if (this.e1 === 'Coordenadas GPS decimáles'){
                    this.$router.push({ name: 'CoordsGpsDec'});
                };
                if (this.e1 === 'Coordenadas GPS grados, minutos y segundos'){
                    this.$router.push({ name: 'CoordsGpsGms'});
                };
                    
                if (this.e1 === 'UTM'){
                    this.$router.push({ name: 'CoordsGpsUtm'});
                };
                         
          },
          clear () {
            this.coord_x = ''
            this.coord_y = ''
            this.$validator.reset()
          }
        }
    }
    
</script>
