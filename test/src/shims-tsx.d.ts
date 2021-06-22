import Vue, { VNode } from 'vue'

declare global {
  namespace JSX {
    // @ts-ignore
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any
    }
  }
}