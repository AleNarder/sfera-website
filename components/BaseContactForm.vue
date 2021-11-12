<template>
  <div>
    <base-info-card
      :title="title"
      :subtitle="subtitle"
      space="4"
      color="primary"
    />

    <base-text-field v-model="subject" name="Oggetto" label="Oggetto" />
    <base-textarea v-model="text" class="mb-6" label="Descrizione" />

    <base-btn
      :color="!theme.isDark ? 'accent' : 'white'"
      :href="`mailto:condominio@grupposfera.it?subject=${subject}&body=${text}`"
      outlined
      target="_blank"
    >
      Invia
    </base-btn>
  </div>
</template>

<script>
export default {
  name: 'BaseContactForm',

  inject: ['theme'],
  data: () => ({
    text: '',
    subject: '',
  }),
  props: {
    subtitle: String,
    title: {
      type: String,
      default: 'INVIACI UN MESSAGGIO',
    },
  },
}
</script>
