<template>
  <section class="page">
    <DesignerBar />
    <main class="page-content">
      <section
        v-for="(section, index) in sections"
        :key="index"
        :style="{'order': section.position}"
        class="page-section"
      >
        <div
          v-for="(column, indexColumn) in section.columns"
          :key="indexColumn"
          :style="{'width': `${ section.grid.split(' ')[indexColumn]/12 * 100 }%`}"
          @dblclick="openEditor()"
        >
          <div v-if="isEditing" class="component-wrapper">
            <div class="component-wrapper__options">
              <button>Editar</button>
            </div>
            <component
              :is="column.component"
              :data="column.data"
            />
          </div>
        </div>
      </section>
    </main>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import BasicCard from '~/components/blocks/BasicCard.vue'
import Billboard from '~/components/blocks/Billboard.vue'
import Sections from '~/sobre-nos.json'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    BasicCard,
    Billboard
  },
  data () {
    return {
      sections: Sections,
      isEditing: true
    }
  },
  methods: {
    openEditor () {
      // console.log('oiii')
    }
  }
})
</script>
<style lang="sass">
body
  margin: 0

.page
  display: grid
  grid-template-areas: "navbar navbar" "canva content"
  grid-template-columns: 250px 1fr
  min-height: 100vh
  grid-template-rows: 40px 1fr

.page-content
  display: flex
  flex-direction: column
  grid-area: content
  background-color: rgba(252, 252, 252)

.page-section
  width: 100%
  display: flex
  box-sizing: border-box
  gap: 10px
  background-color: #F5F5F5
  box-sizing: border-box
  box-shadow: inset 0 1px 13px rgb(0 0 0 / 10%)
  border: 1px solid #ddd
  border-radius: 4px
  position: relative
  padding: 25px 14px 0
  margin: 15px 0

  &::before
    background-color: #F5F5F5
    border: 1px solid #DDDDDD
    border-radius: 4px 0
    color: #9DA0A4
    content: "Section"
    font-size: 12px
    font-weight: bold
    left: -1px
    line-height: 2
    padding: 3px 7px
    position: absolute
    top: -1px

.column
    background-color: #fff
    border: 1px solid #ddd
    border-radius: 4px
    margin: 15px 0
    padding: 39px 19px 24px
    position: relative

    &::before
      background-color: #F5F5F5
      border: 1px solid #ddd
      border-radius: 4px 0 4px 0
      color: #9DA0A4
      content: "Column"
      font-size: 12px
      font-weight: bold
      left: -1px
      padding: 3px 7px
      position: absolute
      top: -1px

.component-wrapper
  position: relative
  .component-wrapper__options
    position: absolute
    top: -2px
    right: 0

</style>
