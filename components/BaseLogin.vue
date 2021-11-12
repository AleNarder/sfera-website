<template>
  <v-menu
    id="login"
    v-model="menu"
    :close-on-content-click="false"
    bottom
    left
    max-width="90%"
    min-width="275"
    offset-x
    offset-y
    :origin="$vuetify.breakpoint.mdAndUp ? 'top right' : 'bottom right'"
    transition="scale-transition"
  >
    <template v-slot:activator="{ attrs, on }">
      <v-card
        id="settings"
        class="py-2 px-4"
        color="#0000004D"
        dark
        flat
        :style="{
          position: 'fixed',
          top: $vuetify.breakpoint.mdAndUp ? '164px' : '90vh',
          right: '-35px',
        }"
        width="100"
        v-bind="attrs"
        v-on="on"
      >
        <v-icon large> fas fa-laptop-house </v-icon>
      </v-card>
    </template>

    <v-card class="pa-3" max-width="300px">
      <base-title align="center" title="Gestione web" space="0" />
      <base-section-separator class="my-3" />
      <v-card-text>
        <base-body
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          eos non commodi rem a itaque blanditiis eum unde dolorem hic quae sed
          illo, corporis ratione minima accusamus at iusto quas.</base-body
        >

        <div class="text-center">
          <base-btn
            :tile="false"
            href="https://alfred.amministro.io"
            target="_blank"
            rounded
            @click="menu = false"
            color="#E9540D"
          >
            <span class="white--text">Accedi</span>
          </base-btn>
        </div>
      </v-card-text>
    </v-card>
  </v-menu>
</template>

<script>
export default {
  name: 'HomeSettings',

  data() {
    return {
      menu: false,
    }
  },
}
</script>
<style>
#login,
#settings {
  z-index: 100;
}
</style>
