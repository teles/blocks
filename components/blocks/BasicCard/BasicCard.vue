<template>
  <div>
    <p> {{ data.icon }}</p>
    <h2>{{ data.title }}</h2>
    <p>{{ data.text }} </p>
  </div>
</template>
<script lang="ts">
import Vue, { PropOptions } from 'vue'

const BasicCardSchema = {
  icon: '',
  title: '',
  text: ''
}

export default Vue.extend({
  name: 'BasicCard',
  props: {
    data: {
      type: Object,
      required: true
    } as PropOptions<typeof BasicCardSchema>
  }
})

export { BasicCardSchema }
</script>
