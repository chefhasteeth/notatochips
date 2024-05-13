import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import BaseLayout from '@/layouts/BaseLayout.vue'
import tap from 'lodash/tap'
import './application.tailwind.css';

createInertiaApp({
  resolve(name) {
    const pages = import.meta.glob('../pages/**/*.vue', { eager: true })

    return tap(pages[`../pages/${name}.vue`], page => {
      page.default.layout ??= BaseLayout
    })
  },

  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) }).use(plugin).mount(el)
  },
})
