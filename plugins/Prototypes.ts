import Vue from 'vue'
import sanitizeHTML from 'sanitize-html'

export type Sanitize = {
  (dirty: string, options?: sanitizeHTML.IOptions | undefined): string
}

Vue.prototype.$sanitize = sanitizeHTML
