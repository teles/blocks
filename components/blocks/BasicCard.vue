<template>
  <div>
    <h2>{{ configs.title }}</h2>
    <h3>{{ configs.subtitle }} </h3>
    <div>
      <p v-for="(block, index) in blocks" :key="index">
        {{ block.text }}
      </p>
    </div>
  </div>
</template>
<script lang="ts">

import Vue from 'vue'
export default Vue.extend({
  name: 'BasicCard',
  props: {
    blocks: {
      type: Array,
      required: true
    },
    configs: {
      type: Object,
      required: true
    }
  }
})
</script>
