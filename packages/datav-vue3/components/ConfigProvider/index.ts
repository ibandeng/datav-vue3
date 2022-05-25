import type { App, Plugin } from 'vue'
import ConfigProvider from './src/index.vue'

export const ConfigProviderPlugin: Plugin = {
  install(app: App) {
    app.component('DvConfigProvider', ConfigProvider)
  },
}

export {
  ConfigProvider,
}
