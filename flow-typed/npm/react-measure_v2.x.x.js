// flow-typed signature: 025b87ae7fbc9da0307435fc7c5ec344
// flow-typed version: <<STUB>>/react-measure_v2.0.2/flow_v0.69.0

/**
 * This is an autogenerated libdef stub for:
 *
 *   'react-measure'
 *
 * Fill this stub out by replacing all the `any` types.
 *
 * Once filled out, we encourage you to share your work with the
 * community by sending a pull request to:
 * https://github.com/flowtype/flow-typed
 */

declare module 'react-measure' {
  declare export type ContentRect = {
    offset: {
      offsetTop: number,
      offsetLeft: number,
      offsetWidth: number,
      offsetHeight: number,
    },
    scroll: {
      scrollTop: number,
      scrollLeft: number,
      scrollWidth: number,
      scrollHeight: number,
    },
    bounds: {
      width: number,
      height: number,
      top: number,
      right: number,
      bottom: number,
      left: number,
    },
    margin: {
      top: number,
      right: number,
      bottom: number,
      left: number,
    },
  }

  declare class Measure extends React$Component<{
    client?: boolean,
    offset?: boolean,
    scroll?: boolean,
    bounds?: boolean,
    margin?: boolean,
    innerRef?: (HTMLElement) => void,
    onResize?: (ContentRect) => void,
    children?: ({
      measureRef: () => void,
      measure: () => void,
      contentRect: ContentRect,
    }) => React$Node,
  }> {}

  declare module.exports: typeof Measure
}
