<template>
  <client-only>
    <editor
      :value="initialValue"
      :height="height"
      :mode="initialEditType"
      :preview-style="previewStyle"
      :options="options"
      @input="setValue"
    />
  </client-only>
</template>

<script lang="ts">
import Vue from 'vue'
import 'tui-editor/dist/tui-editor.css'
import 'tui-editor/dist/tui-editor-contents.css'
import 'codemirror/lib/codemirror.css'
import { addImageBlobHook } from '~/repositories/helpers/ImageRepository'

type EditorType = {
  initialValue: string
  height: string
  initialEditType: string
  previewStyle: string
  options: {
    hooks: {
      addImageBlobHook: (blob: Blob, callback: Function) => void
    }
  }
}

export default Vue.extend({
  components: {
    Editor: () => {
      if (process.client) {
        return import('@toast-ui/vue-editor/src/Editor.vue')
      }
    }
  },
  data(): EditorType {
    return {
      initialValue: '',
      height: '1000px',
      initialEditType: 'markdown',
      previewStyle: 'vertical',
      options: {
        hooks: {
          addImageBlobHook: addImageBlobHook.bind(this)
        }
      }
    }
  },
  methods: {
    setValue(value: string): void {
      this.initialValue = value
    }
  }
})
</script>
