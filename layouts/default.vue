<template>
  <v-app>
    <base-app-bar></base-app-bar>

    <v-main>
      <base-login />
      <v-container fluid class="pa-0">
        <nuxt />
      </v-container>
    </v-main>
    <base-footer />
  </v-app>
</template>

