<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
    
        <v-flex xs12 mt-3>
          <div>
            <h3 class="headline mb-0">Búsqueda por código registral único</h3>
          </div>
        </v-flex>
        <v-flex xs12 mt-3>
            <v-text-field
                label="Código registral único"

                prepend-icon="search"
                single-line
                v-validate="'required|max:40'"
                v-model="rc"
                :counter="40"
                :error-messages="errors.collect('cru')"
                data-vv-name="cru"
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

    Vue.use(VeeValidate);

    export default {
      name: 'Crue',
      $_veeValidate: {
            validator: 'cru_val'
        },

        data: () => ({
              rc: '',

              dictionary: {
                custom: {
                  cru: {
                    required: () => 'El campo código registral único no puede estar vacio',
                    max: 'El campo código registral único no puede superar los 40 caracteres'
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
                this.cru = ''
                this.$validator.reset()
              }
            }
        }
</script>

