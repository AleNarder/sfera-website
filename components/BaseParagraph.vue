<template>
  <div>
    <p class="primary--text mb-0">{{ title }}</p>
    <base-body :text="text" />
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
}
</script>
