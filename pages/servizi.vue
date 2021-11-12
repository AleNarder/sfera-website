<template>
  <div>
    <section-hero-alt :title="title" />
    <v-container class="pa-12" style="max-width: min(100%, 1200px)">
      <base-title title="DI COSA CI OCCUPIAMO" />

      <base-paragraph
        title="Predisposizione bilanci e reparti condominiali"
        text="Sfera condominio utilizza RESYS della Softime SRL per la gestione della contabilità dei condomini. RESYS è una piattaforma cloud e pertanto tutti i dati contabili del condominio risiedono su server esterni sicuri"
      />
      <base-paragraph
        title="Adempimenti fiscali"
        text="La gestione fiscale del Condominio è integrata nel gestionale RESYS. A maggior garanzia del cliente, SFERA Condominio si avvale comunque dell’assistenza di consulenti esterni per la verifica della corretta gestione degli adempimenti fiscali. La Società, inoltre, è in grado di seguire i Condòmini in tutte le attività necessarie per ottenere le agevolazioni fiscali previste dalle varie normative."
      />
      <base-paragraph
        title="Predisposizione tabelle millesimali e regolamenti condominiali"
        text="In 20 anni di attività la Società ha collaborato alla nascita di molti condomini accompagnando i costruttori nel predisporre tabelle millesimali e regolamenti condominiali su misura per ogni fabbricato. L’esperienza nell’amministrazione di immobili, infatti, permette di avere una visione sulle dinamiche future della vita condominiale prevedendone le criticità e traducendole in un adeguato regolamento condominiale oltre che in una corretta tabella millesimale."
      />
      <base-title title="Tramite i nostri partner" :size="null" />
      <base-paragraph
        title="Consulenza legale"
        text="SFERA Condominio si avvale della costante collaborazione con lo Studio Legale Avv. Tanja Maria Bigaran. L’Assistenza legale continuativa permette allo Studio di essere tempestivo nelle azioni da intraprendere. Ai Clienti viene inoltre proposta la sottoscrizione di una polizza di Tutale Legale a bassissimo costo grazie ad una convenzione attivata tramite l’Associazione ANACI."
      />
      <base-paragraph
        title="Consulenza tecnica"
        text="La Società ha stretto collaborazioni continuative con lo Studio tecnico Arch. Perissinotto e con lo Studio tecnico Arch. Balduit al fine di assistere i Clienti per ogni tipo di esigenza tecnica: progettazione; predisposizione di capitolati; Direzione Lavori; Sicurezza cantiere; pratiche edilizie; sanatorie; ecc. "
      />
      <base-section-separator class="my-12" />
      <base-title title="GESTIONE WEB" sub />
      <p class="primary--text text-uppercase mt-n-2" style="margin-top: -18px">
        servizi
      </p>
      <base-body
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos provident culpa, aut adipisci dolor officiis quasi accusantium corporis impedit quo ad animi quos, repellat voluptates temporibus optio est vel accusamus?"
      />
      <base-btn href="https://alfred.amministro.io" target="_blank"
        >Accedi</base-btn
      >
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: 'Servizi',
    }
  },
}
</script>
