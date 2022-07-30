<template>
  <div>
    <section
      v-for="(section, index) in sections"
      :key="index"
    >
      <component
        :is="typeToComponents[section.configs.type]"
        :blocks="section.blocks"
        :configs="section.configs"
      />
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import BasicCard from '~/components/blocks/BasicCard.vue'
import BasicTags from '~/components/blocks/BasicTags.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    BasicCard,
    BasicTags
  },
  data () {
    return {
      typeToComponents: {
        basicCard: 'BasicCard',
        basicTags: 'BasicTags'
      },
      sections: [{
        configs: {
          type: 'basicCard',
          title: 'Exemplo de título',
          subtitle: 'Exemplo de subtítulo'
        },
        blocks: [{
          text: 'Primeiro parágrafo'
        }, {
          text: 'Segundo parágrafo'
        }]
      }, {
        configs: {
          type: 'basicTags',
          title: 'Segundo componente'
        },
        blocks: [{
          text: 'Google',
          anchor: 'https://www.google.com.br'
        }]
      }]
    }
  }
})
</script>
