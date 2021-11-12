<template>
  <v-navigation-drawer
    bottom
    color="transparent"
    fixed
    height="auto"
    overlay-color="secondary"
    overlay-opacity=".8"
    temporary
    v-bind="$attrs"
    v-on="$listeners"
  >
    <v-list color="white" shaped>
      <v-list-item
        v-for="({ name, path }, i) in items"
        :key="i"
        :exact="name === 'index'"
        :to="{ path }"
        color="primary"
      >
        <v-list-item-content>
          <v-list-item-title v-text="name" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'Drawer',

  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
