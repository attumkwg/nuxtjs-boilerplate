<template>
  <v-dialog v-model="isActive" persistent max-width="30%">
    <v-card>
      <v-card-text
        class="text--primary"
        style="padding-top: 20px"
        v-text="message"
      />
      <v-card-actions>
        <v-spacer />
        <v-btn color="primary" depressed @click="ok" v-text="`OK`" />
        <v-btn outlined @click="cancel" v-text="`Cancel`" />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
export default Vue.extend({
  name: 'Confirm',
  props: {
    message: {
      type: String,
      default: ''
    },
    success: {
      type: Function as PropType<() => void>,
      default: null
    },
    failure: {
      type: Function as PropType<() => void>,
      default: null
    }
  },
  data() {
    return {
      isActive: false
    }
  },
  created() {
    this.$mount();
    // eslint-disable-next-line nuxt/no-globals-in-created
    document.body.appendChild(this.$el);

    this.isActive = true
  },
  methods: {
    destory(): void {
      this.isActive = false

      // 即座にdomを削除するとtransitionする前に消えてしまうので、200ms待つ
      setTimeout(() => {
        this.$el.parentNode?.removeChild(this.$el)
        this.$destroy()
      }, 200)
    },
    ok(): void {
      this.success()
      this.destory()
    },
    cancel(): void {
      this.failure()
      this.destory()
    }
  }
})
</script>

<style lang="scss" scoped>
.v-dialog__content {
  pointer-events: initial;
  background: rgba(100, 100, 100, 0.8);
}
</style>
