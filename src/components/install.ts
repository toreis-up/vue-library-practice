import type { App } from 'vue';
import {MyButton, MyInput, HelloWorld} from '@/components';

export function createMyLib()  {
  const install = (app: App) => {
    app.component("my-button", MyButton);
    app.component("my-input", MyInput);
    app.component("hello-world", HelloWorld)
  }
  return {install};
};