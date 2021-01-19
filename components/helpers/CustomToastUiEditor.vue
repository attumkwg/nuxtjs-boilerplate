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

export type EditorType = {
  initialValue: string
  height: string
  initialEditType: string
  previewStyle: string
  options: {
    hooks: {}
  }
}

const addImageBlobHook = (blob: Blob, callback: Function) => {
  const data = new FormData()
  data.append('image', blob)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const config = {
    header: {
      'Content-Type': 'multipart/form-data'
    }
  }
  // eslint-disable-next-line standard/no-callback-literal
  callback('', '')

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
