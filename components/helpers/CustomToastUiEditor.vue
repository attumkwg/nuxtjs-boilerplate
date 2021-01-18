<template>
  <client-only>
    <editor v-model="editorText" height="1000px" />
  </client-only>
</template>

<script lang="ts">
import Vue from 'vue'
import 'tui-editor/dist/tui-editor.css'
import 'tui-editor/dist/tui-editor-contents.css'
import 'codemirror/lib/codemirror.css'

export default Vue.extend({
  components: {
    Editor: () => {
      if (process.client) {
        return import('@toast-ui/vue-editor/src/Editor.vue')
      }
    }
  },
  data() {
    return {
      editorText: '',
      sample: ''
    }
  }
})
</script>
