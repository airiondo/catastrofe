<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      
      <div>
        <h3 class="headline mb-0">Búsqueda por Polígono/Parcela</h3>
      </div>
      
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

        <v-flex xs4 mr-4>
            <v-text-field
              v-model="polygon"

              :counter="4"
              label="Polígono"
              required
            ></v-text-field>
        </v-flex>
        <v-flex xs4 ml-4>
            <v-text-field
              v-model="parcel"

              :counter="4"
              label="Parcela"
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

    Vue.use(VeeValidate);

    export default {
        name: 'PolygonParcel',
        $_veeValidate: {
        validator: 'coords_val'
    },

    data: () => ({
          county: '',
          city: '',
          polygon: '',
          parcel: '',
          
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
              polygon: {
                required: () => 'El campo polígono no puede estar vacio',
                max: 'El campo polígono o puede superar los 4 caracteres'
              },
              parcel: {
                required: () => 'El campo parcela no puede estar vacio',
                max: 'El campo parcela o puede superar los 4 caracteres'
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
          clear () {
            this.county = ''
            this.city = ''
            this.street = ''
            this.polygon = ''
            this.parcel = ''
            this.$validator.reset()
          }
        }
    }
    
</script>
