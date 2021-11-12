<template>
  <div>
    <section-hero-alt :title="title" />
    <v-container class="pa-12">
      <v-row v-if="$vuetify.breakpoint.mdAndUp">
        <v-col cols="5">
          <v-container>
            <v-row>
              <v-col v-for="(_, i) in left" :key="i" cols="12">
                <base-staff />
                <v-divider v-if="i < left.length - 1" />
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-col class="d-flex justify-center" cols="2">
          <v-divider vertical />
        </v-col>
        <v-col cols="5">
          <v-container>
            <v-row>
              <v-col v-for="(_, i) in right" :key="i" cols="12">
                <base-staff />
                <v-divider v-if="i < right.length - 1" />
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
      <v-row v-else>
        <v-col v-for="(_, i) in items" :key="i" cols="12">
          <base-staff />
          <v-divider v-if="i < items.length - 1" class="mb-6" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data: () => ({
    items: [0, 0, 0, 0, 0, 0],
    title: 'Staff',
  }),
  computed: {
    left() {
      return this.items.filter((e, i) => i % 2 === 0)
    },
    right() {
      return this.items.filter((e, i) => i % 2 === 1)
    },
  },
}
</script>
