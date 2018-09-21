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
            
        <v-layout row wrap xs12>
            <v-flex xs3>
                <v-text-field
                  v-model="latitude"

                  :counter="30"
                  label="Latitud"
                  required
                ></v-text-field>
            </v-flex>
            <v-flex xs3>
                <v-text-field
                  v-model="longitude"

                  :counter="30"
                  label="Longitud"
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
          latitude: '',
          longitude: '',
          coords_items: ['Coordenadas GPS decimáles', 'Coordenadas GPS grados, minutos y segundos', 'UTM'],
          e1: 'Coordenadas GPS decimáles', 
          dictionary: {
            custom: {
              latitude: {
                required: () => 'El campo latitud no puede estar vacio',
                max: 'El campo latitud no puede superar los 30 caracteres'
              },
              longitude: {
                required: () => 'El campo longitud no puede estar vacio',
                max: 'El campo longitud no puede superar los 30 caracteres'
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
            this.latitud = ''
            this.longitud = ''
            this.$validator.reset()
          }
        }
    }
    
</script>
