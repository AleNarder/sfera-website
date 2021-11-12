<template>
  <div>
    <section-hero-alt :title="title" />
    <v-container class="pa-12"
      ><base-section-heading title="SFERA CONDOMINIO: CHI SIAMO">
        SFERA Condominio è un marchio (?) di SFERA S.a.s. di Enrico Colla &
        C.,società nata nel 2002 specializzata nelle amministrazioni
        condominiali. Ritenendo fondamentale la vicinanza agli immobili
        amministrati, SFERA Condominio opera prevalentemente nel territorio dei
        Comuni di Jesolo, Cavallino-Treporti ed Eraclea. Oltre alla vicinanza
        agli immobili amministrati SFERA Condominio trova i suoi punti di forza
        nella professionalità dei propri collaboratori e nella trasparenza del
        proprio operato. SFERA Condominio è stata la promotrice del primo
        contratto di mandato per gli amministratori (contratto oggi utilizzato
        da tutta l’Associazione ANACI); da anni è attiva per la definizione
        della Legge Regionale e del Regolamento Comunale per la gestione delle
        piscine; collabora con MINNOVI S.r.l per la realizzazione di un
        gestionale innovativo nel settore delle amministrazioni (amministro.io –
        Alfred)
      </base-section-heading>
      <base-section-separator class="my-12" />
      <v-row>
        <v-col
          class="d-flex flex-column align-center"
          :cols="$vuetify.breakpoint.smAndDown ? 12 : 4"
        >
          <base-avatar-card
            class="d-flex flex-column align-center"
            align="center"
            icon="fas fa-building"
            title="I nostri servizi"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis illum
      veniam cum dolores ratione commodi beatae quas maxime, laboriosam
      excepturi solut!"
            dark
          />
          <base-btn to="/servizi">Scopri di più</base-btn>
        </v-col>
        <v-col
          class="d-flex flex-column align-center"
          :cols="$vuetify.breakpoint.smAndDown ? 12 : 4"
        >
          <base-avatar-card
            class="d-flex flex-column align-center"
            align="center"
            icon="fas fa-users"
            title="Lo staff"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis illum
      veniam cum dolores ratione commodi beatae quas maxime, laboriosam
      excepturi solut!"
            dark
          />
          <base-btn to="/staff">Scopri di più</base-btn>
        </v-col>
        <v-col
          class="d-flex flex-column align-center"
          :cols="$vuetify.breakpoint.smAndDown ? 12 : 4"
        >
          <base-avatar-card
            class="d-flex flex-column align-center"
            align="center"
            icon="fas fa-phone"
            title="Contatti"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis illum
      veniam cum dolores ratione commodi beatae quas maxime, laboriosam
      excepturi solut!"
            dark
          />
          <base-btn to="/contatti">Scopri di più</base-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data: () => ({
    title: 'Gruppo Sfera',
  }),
}
</script>

