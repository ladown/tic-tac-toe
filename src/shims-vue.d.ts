declare module '*.vue'

declare module '*.svg' {
  import { type DefineComponent } from 'vue';
  const content: DefineComponent;
  export default content;
}

declare module '*.svg?url' {
  export default string;
}

declare module '*.svg?raw' {
  export default string;
}
