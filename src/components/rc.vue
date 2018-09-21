<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      
      <v-flex xs12 mt-3>
          <div>
            <h3 class="headline mb-0">Búsqueda por Ref. Catastral</h3>
          </div>
      </v-flex>
      <v-flex xs12 mt-3>
          <v-text-field 
                xs10
                label="Referencia catastral"

                prepend-icon="search"
                single-line
                v-validate="'required|max:40'"
                v-model="rc"
                :counter="40"
                :error-messages="errors.collect('rc')"
                data-vv-name="rc"
                required
                >
            </v-text-field>
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

    Vue.use(VeeValidate)

    export default {
      name: 'rc',
      $_veeValidate: {
            validator: 'rc_val'
        },

        data: () => ({
              rc: '',

              dictionary: {
                custom: {
                  rc: {
                    required: () => 'El campo referencia catastral no puede estar vacio',
                    max: 'El campo referencia catastral no puede superar los 40 caracteres'
                    // custom messages
                  }
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
                this.rc = ''
                this.$validator.reset()
              }
            }
        }
</script>

