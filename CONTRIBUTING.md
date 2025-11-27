
# Contributing

This section is intended for contributors working on the SDK codebase.

## Install dependencies

You'll need:

* [Node.js](https://nodejs.org/) (with npm)
* [Deno](https://deno.com/)

Run:

```sh
npm install
```

### Format files

```sh
deno fmt
```

## Build `dist/meergo.min.js`

```sh
deno task build
```

Or step-by-step:

```sh
deno task bundle
deno task transpile
deno task minify
```

* `bundle`: bundles the SDK to `build/meergo.bundle.js`
* `transpile`: transpiles to ES5 and creates `build/meergo.es5.js`
* `minify`: minifies into `dist/meergo.min.js`

## Build ES6 and CJS modules

```sh
deno task build:es6     # Builds dist/meergo.es6.min.js
deno task build:cjs     # Builds dist/meergo.bundle.cjs
```

## Run tests

```sh
deno test
```

## Before committing

Use this to format, test, and build before commits:

```sh
deno task commit
```
