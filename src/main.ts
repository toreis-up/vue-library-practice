import type { App } from 'vue'
import { HelloWorld, MyButton, Input } from './components'

export default {
  install: (app: App) => {
    app.component('HelloWorld', HelloWorld);
    app.component('MyButton', MyButton);
    app.component('MyInput', Input)
  }
};

export {HelloWorld, MyButton, Input}
