<template>
  <div :class="classes" class="base-avatar d-inline-flex">
    <v-avatar
      :color="color || 'primary'"
      :dark="dark"
      :size="size"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <base-icon v-if="icon" :dark="dark" :size="size / 2">
        {{ icon }}
      </base-icon>
      <base-img v-else-if="src" :src="src" />
    </v-avatar>
  </div>
</template>

<script>
export default {
  name: 'BaseAvatar',

  props: {
    color: String,
    dark: Boolean,
    icon: String,
    outlined: Boolean,
    size: {
      type: [Number, String],
      default: 56,
    },
    src: String,
  },

  data: () => ({
    multiply: 6,
  }),

  computed: {
    classes() {
      return [this.outlined && 'base-avatar--outlined']
    },
    outlineSize() {
      return Number(this.size) + this.size / this.multiply
    },
    styles() {
      const margin = this.size / (this.multiply * 2)

      return {
        // Aligns the outline content with the content
        margin: `-${margin}px 0 0 -${margin}px`,
      }
    },
  },
}
</script>


