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

let chart: any
if (process.client) {
  require('@toast-ui/editor/dist/i18n/ja-jp.js')
  chart = require('@toast-ui/editor-plugin-chart')
}

type EditorType = {
  initialValue: string
  height: string
  initialEditType: string
  previewStyle: string
  options: {
    hooks: {
      addImageBlobHook: (blob: Blob, callback: Function) => void
    },
    language: string,
    hideModeSwitch: boolean
    plugin: any[]
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
      height: 'inherit',
      initialEditType: 'markdown',
      previewStyle: 'vertical',
      options: {
        hooks: {
          addImageBlobHook: addImageBlobHook.bind(this)
        },
        language: 'ja',
        hideModeSwitch: false,
        plugin: [
          chart
        ]
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

<style lang="scss" scoped>
::v-deep .tui-editor-defaultUI {
  .te-switch-button {
    width: 104px;
  }
}
</style>
