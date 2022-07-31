<template>
  <main class="page">
    <NuxtLink :to="`/create`">
      Nova página
    </NuxtLink>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage'
})
</script>
