import { VueConstructor } from 'vue'
import Confirm from '~/components/helpers/utils/Confirm.vue'
import Alert from '~/components/helpers/utils/Alert.vue'

export default class {
  static install(Vue: VueConstructor) {
    Vue.mixin({
      methods: {
        $confirm: (message: string) => {
          return new Promise(resolve => {
            // eslint-disable-next-line no-new
            new Confirm({
              propsData: {
                message,
                success: () => resolve(true),
                failure: () => resolve(false)
              }
            })
          })
        },
        $alert: (message: string) => {
          return new Promise(resolve => {
            // eslint-disable-next-line no-new
            new Alert({
              propsData: {
                message,
                success: () => resolve(true),
                failure: () => resolve(false)
              }
            })
          })
        }
      }
    })
  }
}
