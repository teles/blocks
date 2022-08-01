<template>
  <div class="billboard">
    <img :src="data.image.src" :alt="data.image.alt" class="billboard__image">
    <h2>{{ data.title }}</h2>
    <h3>
      {{ data.subtitle }}
    </h3>
    <p>
      {{ data.text }}
    </p>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Billboard', // eslint-disable-line vue/multi-word-component-names
  props: {
    data: {
      type: Object,
      required: true
    }
  }
})
</script>
<style lang="sass">
.billboard
  .billboard__image
    max-width: 100%
</style>
