<template>
  <div>
    <section-hero-alt :title="title" />
    <v-container class="pa-12">
      <v-row v-if="$vuetify.breakpoint.mdAndUp">
        <v-col cols="5">
          <v-container>
            <v-row>
              <v-col v-for="(item, i) in left" :key="i" cols="12">
                <base-staff v-bind="item" />
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
              <v-col v-for="(item, i) in right" :key="i" cols="12">
                <base-staff v-bind="item" />
                <v-divider v-if="i < right.length - 1" />
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
      <v-row v-else>
        <v-col v-for="(item, i) in items" :key="i" cols="12">
          <base-staff v-bind="item" />
          <v-divider v-if="i < items.length - 1" class="mb-6" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data: () => ({
    items: [
      {
        name: 'Colla Enrico',
        job: 'Amministrore e titolare',
        education: [
          'Mi sono laureato in Economia Aziendale all’Università Ca’Foscari di Venezia.',
          'Sono stato impiegato per alcuni anni in una Start-Up per lo sviluppo di un progetto eCommerce.',
          'Nel 2002 ha frequentato il Corso ANACI, mi sono iscritto all’Associazione e ho costituito SFERA S.a.s. di Enrico Colla & C.',
          'Ogni anno, oltre alla crescita professionale legata all’esperienza sul campo, partecipo regolarmente a corsi di formazione e aggiornamento propedeutici al mantenimento dei requisiti imposti dal DM 140 per poter svolgere l’attività di amministratore di immobili.',
        ],
        tasks: [
          'In qualità di legale rappresentante della Società SFERA S.a.s. di Enrico Colla & C. ricopro i ruoli spettanti all’amministratore di condominio. Svolgo inoltre attività di consulenza nel campo delle amministrazioni di immobili.',
        ],
      },
      {
        name: 'Momentè Francesco',
        job: 'Area Fiscale',
        education: [
          'Ho conseguito la laurea triennale in Economia e Commercio all’Università Ca’Foscari di Venezia.',
          "Da inizio 2016 sono entrato a far parte della Società SFERA S.a.s. con l'obiettivo di mettere in pratica quanto studiato e crescere professionalmente arricchendo il mio bagaglio personale.",
          'Sempre nel 2016 ho frequentato il Corso per "Agenti d\'affari in mediazione" superando con esito positivo l\'esame presso la Camera di Commercio di Venezia Rovigo.',
        ],
        tasks: [
          "All'interno del Gruppo SFERA mi occupo principalmente della contabilità dei Condomini ed in particolare della redazione dei bilanci di condominio. Gestisco inoltre i rapporti con i condòmini e svolgo attività di affiancamento all'Amministratore nella preparazione di assemblee, consigli ed incontri.",
        ],
      },
      {
        name: 'Follador Tiziana',
        job: 'Area Segreteria',
        education: [
          "Ho conseguito il diploma in operatore gestione aziendale presso l'istituto professionale E. Cornaro.",
          'Ho lavorato presso uno Studio di amministrazioni condominiali di Jesolo dal 1997 al 2007.',
          "Nel 2015 ho frequentato, superando l'esame finale, il corso teorico e partico per amministratori immobiliari ANACI.",
          'Dal 2009 ad oggi sono impiegata presso la Sfera sas.',
        ],
        tasks: [
          'Mi occupo della gestione amministrativa, registrazione e pagamento fatture e adempimenti fiscali.',
        ],
      },
      {
        name: 'Vazzoler Aurora',
        job: 'Area Contabilità',
        education: [
          "Mi sono diplomata in Ragioneria all'Istituto L.B. Alberti di San Donà di Piave.",
          'Dal 2003 sono impiegata nel settore delle Amministrazioni Condominiali e dal 2017 presso Sfera sas dove ho potuto approfondire le mie conoscenze nel settore.',
        ],
        tasks: [
          'Mi occupo della gestione amministrativa, in particolare di invio corrispondenza, aggiornamento anagrafe condominiale, verifica incassi e solleciti di pagamento con la collaborazione del Legale per il recupero crediti dei Condòmini morosi.',
        ],
      },
      {
        name: 'Capraro Arianna',
        job: 'Area Segreteria',
        education: [
          'Mi sono diplomata all’ITCS L. B. Alberti a San Donà di Piave con la qualifica di Ragioniera.',
          "Per diversi anni mi sono occupata dell'accoglienza dei turisti e della gestione burocratica interna nel medesimo settore, frequentando periodicamente corsi di formazione, volti al miglioramento e all'aggiornamento costante.",
          'Da aprile 2021 mi sono affacciata al campo delle amministrazioni condominiali per la società Sfera S.a.s. con la quale mi sono impegnata al fine di perfezionare le mie conoscenze ed ottenerne di nuove.',
        ],
        tasks: [
          "All'interno del Gruppo SFERA mi occupo principalmente della contabilità dei Condomini ed in particolare della redazione dei bilanci di condominio.",
        ],
      },
      {
        name: 'Turchetto Marco',
        job: 'Collaborazioni continuative',
        education: [],
        tasks: [],
      },
      {
        name: 'Pacella Massimo',
        job: 'Collaborazioni continuative',
        education: [],
        tasks: [],
      },
    ],
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
