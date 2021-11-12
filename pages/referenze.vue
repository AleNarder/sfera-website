<template>
  <div>
    <section-hero-alt :title="title" />
    <v-container class="pa-12">
      <base-title title="Assistiamo fin dalla loro costituzione" space="1" />
      <base-divider color="primary" />
      <v-row>
        <v-col
          v-for="i in 5"
          :key="i"
          :cols="$vuetify.breakpoint.mdAndUp ? 4 : 12"
        >
          <base-info
            :src="require(`@/assets/golf.jpg`)"
            title="Cond. JESOLO VILLAGE"
            text="Lorem ipusm dolor set"
            :info="false"
          />
        </v-col>
      </v-row>
      <base-title title="Assistiamo inoltre" space="1" />
      <base-divider color="primary" />
      <v-row>
        <v-col
          v-for="i in 2"
          :key="i"
          :cols="$vuetify.breakpoint.mdAndUp ? 4 : 12"
        >
          <base-info
            :src="require(`@/assets/golf.jpg`)"
            title="Cond. JESOLO VILLAGE"
            text="Lorem ipusm dolor set"
            :info="false"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    title: 'Referenze',
  }),
}
</script>
