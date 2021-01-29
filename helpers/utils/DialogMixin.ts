import Vue, { VueConstructor } from 'vue'
import Confirm from '~/components/helpers/utils/Confirm.vue'
import Alert from '~/components/helpers/utils/Alert.vue'

export default class {
  static install(VueConstructor: VueConstructor) {
    VueConstructor.mixin({
      methods: {
        $confirm: (message: string): Promise<boolean> => {
          return new Promise(resolve => {
            const VM = Vue.extend(Confirm)
            setTimeout(() => {
              try {
                // eslint-disable-next-line no-new
                new VM({
                  propsData: {
                    message,
                    success: () => resolve(true),
                    failure: () => resolve(false)
                  }
                })
              } catch (e) {
              }
            }, 200)
          })
        },
        $alert: (message: string): Promise<boolean> => {
          return new Promise(resolve => {
            const VM = Vue.extend(Alert)
            setTimeout(() => {
              try {
                // eslint-disable-next-line no-new
                new VM({
                  propsData: {
                    message,
                    success: () => resolve(true)
                  }
                })
              } catch (e) {
              }
            }, 200)
          })
        }
      }
    })
  }
}
