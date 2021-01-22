import { accessorType } from '~/store'
import { EnvironmentVariables } from '~/plugins/Environments'
import { Sanitize } from '~/plugins/Prototypes'

declare module 'vue/types/vue' {
  interface Vue {
    $accessor: typeof accessorType
    $confirm(message: string): Promise<boolean>
    $alert(message: string): Promise<boolean>
    $environments: EnvironmentVariables
    $sanitize: Sanitize
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $accessor: typeof accessorType
  }
}
