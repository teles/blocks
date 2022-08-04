<template>
  <FormulateForm v-model="copy">
    <div
      v-for="(schema, index) in schemas"
      :key="index"
    >
      <SchemaToForm
        v-if="Array.isArray(schema.children)"
        :model="model[schema.name]"
        :schemas="schema.children"
      />
      <FormulateInput
        v-else
        :name="schema.name"
        :validation="schema.validation"
        :label="schema.label"
        :type="schema.type || 'text' "
      />
    </div>
  </FormulateForm>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    model: {
      type: Object,
      required: true
    },
    schemas: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      copy: (this as any).model
    }
  }
})
</script>
