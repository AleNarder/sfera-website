<template>
  <div>
    <v-app-bar id="home-app-bar" app color="white" elevation="1" height="80">
      <base-img
        class="mr-3 hidden-xs-only"
        contain
        :src="require('@/assets/sfera-logo.png')"
        max-width="52"
        width="100%"
      />

      <base-img contain max-width="128" width="100%" />

      <v-spacer />

      <div>
        <v-tabs class="hidden-sm-and-down" optional>
          <v-tab
            v-for="({ name, path }, i) in items"
            :key="i"
            :to="{ path }"
            :exact="name === 'Home'"
            :ripple="false"
            active-class="text--primary"
            class="font-weight-bold"
            min-width="96"
            text
          >
            {{ name }}
          </v-tab>
        </v-tabs>
      </div>

      <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer" />
    </v-app-bar>

    <base-drawer v-model="drawer" :items="items" />
  </div>
</template>

<script>
export default {
  name: 'AppBar',

  data: () => ({
    drawer: null,
    items: [
      {
        name: 'Home',
        path: '/',
      },
      {
        name: 'Servizi',
        path: '/servizi',
      },
      {
        name: 'Staff',
        path: '/staff',
      },
      {
        name: 'Domande e Risposte',
        path: '/qa',
      },
      {
        name: 'Referenze',
        path: '/referenze',
      },
      {
        name: 'Contatti',
        path: '/contatti',
      },
    ],
  }),
}
</script>

<style lang="sass">
#home-app-bar
  .v-tabs-slider
    max-width: 24px
    margin: 0 auto

    .v-tab
      &::before
        display: none
</style>
