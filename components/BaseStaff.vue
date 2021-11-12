<template>
  <div>
    <v-row>
      <v-col class="d-flex flex-column align-center">
        <base-avatar src="https://cdn.vuetifyjs.com/images/john.jpg" />
        <base-title :title="name"></base-title>
        <base-title :title="job" style="margin-top: -22px" weight="thin" />
        <div style="height: 3px; width: 28px; background-color: #949494" />
      </v-col>
    </v-row>
    <v-row>
      <div v-if="education.length > 0">
        <p class="text-uppercase">Formazione</p>
        <ul>
          <li v-for="(edu, i) in education" :key="i">
            <base-body>{{ edu }}</base-body>
          </li>
        </ul>
      </div>
      <div v-if="tasks.length > 0">
        <p class="text-uppercase">Mansioni</p>
        <ul>
          <li v-for="(task, i) in tasks" :key="i">
            <base-body>
              {{ task }}
            </base-body>
          </li>
        </ul>
      </div>
    </v-row>
  </div>
</template>
<script>
export default {
  props: {
    name: String,
    job: String,
    tasks: Array,
    education: Array,
  },
}
</script>
