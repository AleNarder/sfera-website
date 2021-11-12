<template>
  <v-theme-provider :dark="dark">
    <div>
      <base-info-card :title="title" color="primary">
        <slot />
      </base-info-card>

      <template v-for="({ icon, text, title: t }, i) in business">
        <base-avatar-card
          :key="i"
          :icon="icon"
          :title="!dense ? t : undefined"
          color="transparent"
          horizontal
          :divider="false"
          space="0"
          :dark="dark"
        >
          <!-- Do not use v-html for user -->
          <!-- provided values -->
          <div v-html="text" />
        </base-avatar-card>

        <v-divider
          v-if="i + 1 !== business.length"
          :key="`divider-${i}`"
          class="my-2"
        />
      </template>
    </div>
  </v-theme-provider>
</template>

<script>
export default {
  name: 'BaseBusinessContact',

  props: {
    dark: {
      type: Boolean,
      default: true,
    },
    dense: Boolean,
    title: String,
  },

  data: () => ({
    business: [
      {
        icon: 'fas fa-map-marker-alt',
        title: 'INDIRIZZO',
        text: 'Piazza Tommaseo 10 - 30016 - Jesolo',
      },
      {
        icon: 'fas fa-mobile-alt',
        title: 'Contatti',
        text: 'Telefono: 0421382188<br>Fax: 0421386182',
      },
      {
        icon: 'fas fa-envelope',
        title: 'Email',
        text: 'condominio@grupposfera.it<br>certificata@pec.grupposfera.it',
      },
    ],
  }),
}
</script>
