<template>
  <v-app>
    <base-app-bar></base-app-bar>

    <v-main>
      <v-container
        fluid
        class="pa-0 d-flex flex-column"
        style="min-height: 100%"
      >
        <base-login />
        <nuxt />
      </v-container>
    </v-main>
    <base-footer />
  </v-app>
</template>

