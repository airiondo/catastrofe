<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      
      <div>
        <h3 class="headline mb-0">Búsqueda por Calle/Número</h3>
      </div>
      
      <v-flex xs12>
          <v-autocomplete
            v-model="city"
            :items="counties"
            label="Provincia"
            persistent-hint
            prepend-icon="location_city"
          >
          </v-autocomplete>
      </v-flex>
      
      <v-flex xs12>
        <v-flex xs8>
            <v-text-field
              v-model="county"

              :counter="40"
              label="Provincia"
              required

            ></v-text-field>
        </v-flex>
      </v-flex>

      <v-flex xs12>
        <v-flex xs8>
            <v-text-field
              v-model="city"

              :counter="40"
              label="Localidad"
              required

            ></v-text-field>
        </v-flex>
      </v-flex>

        <v-flex xs10>
            <v-text-field
              v-model="street"

              :counter="40"
              label="Calle/Vía/Barrio..."
              required
            ></v-text-field>
        </v-flex>
        <v-flex xs2>
            <v-text-field
              v-model="housenumber"

              :counter="4"
              label="Número"
              required

            ></v-text-field>
        </v-flex>


      <v-flex  :key="block" xs3>
        <v-text-field
          v-model="block"

          :counter="4"
          label="Bloque"
          required
        ></v-text-field>
      </v-flex>

      <v-flex  :key="stair" xs3>
        <v-text-field
          v-model="stair"

          :counter="4"
          label="Escalera"
          required
        ></v-text-field>
      </v-flex>

      <v-flex  :key="floor" xs3>
        <v-text-field
          v-model="floor"

          :counter="4"
          label="Planta"
          required
        ></v-text-field>
      </v-flex>

      <v-flex  :key="door" xs3>
        <v-text-field
          v-model="door"

          :counter="4"
          label="Puerta"
          required
        ></v-text-field>
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
    import axios from 'axios';
    
    Vue.use(VeeValidate)

    export default {
        name: 'Coords',
        $_veeValidate: {
        validator: 'coords_val'
    },

    data: () => ({
          county: '',
          counties: [],
          city: '',
          street: '',
          housenumber: '',
          block: '',
          stair: '',
          floor: '',
          door: '',
          
          dictionary: {
            custom: {
              county: {
                required: () => 'El campo provincia no puede estar vacio',
                max: 'El campo provincia o puede superar los 40 caracteres'
                // custom messages
              },
              city: {
                required: () => 'El campo localidad no puede estar vacio',
                max: 'El campo localidad o puede superar los 40 caracteres'
              },
              street: {
                required: () => 'El campo calle/via/barrio... no puede estar vacio',
                max: 'El campo barrio o puede superar los 40 caracteres'
              },
              housenumber: {
                required: () => 'El campo número no puede estar vacio',
                max: 'El campo número o puede superar los 4 caracteres'
              },
              block: {
                required: () => 'El campo bloque no puede estar vacio',
                max: 'El campo bloque o puede superar los 4 caracteres'
              },
              stair: {
                required: () => 'El campo escalera no puede estar vacio',
                max: 'El campo escalera o puede superar los 4 caracteres'
              },
              floor: {
                required: () => 'El campo planta no puede estar vacio',
                max: 'El campo planta o puede superar los 4 caracteres'
              },
              door: {
                required: () => 'El campo puerta no puede estar vacio',
                max: 'El campo puerta o puede superar los 4 caracteres'
              }
            }
          }
        }),

        mounted () {
        
          this.$validator.localize('es', this.dictionary)
            
            axios('http://www1.sedecatastro.gob.es/CYCBienInmueble/OVCBusqueda.aspx/ObtenerProvincias', {
              method: 'POST',
                 mode: 'no-cors',
              headers: {
                'Access-Control-Allow-Origin': 'https://www1.sedecatastro.gob.es',
                'Content-Type': 'application/json',
                'Data': "{ 'filtro': '" + this.county + "'}",
                'Data-Type': "json",
              },
              withCredentials: true,
              credentials: 'same-origin',
            }).then(response => {
                this.counties = response.data
            })
            
        },

        methods: {
          get_data () {
            let result = this.$validator.validateAll()
          },
          get_carto () {
            let result = this.$validator.validateAll()
          },
          clear () {
            this.county = ''
            this.city = ''
            this.street = ''
            this.housenumber = ''
            this.block = ''
            this.stair = '',
            this.floor = '',
            this.door = '',
            this.$validator.reset()
          }
        }
    }
    
</script>
