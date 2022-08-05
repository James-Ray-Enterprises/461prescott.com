import { createApp } from 'vue'
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox.css';
import './assets/styles/cabinet-grotesk.css'
import './style.css'
import App from './App.vue'

createApp(App,Fancybox).mount('#app')
