<template>
  <div>
    <section-hero-alt :title="title" />
    <v-container class="pa-12">
      <base-title title="Assistiamo fin dalla loro costituzione" space="1" />
      <base-divider color="primary" />
      <v-row>
        <v-col
          v-for="({ name, description }, i) in coreBuildings"
          :key="i"
          :cols="$vuetify.breakpoint.mdAndUp ? 4 : 12"
        >
          <base-info
            :src="require(`@/assets/golf.jpg`)"
            :title="name"
            :text="description"
            :info="false"
          />
        </v-col>
      </v-row>
      <base-title title="Assistiamo inoltre" space="1" />
      <base-divider color="primary" />
      <v-row>
        <v-col
          v-for="({ name, description }, i) in otherBuildings"
          :key="i"
          :cols="$vuetify.breakpoint.mdAndUp ? 4 : 12"
        >
          <base-info
            :src="require(`@/assets/golf.jpg`)"
            :title="name"
            :text="description"
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
    coreBuildings: [
      {
        name: 'Cond. JESOLO LIDO VILLAGE',
        description:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente officia voluptates ducimus modi maxime ut, non ipsa. Facilis, exercitationem amet? Ratione dolorem ab nostrum quidem ipsa quas fuga deleniti maxime?',
      },
      {
        name: 'Cond. GOLF JESOLO VILLAGE',
        description:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente officia voluptates ducimus modi maxime ut, non ipsa. Facilis, exercitationem amet? Ratione dolorem ab nostrum quidem ipsa quas fuga deleniti maxime?',
      },
      {
        name: 'Cond. LAGUNA PARK',
        description:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente officia voluptates ducimus modi maxime ut, non ipsa. Facilis, exercitationem amet? Ratione dolorem ab nostrum quidem ipsa quas fuga deleniti maxime?',
      },
      {
        name: 'Cond. RESIDENCE PAPAYA ',
        description:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente officia voluptates ducimus modi maxime ut, non ipsa. Facilis, exercitationem amet? Ratione dolorem ab nostrum quidem ipsa quas fuga deleniti maxime?',
      },
      {
        name: 'Cond. EQUILIUM',
        description:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente officia voluptates ducimus modi maxime ut, non ipsa. Facilis, exercitationem amet? Ratione dolorem ab nostrum quidem ipsa quas fuga deleniti maxime?',
      },
      {
        name: 'Cond. EQUILIO B e C',
        description:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente officia voluptates ducimus modi maxime ut, non ipsa. Facilis, exercitationem amet? Ratione dolorem ab nostrum quidem ipsa quas fuga deleniti maxime?',
      },
      {
        name: 'Cond. Residence Smeraldo',
        description:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente officia voluptates ducimus modi maxime ut, non ipsa. Facilis, exercitationem amet? Ratione dolorem ab nostrum quidem ipsa quas fuga deleniti maxime?',
      },
    ],
    otherBuildings: [
      {
        name: 'XXX',
        description:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente officia voluptates ducimus modi maxime ut, non ipsa. Facilis, exercitationem amet? Ratione dolorem ab nostrum quidem ipsa quas fuga deleniti maxime?',
      },
    ],
  }),
}
</script>
