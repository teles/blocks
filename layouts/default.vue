<template>
  <main>
    <Nuxt />
    <DesignerBar />
  </main>
</template>
<script type="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'DefaultLayout'
})
</script>
<style lang="sass">
body
  margin: 0

</style>
