<template>
  <main class="page">
    <DesignerBar />
    <section
      v-for="(section, index) in sections"
      :key="index"
      class="page-content"
    >
      <component
        :is="typeToComponents[section.configs.type]"
        :blocks="section.blocks"
        :configs="section.configs"
      />
    </section>
    <DesignerCanva :schemas="schemas" :is-hidden="isCanvaHidden" />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import BasicCard, { BasicCardSchema } from '~/components/blocks/BasicCard.vue'
import BasicTags, { BasicTagsSchema } from '~/components/blocks/BasicTags.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    BasicCard,
    BasicTags
  },
  data () {
    return {
      schemas: [
        BasicCardSchema,
        BasicTagsSchema
      ],
      isCanvaHidden: false,
      typeToComponents: {
        basicCard: 'BasicCard',
        basicTags: 'BasicTags'
      },
      sections: []
    }
  }
})
</script>
<style lang="sass">
body
  margin: 0

.page
  display: grid
  grid-template-areas: "navbar navbar" "content canva"
  grid-template-columns: 1fr 280px
  min-height: 100vh
  grid-template-rows: 40px 1fr

.page-content
    grid-area: content
    background-color: #eee

</style>
