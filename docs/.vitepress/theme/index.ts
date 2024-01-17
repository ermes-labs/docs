import { h } from 'vue'
import Theme from 'vitepress/theme'
import Layout from './Layout.vue'

import './styles/hero.css'
import './styles/scrollbar.css'
import './styles/vars.css'

export default {
  ...Theme,
  Layout() {
    return h(Layout)
  },
}
