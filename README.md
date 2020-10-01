# Gizmo

A widget builder

## Getting started

First, verify that the demo widget is working for you:

    yarn
    yarn build

If those commands completed successfully, run

    yarn start

and visit http://localhost:5000 and http://localhost:5000/combined.

## How does it work?

At a high level, each widget has a `loader.js` file that will be included on
the page. It uses the SDK utilities to load the JS and CSS files necessary for
the widget, as well as registering the widget (`name`, `dependenciesCount` and
`start` function). Only the SDK utilities that are used end up in the final
loader, eg. if a widget does not need any external CSS, the CSS utilities will
not be included in the bundle, making it as minimal as possible.

Additionally, every widget has a `widget.js` file, which defines a `render`
function that will be called by the loader once all dependencies are ready. The
`render` function will typically take an `options` parameter to control the
behaviour of the widget.

## Usage

See the [index.html](./index.html) file for an annotated usage example of the
demo widget.

## Creating a new widget

To create a new widget, copy the `demoWidget` folder in `src` and modify
the files according to your needs.

You will also need to add scripts to the `package.json` with details about how
to build the widget and watch for changes during development. Here is a
template, but please refer to the existing scripts for the demo widget for
working examples:

```json
{
  "build:<my-widget>-loader": "webpack --config src/<my-widget>/loader.webpack.config.js",
  "build:<my-widget>-widget": "webpack --config src/<my-widget>/widget.webpack.config.js",
  "watch:<my-widget>-loader": "yarn run build:<my-widget>-loader -- --watch",
  "watch:<my-widget>-widget": "yarn run build:<my-widget>-widget -- --watch"
}
```

After that, you can use `yarn build` and `yarn watch` directly to build
and watch all widgets concurrently.
