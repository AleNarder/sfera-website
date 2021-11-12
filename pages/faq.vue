<template>
  <div>
    <section-hero-alt :title="title" />
    <v-container
      class="d-flex align-center flex-column pa-12"
      style="max-width: min(100%, 1200px)"
    >
      <v-row v-for="(card, i) of cards" :key="i">
        <v-col>
          <base-info-card v-bind="card" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data: () => ({
    title: 'Domande e risposte',
    cards: [
      {
        title: 'Come posso contattare lo studio?',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur distinctio dignissimos quasi amet, delectus eos ducimus debitis est quos? Tenetur inventore omnis corrupti reiciendis, at optio harum vero nihil quos?',
      },
      {
        title: 'Come posso avere un ricevimento?',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur distinctio dignissimos quasi amet, delectus eos ducimus debitis est quos? Tenetur inventore omnis corrupti reiciendis, at optio harum vero nihil quos?',
      },
      {
        title: 'Come posso fissare un appuntamento?',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur distinctio dignissimos quasi amet, delectus eos ducimus debitis est quos? Tenetur inventore omnis corrupti reiciendis, at optio harum vero nihil quos?',
      },
      {
        title: 'Posso chiedere informazioni via email?',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur distinctio dignissimos quasi amet, delectus eos ducimus debitis est quos? Tenetur inventore omnis corrupti reiciendis, at optio harum vero nihil quos?',
      },
      {
        title: 'Come posso essere aggiornato sul mio immobile?',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur distinctio dignissimos quasi amet, delectus eos ducimus debitis est quos? Tenetur inventore omnis corrupti reiciendis, at optio harum vero nihil quos?',
      },
      {
        title: 'Come posso avere la situazione coontabile?',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur distinctio dignissimos quasi amet, delectus eos ducimus debitis est quos? Tenetur inventore omnis corrupti reiciendis, at optio harum vero nihil quos?',
      },
    ],
  }),
}
</script>
