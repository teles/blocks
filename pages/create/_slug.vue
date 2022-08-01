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
          class="column"
          :style="{'width': `${ section.grid.split(' ')[indexColumn]/12 * 100 }%`}"
        >
          <div class="component-wrapper" @dblclick="openEditor(column.data)">
            <div class="component-wrapper__options">
              <button class="component-wrapper__option" @click="openEditor(column.data)">
                Editar
              </button>
              <button class="component-wrapper__option">
                Remover
              </button>
            </div>
            <component
              :is="column.component"
              :data="column.data"
            />
          </div>
        </div>
      </section>
      <div :class="isModalOpen === true ? 'modal--is-open' : 'modal'">
        <div class="modal__overlay" @click="isModalOpen = false" />
        <div class="modal__content">
          <button class="modal__close-button" @click="isModalOpen = false">
            &times;
          </button>
          modal edição
        </div>
      </div>
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
      isEditing: true,
      isModalOpen: false
    }
  },
  methods: {
    openEditor (component: any) {
      (this as any).isModalOpen = true
      console.log('sections: ', (this as any).sections)
      console.log('component: ', component)
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
    font-family: sans-serif
    background-color: #f5f5f5
    border: 1px solid #ddd
    border-radius: 4px 0
    color: #9da0a4
    content: "Seção"
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
      font-family: sans-serif
      background-color: #f5f5f5
      border: 1px solid #ddd
      border-radius: 4px 0 4px 0
      color: #9da0a4
      content: "Coluna"
      font-size: 12px
      font-weight: bold
      left: -1px
      padding: 3px 7px
      position: absolute
      top: -1px

.component-wrapper
  position: relative

  &:hover > .component-wrapper__options
    opacity: 1

  .component-wrapper__options
    position: absolute
    top: -2px
    right: 0
    opacity: .15
    transition: all ease-in-out .1s

  .component-wrapper__option
    cursor: pointer

.modal,
.modal--is-open
  display: none
  position: fixed
  top: 0
  bottom: 0
  right: 0
  left: 0
  justify-content: center
  align-items: center
  width: 100vw

.modal--is-open
  display: flex

.modal__overlay
  width: 100%
  background-color: rgba(0, 0, 0, .5)
  height: 100%
  position: absolute
  z-index: 1
  cursor: pointer

.modal__content
  margin: auto
  z-index: 2
  background: #fff
  padding: 20px
  border-radius: 4px
  box-shadow: 1px 1px 4px rgba(0, 0, 0, .5)
  position: relative

  .modal__close-button
    position: absolute
    right: -10px
    top: -10px
    width: 32px
    height: 32px
    padding: 0
    cursor: pointer
    background-color: #fff
    border: 1px solid #ccc
    border-radius: 2px
    color: rgba(0, 0, 0, .1)
    transition: all ease-in-out .1s
    &:hover
      color: #333

</style>
