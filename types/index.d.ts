import { accessorType } from '~/store'
import { EnvironmentVariables } from '~/plugins/Environments'

declare module 'vue/types/vue' {
  interface Vue {
    $accessor: typeof accessorType
    $confirm(message: string): Promise<boolean>
    $alert(message: string): Promise<boolean>
    $environments: EnvironmentVariables
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $accessor: typeof accessorType
  }
}
