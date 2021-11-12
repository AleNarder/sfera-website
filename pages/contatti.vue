<template>
  <div>
    <section-hero-alt :title="title" />
    <v-container class="pa-12" :fluid="$vuetify.breakpoint.mdAndDown">
      <base-title>Resta in contatto con noi</base-title>
      <base-divider color="primary" />
      <v-row>
        <v-col
          :cols="$vuetify.breakpoint.mdAndUp ? 5 : 12"
          class="d-flex flex-column justify-center"
        >
          <base-business-contact :dark="false" />
        </v-col>
        <v-col
          v-if="$vuetify.breakpoint.mdAndUp"
          cols="2"
          class="d-flex justify-center"
        >
          <v-divider vertical />
        </v-col>
        <v-col :cols="$vuetify.breakpoint.mdAndUp ? 5 : 12">
          <base-img
            :src="require('@/assets/mappa.jpg')"
            min-width="300px"
            max-height="500px"
            contain
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data: () => ({
    title: 'Contatti',
  }),
}
</script>
