<template>
  <aside class="page-canva">
    Designer Canva
    <section>
      <h2> Componentes </h2>
      <div v-for="(component, index) in schemas" :key="index">
        <h3>{{ component.name }}</h3>
      </div>
    </section>
  </aside>
</template>
<script type="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    schemas: {
      type: Array,
      required: true
    },
    isHidden: {
      type: Boolean,
      required: false,
      default: false
    }
  }
})
</script>
<style lang="sass">
.page-canva,
.page-canva--hidden
    grid-area: canva
    background-color: #16161d
    color: #fff
    max-width: initial

.page-canva--hidden
  max-width: 0

</style>
