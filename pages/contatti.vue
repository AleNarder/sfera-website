<template>
  <div>
    <section-hero-alt :title="title" />
    <v-container class="pa-12">
      <base-title>Resta in contatto con noi</base-title>
      <base-divider color="primary" />
      <v-row>
        <v-col cols="5" class="d-flex flex-column justify-center">
          <base-business-contact :dark="false" />
        </v-col>
        <v-col cols="2" class="d-flex justify-center">
          <v-divider vertical />
        </v-col>
        <v-col cols="5">
          <base-img :src="require('@/assets/mappa.jpg')" />
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
