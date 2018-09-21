<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
        
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
            <v-card>
                <v-card-title primary-title>
                  <div>
                    <h4 class="headline mb-0">Latitud(Norte)</h4>
                    
                  </div>
                </v-card-title>
                
                <v-layout row wrap xs12 pl-5>
                    <v-flex xs3>
                        <v-text-field
                          v-model="north_grades"

                          :counter="30"
                          label="Grados(norte)"
                          required
                        ></v-text-field>
                    </v-flex>
                    <v-flex xs3>
                        <v-text-field
                          v-model="north_minutes"

                          :counter="30"
                          label="Minutos(norte)"
                          required

                        ></v-text-field>
                    </v-flex>
                    <v-flex xs3>
                        <v-text-field
                          v-model="north_seconds"

                          :counter="30"
                          label="Segundos(norte)"
                          required

                        ></v-text-field>
                    </v-flex>
                </v-layout>
                
                <v-flex xs12 mb-2 mt-2>
                    <hr>
                </v-flex>
                
                <v-card-title primary-title>
                  <div>
                    <h4 class="headline mb-0">Longitud</h4>
                  </div>
                </v-card-title>
                
                <v-layout row wrap xs12 pl-5>
                
                <v-radio-group v-model="lonlat_rg" row >
                  <v-radio label="Este" value="este"></v-radio>
                  <v-radio label="Oeste" value="oeste"></v-radio>
                </v-radio-group>
                    
                </v-layout>
                
                <v-layout row wrap xs12 pl-5>
                    <v-flex xs3>
                        <v-text-field
                          v-model="grades"

                          :counter="30"
                          label="Grados"
                          required
                        ></v-text-field>
                    </v-flex>
                    <v-flex xs3>
                        <v-text-field
                          v-model="minutes"

                          :counter="30"
                          label="Minutos"
                          required

                        ></v-text-field>
                    </v-flex>
                    <v-flex xs3>
                        <v-text-field
                          v-model="seconds"

                          :counter="30"
                          label="Segundos"
                          required

                        ></v-text-field>
                    </v-flex>
                </v-layout>        
            </v-card>
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
        name: 'CoordsGpsGms',
        $_veeValidate: {
        validator: 'coords_gps_val'
    },

    data: () => ({
          north_grades: '',
          north_minutes: '',
          north_seconds: '',
          grades: '',
          minutes: '',
          seconds: '',
          latitude: '',
          longitud: '',
          lonlat_rg: 'este',
          coords_items: ['Coordenadas GPS decimáles', 'Coordenadas GPS grados, minutos y segundos', 'UTM'],
          e1: 'Coordenadas GPS grados, minutos y segundos', 
          dictionary: {
            custom: {
              north_grades: {
                required: () => 'El campo grados(norte)(norte) no puede estar vacio',
                max: 'El campo grados(norte) puede superar los 30 caracteres'
                // custom messages
              },
              north_minutes: {
                required: () => 'El campo minutos(norte) no puede estar vacio',
                max: 'El campo minutos(norte) no puede superar los 30 caracteres'
              },
              north_seconds: {
                required: () => 'El campo segundos(norte) no puede estar vacio',
                max: 'El campo segundos(norte) no puede superar los 30 caracteres'
              },
              grades: {
                required: () => 'El campo grados no puede estar vacio',
                max: 'El campo grados puede superar los 30 caracteres'
                // custom messages
              },
              minutes: {
                required: () => 'El campo minutos no puede estar vacio',
                max: 'El campo minutos no puede superar los 30 caracteres'
              },
              seconds: {
                required: () => 'El campo segundos no puede estar vacio',
                max: 'El campo segundos no puede superar los 30 caracteres'
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
            this.north_grades = ''
            this.north_minutes = ''
            this.north_seconds = ''
            this.grades = ''
            this.minutes = ''
            this.seconds = ''
            this.$validator.reset()
          }
        }
    }
    
</script>
