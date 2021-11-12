<template>
  <v-theme-provider :dark="dark">
    <div>
      <base-img contain max-width="100%" width="100%" :src="src" />

      <base-title
        size="body-1"
        space="4"
        title="MULTI-PURPOSE THEME"
        weight="regular"
        class="mt-2"
      />
      <base-divider color="primary" />
      <base-body>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo pariatur
        quidem, quis modi iure nihil commodi suscipit, corporis dicta adipisci,
        voluptatum quia cupiditate. Nulla minus voluptatum nostrum deleniti,
        asperiores facere.
      </base-body>

      <base-btn class="mb-12" color="white" outlined v-if="info">
        More Info
      </base-btn>
    </div>
  </v-theme-provider>
</template>

<script>
import BaseDivider from './BaseDivider.vue'
export default {
  components: { BaseDivider },
  name: 'BaseInfo',

  props: {
    title: String,
    dark: Boolean,
    src: String,
    info: {
      type: Boolean,
      default: true,
    },
  },

  data: () => ({
    business: [
      {
        icon: 'mdi-map-marker-outline',
        title: 'Address',
        text: '8553 N. Beach St. Ste. 227<br>Fort Worth, Texas 76137',
      },
      {
        icon: 'mdi-cellphone',
        title: 'Phone',
        text: '01 (800) 433 744<br>01 (800) 433 633',
      },
      {
        icon: 'mdi-email',
        title: 'Email',
        text: 'john@vuetifyjs.com<br>heather@vuetifyjs.com',
      },
    ],
  }),
}
</script>
