<template>
  <div>
    <h2>{{ configs.title }}</h2>
    <h3>{{ configs.subtitle }} </h3>
    <ul>
      <li>
        <a v-for="(block, index) in blocks" :key="index" :href="block.anchor">
          {{ block.text }}
        </a>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">

import Vue from 'vue'
const BasicTagsSchema = {
  name: 'Tags',
  blocks: {
    text: {
      type: 'string'
    },
    anchor: {
      type: 'string'
    }
  }
}
export default Vue.extend({
  name: 'BasicTags',
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
export { BasicTagsSchema }
</script>
