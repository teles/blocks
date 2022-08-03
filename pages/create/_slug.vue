<template>
  <section :class="{'edit': 'page--is-editing', 'preview': 'page'}[mode]">
    <div :class="{'edit': 'page-canva--is-editing', 'preview': 'page-canva'}[mode]">
      <ul class="page-canva__links">
        <li>Página</li>
        <li>Componentes</li>
      </ul>
      <div class="page-canva__content">
        Componentes
      </div>
    </div>
    <nav class="page-navbar">
      <button v-if="mode !== 'edit'" @click="setMode('edit')">
        Editar
      </button>
      <button v-if="mode !== 'preview'" @click="setMode('preview')">
        Pré visualizar
      </button>
    </nav>
    <main class="page-content">
      <section
        v-for="(section, index) in page.sections"
        :key="index"
        :style="{'order': section.position}"
        :class="{'edit': 'page-section--is-editing', 'preview': 'page-section'}[mode]"
      >
        <div
          v-for="(column, indexColumn) in section.columns"
          :key="indexColumn"
          :class="{'edit': 'column--is-editing', 'preview': 'column'}[mode]"
          :style="{'width': `${ section.grid.split(' ')[indexColumn]/12 * 100 }%`}"
        >
          <div :class="{'edit': 'component-wrapper--is-editing', 'preview': 'component-wrapper'}[mode]" @dblclick="openEditor(page.components[column])">
            <div class="component-wrapper__options">
              <button class="component-wrapper__option" @click="openEditor(page.components[column])">
                Editar
              </button>
              <button class="component-wrapper__option">
                Remover
              </button>
            </div>
            <component
              :is="page.components[column].type"
              :data="page.components[column].data"
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
          {{ schemas[modalContent.type] }}
        </div>
      </div>
    </main>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import BasicCard, { BasicCardSchema } from '~/components/blocks/BasicCard.vue'
import Billboard, { BillboardSchema } from '~/components/blocks/Billboard.vue'
import Page from '~/sobre-nos.json'
type mode = 'edit' | 'preview'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    BasicCard,
    Billboard
  },
  data () {
    return {
      schemas: {
        BasicCard: BasicCardSchema,
        Billboard: BillboardSchema
      },
      modalContent: {},
      page: Page,
      mode: 'edit',
      isModalOpen: false
    }
  },
  methods: {
    setMode (mode: mode) {
      (this as any).mode = mode
    },
    openEditor (component: any) {
      if ((this as any).mode === 'edit') {
        (this as any).modalContent = component;
        (this as any).isModalOpen = true
      }
    }
  }
})
</script>
<style lang="sass">
body
  margin: 0

.page,
.page--is-editing
  display: grid
  grid-template-areas: "navbar navbar" "canva content"
  grid-template-columns: 300px 1fr
  min-height: 100vh
  grid-template-rows: 56px 1fr
  transition: all ease-in-out .1s

.page
  grid-template-columns: 0 1fr

.page-canva,
.page-canva--is-editing
  border-left: 70px solid #18191b
  grid-area: canva
  background-color: #252627
  color: #fff
  max-width: initial

.page-canva
  max-width: 0

.page-navbar
  grid-area: navbar
  height: 56px
  background-image: linear-gradient(90deg, #ff5656, hsl(6deg 81% 54%))
  color: #fff
  display: flex
  padding: 10px
  box-sizing: border-box

.page-content
  display: flex
  flex-direction: column
  grid-area: content
  background-color: rgba(252, 252, 252)
  padding: 20px

.page-section,
.page-section--is-editing
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
  margin: 0 0 15px 0

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

.page-section
  width: initial
  gap: 0
  background-color: initial
  box-shadow: none
  border: none
  border-radius: 0
  padding: 0
  margin: 0
  &::before
    content: none

.column,
.column--is-editing
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

.column
  background-color: initial
  border: 0
  border-radius: 0
  margin: 0
  padding: 16px
  &::before
    content: none

.component-wrapper,
.component-wrapper--is-editing
  position: relative

  &:hover > .component-wrapper__options
    opacity: 1

  .component-wrapper__options
    display: none
    position: absolute
    top: -2px
    right: 0
    opacity: .15
    transition: all ease-in-out .1s

  .component-wrapper__option
    cursor: pointer

.component-wrapper--is-editing
  .component-wrapper__options
    display: block

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
  width: 800px
  max-width: calc(100vw - 80px)

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
