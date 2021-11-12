<template>
  <v-theme-provider dark>
    <base-section id="info-alt" class="grey darken-4">
      <v-container>
        <v-row>
          <v-col cols="12" md="5">
            <base-img
              :src="require('@/assets/sfera-logo.png')"
              max-width="80px"
              class="mb-6"
            />

            <base-business-contact />
          </v-col>

          <v-col class="text-center hidden-sm-and-down" cols="2">
            <v-divider vertical />
          </v-col>

          <v-col cols="12" md="5">
            <base-contact-form />
          </v-col>
        </v-row>
      </v-container>
    </base-section>
  </v-theme-provider>
</template>

<script>
export default {
  name: 'BaseFooter',
}
</script>
