<template>
  <div>
    <BasicCard
      :configs="configs"
      :blocks="blocks"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  data () {
    return {
      configs: {
        title: 'Exemplo de título',
        subtitle: 'Exemplo de subtítulo'
      },
      blocks: [{
        text: 'Primeiro parágrafo'
      }, {
        text: 'Segundo parágrafo'
      }]
    }
  }
})
</script>
